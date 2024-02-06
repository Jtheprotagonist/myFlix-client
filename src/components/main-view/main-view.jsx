import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import MovieView from "../movie-view/movie-view";

const MainView = () => {
  const [movies, setMovies] = useState([]); // State variable to store movies
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch('https://movie-murmer-2015-5d256703e312.herokuapp.com/')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
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

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onCardClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default MainView;
