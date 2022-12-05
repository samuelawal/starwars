import React, { useContext } from "react";
import AppContext from "../context";
const StarwarsTitleDropdown = () => {
  const {movies, loading, onSelectedMovieIndex} = useContext(AppContext)
  return (
    <select className="select-input" onChange={onSelectedMovieIndex} disabled={loading}>
        <React.Fragment>
        <option>Select a title</option>
        {movies.map(movie => (
          <option key={movie.episode_id} value={movie.episode_id}>{movie.title}</option>
        ))}
        </React.Fragment>
    </select>
  )
}

export default StarwarsTitleDropdown