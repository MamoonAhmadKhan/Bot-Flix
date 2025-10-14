import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TRENDING_MOVIES_API } from "../utils/constants";
import { addTrendingMovies } from "../toolkit/moviesSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trendingMoviesData = useSelector(store => store.movies.trendingMovies);

  const fetchMovies = async () => {
    const res = await fetch(TRENDING_MOVIES_API, API_OPTIONS);
    const data = await res.json();
    dispatch(addTrendingMovies(data.results));
  }

  useEffect(() => {
    if (!trendingMoviesData) fetchMovies();
  }, []);
}

export default useTrendingMovies;