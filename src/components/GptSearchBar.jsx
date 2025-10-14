import { faArrowLeft, faMagnifyingGlass, faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import model from "../utils/geminiAI";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRecommendedMovies, toggleGptSearch, toggleGptSubmit } from "../toolkit/geminiSlice";
import { Link } from "react-router-dom";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const gptSearch = useSelector(store => store.geminiMovies.gptSearch);

  const searchMovieInTMDB = async (movieName) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
    const res = await data.json();
    return res.results;
  }

  const geminiAISearch = async () => {
    dispatch(toggleGptSubmit());

    // Provide a prompt that contains text
    const prompt = `Act as a Movie recommendation system and suggest 5 movies names (comma seperated) for the query : ${searchText.current.value}. Example results:- Gadar, Sholay, Superman, Golmaal, Shinchan`;

    // To generate text output, call generateContent with the text input
    const result = await model.generateContent(prompt);

    const response = result.response;
    const text = response.text();

    const suggestedMovies = text.split(",");

    const data = suggestedMovies.map(i => searchMovieInTMDB(i));
    const resolvedData = await Promise.all(data);
    dispatch(addRecommendedMovies({movieNames: suggestedMovies, movieResults: resolvedData}));
  }

  return (
    <div className={`fixed bottom-0 w-full pb-8`}>
      <Link to={!gptSearch ? "/browse/gpt-search" : "/browse"}>
            <button
              onClick={() => dispatch(toggleGptSearch())}
              className="font-medium mx-5 w-lg max-[550px]:w-md max-[499px]:w-sm max-[424px]:w-xs max-[340px]:w-2xs max-[300px]:w-3xs my-5 font-mono text-lg max-lg:text-sm max-lg:font-normal px-4 max-md:px-3 py-1 min-sm:hidden rounded-md bg-purple-800 cursor-pointer hover:bg-purple-800/70"
            >
              {!gptSearch ? (
                <FontAwesomeIcon className="pr-3" icon={faRobot} bounce />
              ) : (
                <FontAwesomeIcon className="pr-3" icon={faArrowLeft} beat />
              )}
              {gptSearch ? 'Go-Back' : 'AI Search'}
            </button>
          </Link>
      <div className="flex items-center justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black pl-4 rounded-full shadow-md drop-shadow-[0_10px_20px_#59168b] font-semibold font-mono px-2 py-4 w-1/2 max-md:w-10/12 grid grid-cols-12"
        >
          <input
            ref={searchText}
            className="outline-none col-span-11"
            type="text"
            placeholder="What would you like to watch Today ?"
          />
          <button
            onClick={geminiAISearch}
            className="col-span-1 cursor-pointer"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" fade />
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
