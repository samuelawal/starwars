import StarwarsTitleDropdown from "./StarwarsTitleDropdown";
import logo from "../assets/logo.png"
import StarwarsLogo from "./StarwarsLogo";
import React, { useContext } from "react";
import AppContext from "../context";
import Crawl from "./Crawl/Crawl";
const HomeView = () => {
  const { movies, selectedMovieIndex } = useContext(AppContext);
  return (
    <>
    <div className="container">
      <img src={logo} alt="star-wars-logo" width="80" className="main_logo"/>
      <StarwarsTitleDropdown />
      <React.Fragment>
        {selectedMovieIndex !== null && selectedMovieIndex >= 0 ? (
          <React.Fragment>
            <h1 className="movie_title">{movies[selectedMovieIndex].title}</h1>
          <Crawl/>
          </React.Fragment>
        ) : (
          <StarwarsLogo />
          )}
      </React.Fragment>
    </div>
          </>
  );
};

export default HomeView;
