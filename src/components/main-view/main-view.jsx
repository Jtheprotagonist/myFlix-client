import React, { useState, useEffect } from "react";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

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

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          {/* Render content related to MovieCard */}
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
};

export default MainView;
