import React from "react";

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

<<<<<<< Updated upstream
export default MovieCard;
=======
export default MovieCard;
>>>>>>> Stashed changes
