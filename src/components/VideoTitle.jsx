import {
  faArrowLeft,
  faCircleInfo,
  faPlay,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleGptSearch } from "../toolkit/geminiSlice";

const VideoTitle = (props) => {
  const { title, overview } = props;
  const gptSearch = useSelector(store => store.geminiMovies.gptSearch);
  const dispatch = useDispatch();

  return (
    <div className="w-screen aspect-video max-xl:pt-56 max-lg:px-12 max-lg:pt-32 pt-72 px-16 max-sm:relative max-sm:pt-0 max-sm:px-8 absolute bg-gradient-to-r from-black">
      <h1 className="text-4xl max-xl:text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-lg font-bold text-white">
        {title}
      </h1>
      <p className="py-4 max-xl:py-3 max-lg:py-2 max-md:text-xs max-lg:w-[60%] max-sm:w-full w-[40%]">
        {overview}
      </p>
      <div className="flex items-center mb-5 space-x-3 max-sm:mt-3 max-[450px]:flex-col max-[450px]:items-start">
        <div className="flex items-center space-x-3 max-sm:mt-3">
          <button className="bg-white text-black max-md:px-4 max-md:py-1 px-7 py-1.5 rounded-sm cursor-pointer hover:bg-white/80">
            <FontAwesomeIcon icon={faPlay} /> Play
          </button>
          <button className="bg-neutral-700 px-7 py-1.5 max-md:px-4 max-md:py-1 rounded-sm cursor-pointer hover:bg-neutral-900">
            <FontAwesomeIcon icon={faCircleInfo} size="lg" /> More Info
          </button>
        </div>
        <Link to={!gptSearch ? "/browse/gpt-search" : "/browse"}>
          <button onClick={() => dispatch(toggleGptSearch())} className="min-sm:hidden px-3 py-1 mt-3 max-[450px]:w-full rounded-sm bg-purple-800 cursor-pointer hover:bg-purple-800/70">
            {!gptSearch ? (
              <FontAwesomeIcon className="pr-3" icon={faRobot} bounce />
            ) : (
              <FontAwesomeIcon className="pr-3" icon={faArrowLeft} beat />
            )}

            {gptSearch ? "Go-Back" : "AI Search"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;
