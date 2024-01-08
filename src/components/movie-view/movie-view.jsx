import React from "react";

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

export default MovieView;
