import React from "react";
import PropTypes from "prop-types";

const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        cursor: "pointer",
      }}
      onClick={() => onMovieClick(movie)}
    >
      <img
        src={movie.image}
        alt={movie.title}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <h3>{movie.title}</h3>
    </div>
  );
};

// PropTypes validation
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    // Add other movie properties as needed
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieCard;