import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import MovieView from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); // Move this outside of useEffect

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
  }, []);

  if (selectedMovie) {
    return <MovieView onBackClick={ ()=> selectedMovie(null)} movie={selectedMovie} />;
  }  

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  if (!selectedMovie) {
    return (
      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} selectedMovie={selectedMovie} />
        ))}
      </div>
    );
  }

};

export default MainView;
