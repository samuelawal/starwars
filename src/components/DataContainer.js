import { useCallback, useEffect, useReducer } from "react";

import {

  SET_MOVIES,
  STAR_WARS_INITIAL_STATE,
  SET_LOADING,
  SET_CHARACTERS,
  RESET_STATE,
  RESET_LOADING,
  RESET_FILTER,
  SET_SELECTED_MOVIE_INDEX,
} from "../constants";
import * as API from "../api";
const AppReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.value, loadingText: action.text };
    case SET_CHARACTERS:
      return {
        ...state,
        characters: {
          ...state.characters,
          [action.movieId]: action.characters,
        },
      };
    case RESET_LOADING:
      return { ...state, loading: false, loadingText: null };
    case SET_MOVIES:
      return { ...state, movies: action.movies };
    case RESET_FILTER:
      return { ...state, filter: STAR_WARS_INITIAL_STATE.filter };
    case SET_SELECTED_MOVIE_INDEX:
      return { ...state, selectedMovieIndex: action.value };
    case RESET_STATE:
      return {
        ...state,
        loading: false,
        loadingText: null,
        filter: STAR_WARS_INITIAL_STATE.filter,
      };
    default:
      return state;
  }
};
export default function DataContainer({ render }) {
  const { state, onSelectedMovieIndex } = useLocalState();
  const contextData = { ...state, onSelectedMovieIndex };
  return render(contextData);
}
function useLocalState() {
  const [state, dispatch] = useReducer(AppReducer, STAR_WARS_INITIAL_STATE);
  const onSelectedMovieIndex = (e) => {
    dispatch({ RESET_FILTER });
    const { movies } = state;
    const movieIndex = movies.findIndex(
      (movie) => String(movie.episode_id) === e.target.value
    );
    dispatch({
      type: SET_SELECTED_MOVIE_INDEX,
      value: movieIndex >= 0 ? movieIndex : null,
    });
  };
  useEffect(
    useCallback(() => {
      const setMovies = async () => {
        dispatch({
          type: SET_LOADING,
          value: true,
          text: "The Force is searching...",
        });
        try {
          const data = await API.fetchMovies();
          dispatch({ type: SET_MOVIES, movies: data });
        } catch (error) {
          alert(error.message);
        } finally {
          dispatch({ type: RESET_LOADING });
        }
      };
      dispatch({ type: RESET_STATE });
      const { movies } = state;
      if (movies.length < 1) setMovies();
    }, [dispatch, state]),
    []
  );
  useEffect(
    useCallback(() => {
      const setCharacters = async (movieId, characterUrls) => {
        dispatch({
          type: SET_LOADING,
          value: true,
          text: "The force is searching",
        });
        try {
          const characters = await API.fetchCharacters(characterUrls);
          dispatch({
            type: SET_CHARACTERS,
            movieId,
            characters,
          });
        } catch (err) {
          window.alert(err.message);
        } finally {
          dispatch({ type: RESET_LOADING });
        }
      };
      const { selectedMovieIndex, movies } = state;
      if (selectedMovieIndex !== null) {
        const movieId = movies[selectedMovieIndex].episode_id;
        setCharacters(movieId, movies[selectedMovieIndex].characters);
      }
    }, [dispatch, state]),
    [state.selectedMovieIndex]
  );
  return {
    state,
    onSelectedMovieIndex,
  };
}
