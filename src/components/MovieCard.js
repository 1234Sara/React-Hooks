import React from "react";
import Card from "react-bootstrap/Card";

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: "21rem" }}>
      <Card.Img variant="top" src={movie.posterURL} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <h3>{movie.rating}</h3>
      </Card.Body>
    </Card>
  );
};
export default MovieCard;
