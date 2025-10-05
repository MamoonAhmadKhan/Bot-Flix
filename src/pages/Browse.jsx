import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  useTrendingMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="max-sm:flex max-sm:flex-col max-sm:space-y-0">
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse