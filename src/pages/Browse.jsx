import useTrendingMovies from "../hooks/useTrendingMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { Outlet } from "react-router-dom";

const Browse = () => {
  useNowPlayingMovies();
  useTrendingMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <Outlet />
  )
}

export default Browse