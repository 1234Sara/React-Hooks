import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const NewMovie = ({ showModal, handleClose, handleSave }) => {
  const [titleMovie, setTitleMovie] = useState("");
  const [descriptionMovie, setDescriptionMovie] = useState("");
  const [posterURLMovie, setPosterURLMovie] = useState("");
  const [ratingMovie, setRatingMoive] = useState("");

  const resetStates = () => {
    setTitleMovie("");
    setDescriptionMovie("");
    setPosterURLMovie("");
    setRatingMoive("");
  };

  const handleCloseModal = () => {
    handleClose();
    resetStates();
  };

  const handleSaveModal = () => {
    handleSave({
      title: titleMovie,
      description: descriptionMovie,
      posterURL: posterURLMovie,
      rating: ratingMovie,
    });
    resetStates();
  };

  return (
    <Modal show={showModal}>
      <Modal.Header closeButton onHide={handleClose}>
        <Modal.Title>Favorite Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label>Title Movie</Form.Label>
          <Form.Control
            type="Title"
            placeholder="For Example: Title Fav. Movie"
            value={titleMovie}
            onChange={(e) => {
              setTitleMovie(e.target.value);
            }}
          />
          <Form.Label>Description Movie</Form.Label>
          <Form.Control
            type="Description"
            placeholder="For Example: Wirte the Movie Description"
            value={descriptionMovie}
            onChange={(e) => {
              setDescriptionMovie(e.target.value);
            }}
          />
          <Form.Label>Poster URL Movie</Form.Label>
          <Form.Control
            type="posterURLMovie"
            placeholder="For Ex: MoviePhoto by copying the Image Add from Google"
            value={posterURLMovie}
            onChange={(e) => {
              setPosterURLMovie(e.target.value);
            }}
          />
          <Form.Label>Rating Movie</Form.Label>
          <Form.Control
            type="Rating"
            placeholder="For Example: Rate the movie as 9"
            value={ratingMovie}
            onChange={(e) => {
              setRatingMoive(e.target.value);
            }}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default NewMovie;
