import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { API_OPTIONS, NOW_PLAYING_MOVIES_API } from '../utils/contants';

const Browse = () => {
  const [nowPlayingMoviesData, setNowPlayingMoviesData] = useState(null);

  const fetchNowPlayingMovies = async () => {
    const res = await fetch(NOW_PLAYING_MOVIES_API, API_OPTIONS);
    const data = await res.json();
    console.log(data?.results);
  }

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse