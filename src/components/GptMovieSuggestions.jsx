import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const aiMovies = useSelector(store => store.geminiMovies);
  const { movieNames, movieResults } = aiMovies;

  if (!movieNames) return null;

  return (
    <div className='pt-20 pb-32'>
      <h1 className='text-center text-4xl font-bold pt-10 pb-10'>Movies Recommended by <span className='text-purple-600 text-shadow-md text-shadow-fuchsia-600'>BotFlix-AI</span></h1>
      <div className=''>
        {
          movieNames.map((movie, index) => <MovieList key={index} title={movie} movies={movieResults[index]} />)
        }
      </div>
    </div>
  )
}

export default GptMovieSuggestions