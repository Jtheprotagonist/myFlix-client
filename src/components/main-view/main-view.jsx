import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const MainView = ({ books }) => {
  const [movies, setMovies] = useState([]);
  const [localSelectedBook, setLocalSelectedBook] = useState(null);

  useEffect(() => {
    setMovies([
      {
        id: 1,
        title: "Inception",
        image: "https://example.com/inception.jpg",
        director: "Christopher Nolan",
      },
      {
        id: 2,
        title: "The Dark Knight",
        image: "https://example.com/darkknight.jpg",
        director: "Frank Darabont",
      },
      {
        id: 3,
        title: "Jurassic Park",
        image: "https://example.com/jurassicpark.jpg",
        director: "Steven Spielberg",
      },
    ]);

    return () => {
      // Clean-up function
    };
  }, []);

  if (localSelectedBook) {
    return (
      <div>
        {/* Render content related to BookView */}
        <p>{localSelectedBook.title}</p>
        <button onClick={() => setLocalSelectedBook(null)}>Back</button>
      </div>
    );
  }

  if (books.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          {/* Render content related to BookCard */}
          <p>{movie.title}</p>
          <button
            onClick={() => {
              setLocalSelectedBook(movie);
            }}
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

MainView.propTypes = {
  books: PropTypes.array.isRequired,
};

export default MainView;
