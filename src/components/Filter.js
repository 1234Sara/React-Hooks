import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Filter.css";

const Filters = ({ filterMovies }) => {
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  return (
    <div className="filter">
      <Form className="form">
        <Form.Label>Title</Form.Label>
        <Form.Control
          className="title"
          type="Title"
          placeholder="Title"
          value={titleFilter}
          onChange={(e) => {
            setTitleFilter(e.target.value);
          }}
        />
        <Form.Label>Rating</Form.Label>
        <Form.Control
          className="rating"
          style={
            {
              // display: "flex",
              // justifyContent: "space-around",
              // width: "200px",
              // height: "100px",
            }
          }
          type="Rating"
          placeholder="Rating"
          value={ratingFilter}
          onChange={(e) => {
            setRatingFilter(e.target.value);
          }}
        />
      </Form>
      <Button
        variant="primary"
        onClick={() => {
          filterMovies(titleFilter, ratingFilter);
        }}
      >
        Submit
      </Button>
    </div>
  );
};
export default Filters;
