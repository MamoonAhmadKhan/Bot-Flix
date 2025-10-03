import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../toolkit/moviesSlice";
import { useEffect } from "react";

export const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailer);

  const fetchMovieTrailer = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
    const data = await res.json();

    const trailer = data?.results?.find((itr) => {
      return itr?.name === "Official Trailer" || itr?.type === "trailer";
    });

    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    fetchMovieTrailer();
  }, []);

  return trailerVideo;
};