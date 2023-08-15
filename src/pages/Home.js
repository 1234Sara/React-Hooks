import MovieList from "../components/MovieList";
import Filters from "../components/Filter";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import NewMovie from "../components/NewMovie";

const movies = [
  {
    title: "Collateral Beauty",
    description:
      "Retreating from life after a tragedy, a man questions the universe by writing to Love, Time, and Death. Receiving unexpected answers ",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMTQ5ODE4MTY2NV5BMl5BanBnXkFtZTgwMzM2NzEzMDI@._V1_FMjpg_UX1000_.jpg",
    rating: 9.5,
  },
  {
    title: "Titanic",
    description:
      "Titanic was 882 feet 9 inches (269.06 m) long with a maximum breadth of 92 feet 6 inches (28.19 m). ",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
    rating: 9,
  },
  {
    title: "La La Land",
    description:
      "La La Land is a 2016 American romantic musical film written and directed by Damien Chazelle.The film stars Ryan Gosling",
    posterURL:
      "https://www.goldenglobes.com/sites/default/files/articles/cover_images/2017-la_la_land.jpg?format=pjpg&auto=webp&optimize=high&width=850",
    rating: 8,
  },
  {
    title: "The Conjuring",
    description:
      "In THE CONJURING, in the early 1970s, the Perron family -- Roger (Ron Livingston), Carolyn (Lili Taylor).",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BZjU5OWVlN2EtODNlYy00MjhhLWI0MDUtMTA3MmQ5MGMwYTZmXkEyXkFqcGdeQXVyNjE5MTM4MzY@._V1_FMjpg_UX1000_.jpg",
    rating: 8.5,
  },
  {
    title: "Beauty and the Beast",
    description:
      "A French fairy tale about a beautiful and gentle young woman who is taken to live with a man-beast.",
    posterURL:
      "https://lumiere-a.akamaihd.net/v1/images/p_beautyandthebeast_19752_32e65c36.jpeg",
    rating: 9.6,
  },
];

const Home = () => {
  const [filteredMovies, setFilteredMoives] = useState(movies);

  const handleFilterMovies = (title, rating) => {
    setFilteredMoives(
      movies
        .filter((movie) =>
          movie.title.toLowerCase().includes(title.toLowerCase())
        )
        .filter((movie) => movie.rating >= rating)
    );
  };
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveModal = (movie) => {
    movies.push(movie);
    setShowModal(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Filters filterMovies={handleFilterMovies} />
      <Button
        style={{ width: "20%", marginTop: "1%" }}
        onClick={() => setShowModal(true)}
      >
        Add New Movie
      </Button>
      <MovieList movies={filteredMovies} />
      <NewMovie
        showModal={showModal}
        handleClose={handleCloseModal}
        handleSave={handleSaveModal}
      />
    </div>
  );
};

export default Home;
