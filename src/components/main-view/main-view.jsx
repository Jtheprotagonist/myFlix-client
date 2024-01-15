import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
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

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
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
          onBookClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};