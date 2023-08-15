import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

const MovieList = ({ movies }) => {
  return (
    <div className="movie">
      {movies.map((ele) => (
        <MovieCard movie={ele} />
      ))}
    </div>
  );
};
export default MovieList;
