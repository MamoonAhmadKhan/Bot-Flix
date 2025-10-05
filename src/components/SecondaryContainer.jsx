import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;

  return (
    <div className="min-sm:relative -mt-52 max-xl:-mt-24 max-lg:-mt-16 max-sm:-mt-5 z-50">
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
      <MovieList title="Top Rated" movies={movies?.topRatedMovies} />
      <MovieList title="Trending" movies={movies?.trendingMovies} />
      <MovieList title="Upcoming Movies" movies={movies?.upcomingMovies} />
      <MovieList title="Horror" movies={movies?.nowPlayingMovies} />
      <MovieList title="Comedy" movies={movies?.nowPlayingMovies} />
      <MovieList title="Official Series" movies={movies?.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
