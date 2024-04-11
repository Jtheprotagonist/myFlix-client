import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import MovieView from "../movie-view/movie-view";
import { SignupView } from "../signup-view/signup-view";
import LoginView from "../login-view/login-view"; // Import LoginView component

const MainView = () => {
  const [movies, setMovies] = useState([]); // State variable to store movies
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null); // State variable to store user
  const [isLoading, setIsLoading] = useState(true); // State variable for loading state
  const [showSignup, setShowSignup] = useState(true); // State variable to control signup view visibility
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State variable to track authentication status

  useEffect(() => {
    fetch('https://movie-murmur-66745-98757f57b964.herokuapp.com/movies')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unauthorized');
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data);
        setIsLoading(false); // Set loading state to false after fetching movies
      })
      .catch((error) => {
        setIsLoading(false); // Set loading state to false if there's an error
        // Handle the error, e.g., display a message to the user
      });
  }, []);

  const handleLogout = () => {
    // Perform logout logic here
    // Example: Clear authentication token, reset user session, etc.
    setUser(null);
    setToken(null);
    localStorage.clear();
    setIsLoggedIn(false); // Update authentication status
  };

  const handleCardClick = (clickedMovie) => {
    setSelectedMovie(clickedMovie);
  };

  const handleBackButtonClick = () => {
    setSelectedMovie(null);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  if (!user) {
    return (
      <>
        <LoginView onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
        }} />
        or
        <SignupView />
      </>
    );
  }
  

  if (selectedMovie) {
    return <MovieView onBackButtonClick={handleBackButtonClick} movie={selectedMovie} />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (movies.length > 0 && isLoggedIn) {
    return (
      <div>
        <button onClick={handleLogout}>Logout</button>
  
        {movies.map((movie) => (
          <MovieCard
            key={movie._id}
            movie={{...movie, id: movie._id}}
            onCardClick={handleCardClick}
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      {showSignup ? (
        <SignupView onSignupSuccess={() => setShowSignup(false)} />
      ) : (
        <LoginView onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default MainView;