import React from "react";

export const MovieCard = (props) => {
  const { movie, onCardClick } = props;
  return <div onClick={() => onCardClick(movie)}>{movie.title}</div>;
};
