import { useDispatch } from "react-redux";
import { API_OPTIONS, TRENDING_MOVIES_API } from "../utils/constants";
import { addTrendingMovies } from "../toolkit/moviesSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const res = await fetch(TRENDING_MOVIES_API, API_OPTIONS);
    const data = await res.json();
    console.log(data?.results);
    dispatch(addTrendingMovies(data.results));
  }

  useEffect(() => {
    fetchMovies();
  }, []);
}

export default useTrendingMovies;