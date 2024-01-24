import React from "react";

export const MovieCard = (props) => {
  const { movie, setselectedMovie } = props;
  return <div onClick={() => setselectedMovie(movie)}>{movie.title}</div>;
};