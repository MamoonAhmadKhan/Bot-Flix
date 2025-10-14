import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_MOVIES_API } from "../utils/constants";
import { addNowPlayingMovies } from "../toolkit/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const moviesData = useSelector(store => store.movies.nowPlayingMovies);

  const fetchMovies = async () => {
    const res = await fetch(NOW_PLAYING_MOVIES_API, API_OPTIONS);
    const data = await res.json();
    dispatch(addNowPlayingMovies(data.results));
  }

  useEffect(() => {
    if (!moviesData) fetchMovies();
  }, []);
}

export default useNowPlayingMovies;