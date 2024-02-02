import React from "react";
import PropTypes from "prop-types";

export const MovieCard = ({ movie, onCardClick }) => {
  return <div onClick={() => onCardClick(movie)}>{movie.title}</div>;
};

// PropTypes validation for MovieCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    // Add other movie properties as needed
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
};
