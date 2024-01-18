import React, { useState, useEffect } from "react";
import { BookCard } from "../book-card/book-card";
import { BookView } from "../book-view/book-view";
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
      <BookView book={localSelectedBook} onBackClick={() => setLocalSelectedBook(null)} />
    );
  }

  if (books.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <BookCard
          key={movie.id}
          book={movie}
          onBookClick={(newSelectedBook) => {
            setLocalSelectedBook(newSelectedBook);
          }}
        />
      ))}
    </div>
  );
};

MainView.propTypes = {
  books: PropTypes.array.isRequired,
};

export default MainView;
