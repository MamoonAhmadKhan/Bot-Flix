import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  return (
    <div>
      <MovieList title="Now Playing" movies={movies} />
      <MovieList title="Trending" movies={movies} />
      <MovieList title="Popular" movies={movies} />
      <MovieList title="Upcoming Movies" movies={movies} />
      <MovieList title="Horror" movies={movies} />
      <MovieList title="Comedy" movies={movies} />
      <MovieList title="Official Series" movies={movies} />
    </div>
  );
};

export default SecondaryContainer;
