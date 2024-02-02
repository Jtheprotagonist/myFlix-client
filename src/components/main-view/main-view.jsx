import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import MovieView from "../movie-view/movie-view";
import PropTypes from "prop-types";

const MainView = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch('/movies')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleCardClick = (clickedMovie) => {
    setSelectedMovie(clickedMovie);
  };

  if (selectedMovie) {
    // Render MovieView with selected movie data
    return <MovieView onBackClick={() => setSelectedMovie(null)} movie={selectedMovie} />;
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  if (!selectedMovie) {
    return (
      <div>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onCardClick={handleCardClick}
          />
        ))}
      </div>
    );
  }
};

// PropTypes validation for MainView
MainView.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      // Add other movie properties as needed
    })
  ).isRequired,
};

export default MainView;
