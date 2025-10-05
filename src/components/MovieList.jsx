import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { title, movies } = props;

  return (
    <div className="p-4 mx-4">
        <h1 className="my-2 text-2xl font-semibold max-sm:text-xl">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory">
        <div className="flex space-x-6">
          {movies?.map((movie) => {
            return <div key={movie?.id} className="w-48 h-full rounded-lg transition-transform duration-300 hover:scale-110 snap-start">
            <MovieCard posterPath={movie?.poster_path} />
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
