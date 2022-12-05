export const STAR_WARS_API_URL = 'https://swapi.dev/api';
export const STAR_WARS_INITIAL_STATE = {
    loading: false,
    filter: 'all',
    selectedMovieIndex: null,
    movies: [],
    loadingText: '',
}
export function isArrayAndHasContent(arr) {
    return Array.isArray(arr) && arr.length > 0;
  }
export const SET_MOVIES = 'SET_MOVIES';
export const SET_LOADING = 'SET_LOADING';
export const SET_CHARACTERS = 'SET_CHARACTERS';
export const RESET_STATE = 'RESET_STATE';
export const RESET_FILTER = 'RESET_FILTER';
export const RESET_LOADING = 'RESET_LOADING';
export const SET_SELECTED_MOVIE_INDEX = 'SET_SELECTED_MOVIE_INDEX'