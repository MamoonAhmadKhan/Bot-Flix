import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIES_API } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../toolkit/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMoviesData = useSelector(store => store.movies.topRatedMovies);

  const fetchMovies = async () => {
    const res = await fetch(TOP_RATED_MOVIES_API, API_OPTIONS);
    const data = await res.json();
    dispatch(addTopRatedMovies(data.results));
  }

  useEffect(() => {
    if (!topRatedMoviesData) fetchMovies();
  }, []);
}

export default useTopRatedMovies;