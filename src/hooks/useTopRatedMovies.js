import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIES_API } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../toolkit/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const res = await fetch(TOP_RATED_MOVIES_API, API_OPTIONS);
    const data = await res.json();
    console.log(data?.results);
    dispatch(addTopRatedMovies(data.results));
  }

  useEffect(() => {
    fetchMovies();
  }, []);
}

export default useTopRatedMovies;