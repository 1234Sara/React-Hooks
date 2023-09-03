import React from "react";
import { Link, useParams } from "react-router-dom";
import { movies } from "../pages/Home";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id.toString() === id.toString());
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>
        Trailer:{" "}
        <a href={movie.trailer} target="_blank" rel="noopener noreferrer">
          Click here to watch the trailer
        </a>
      </p>
      <Link
        to="/"
        className="btn"
        style={{ backgroundColor: "dodgerBlue", color: "white" }}
      >
        Go Back
      </Link>
    </div>
  );
};

export default MovieDetails;
