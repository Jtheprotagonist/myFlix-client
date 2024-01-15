import React from "react";
import PropTypes from "prop-types";

const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <button onClick={onBackClick}>Back to Movies</button>
      <div>
        <h1>{movie.title}</h1>
        <img
          src={movie.image}
          alt={movie.title}
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <p><strong>Description:</strong> {movie.description}</p>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Director:</strong> {movie.director}</p>
        {/* Add more movie details as needed */}
      </div>
    </div>
  );
};

// PropTypes validation
MovieView.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    // Add other movie properties as needed
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};

export default MovieView;
