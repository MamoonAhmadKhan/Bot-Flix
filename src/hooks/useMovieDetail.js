import { API_OPTIONS, movieDetail } from "../utils/constants";
import { useEffect, useState } from "react";

export const useMovieDetail = (id) => {
    const [data, setData] = useState(null);

  const fetchMovieDetail = async () => {
    const res = await fetch(
      movieDetail+id,
      API_OPTIONS
    );
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  return data;
};
