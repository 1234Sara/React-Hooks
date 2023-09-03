import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <nav>
      {/* <Link to={`/MovieDetails/${movie.id}`}>MovieDetails</Link> */}
      <Card style={{ width: "21rem" }}>
        <Card.Img variant="top" src={movie.posterURL} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <h3>{movie.rating}</h3>
          {/* <Button variant="info">
            <nav.Link to={`/MovieDetails/${movie.id}`}>MovieDetails</nav.link>
          </Button>{" "} */}
          {/* <button className="btn btn-primary">
            <Link to={`/MovieDetails/${movie.id}`} className="text-white">
              MovieDetails
            </Link>
          </button> */}
          <Link
            to={`/MovieDetails/${movie.id}`}
            className="btn"
            style={{ backgroundColor: "dodgerBlue", color: "white" }}
          >
            MovieDetails
          </Link>
        </Card.Body>
      </Card>
    </nav>
  );
};
export default MovieCard;
