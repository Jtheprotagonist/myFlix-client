import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import MovieView from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch('/movies')
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data);
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
