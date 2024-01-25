import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import MovieView from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    setMovies([
      {
        id: 1,
        title: "Inception",
        image: "https://image.tmdb.org/t/p/original/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
        director: "Christopher Nolan",
        description: "A mind-bending science fiction thriller about dreams within dreams.",
      },
      {
        id: 2,
        title: "The Dark Knight",
        image: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        director: "Frank Darabont",
        description: "The caped crusader faces the Joker in this dark and intense superhero film.",
      },
      {
        id: 3,
        title: "Jurassic Park",
        image: "https://image.tmdb.org/t/p/original/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg",
        director: "Steven Spielberg",
        description: "Dinosaurs come to life in this classic adventure film set on a remote island.",
      },
    ]);
  }, []);

  const handleCardClick = (clickedMovie) => {
    setSelectedMovie(clickedMovie);
  };

  if (selectedMovie) {
    return <MovieView onBackClick={() => setSelectedMovie(null)} movie={selectedMovie} />;
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  if (!selectedMovie) {
    return (
      <div>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onCardClick={handleCardClick} // Pass the function to handle card click
          />
        ))}
      </div>
    );
  }
};

export default MainView;
