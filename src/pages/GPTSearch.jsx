import React from "react";
import GptSearchBar from "../components/GptSearchBar";
import GptMovieSuggestions from "../components/GptMovieSuggestions";
import { useSelector } from "react-redux";
import GPTShimmer from "../components/GPTShimmer";

const GPTSearch = () => {
  const dataForShimmer = useSelector((store) => store.geminiMovies.movieResults);

  return (
    <div>
      {dataForShimmer ? <GptMovieSuggestions /> : <GPTShimmer />}
      <GptSearchBar />
    </div>
  );
};

export default GPTSearch;
