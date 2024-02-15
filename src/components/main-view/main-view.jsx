import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import MovieView from "../movie-view/movie-view";

const MainView = () => {
  const [movies, setMovies] = useState([]); // State variable to store movies
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
  fetch('https://movie-murmer-2015-5d256703e312.herokuapp.com/movies')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Unauthorized');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Data received:', data);
      setMovies(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      // Handle the error, e.g., display a message to the user
    });
}, []);

  

  const handleCardClick = (clickedMovie) => {
    setSelectedMovie(clickedMovie);
  };

  const handleBackButtonClick = () => {
    setSelectedMovie(null);
  };

  if (selectedMovie) {
    return <MovieView onBackButtonClick={handleBackButtonClick} movie={selectedMovie} />;
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie._id} // Assuming the id property is named "_id", adjust if necessary
          movie={{...movie, id: movie._id}} // Ensure that the "id" property is included in the movie object
          onCardClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default MainView;
