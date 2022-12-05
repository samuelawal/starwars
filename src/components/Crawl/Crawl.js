import React from "react";
import styles from "./style.module.css";
import { useContext } from "react";
import AppContext from "../../context";

const Crawl = () => {
  const { movies, selectedMovieIndex } = useContext(AppContext);
  return (
    <section className={`${styles.container}`}>
      <article className={`${styles.crawl} fade-in`}>
        <p>{movies[selectedMovieIndex].opening_crawl}</p>
      </article>
    </section>
  );
};

export default Crawl;
