import { useDispatch } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES_API } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../toolkit/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const res = await fetch(UPCOMING_MOVIES_API, API_OPTIONS);
    const data = await res.json();
    console.log(data?.results);
    dispatch(addUpcomingMovies(data.results));
  }

  useEffect(() => {
    fetchMovies();
  }, []);
}

export default useUpcomingMovies;