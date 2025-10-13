import React from "react";
import GptSearchBar from "../components/GptSearchBar";
import GptMovieSuggestions from "../components/GptMovieSuggestions";
import { useSelector } from "react-redux";

const GPTSearch = () => {
  const dataForShimmer = useSelector((store) => store.geminiMovies);

  return (
    <div>
      {dataForShimmer ? <GptMovieSuggestions /> : null}
      <GptSearchBar />
    </div>
  );
};

export default GPTSearch;
