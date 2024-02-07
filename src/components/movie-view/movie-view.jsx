import React from "react";
import PropTypes from "prop-types";

const MovieView = ({ movie }) => {
  console.log("movie.genre:", movie.genre); // Debugging statement

  // Determine how to display the genre based on its type
  let genreName = "";
  if (typeof movie.genre === "string") {
    genreName = movie.genre;
  } else if (typeof movie.genre === "object" && movie.genre.name) {
    genreName = movie.genre.name;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Genre: {genreName}</p>
      {/* Render other movie details */}
    </div>
  );
};

// PropTypes validation for MovieView
MovieView.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string // Optional description property
      })
    ]).isRequired,
    // Add other movie properties as needed
  }).isRequired
};

export default MovieView;
