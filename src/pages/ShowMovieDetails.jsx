import { Link, useParams } from "react-router-dom";
import { useMovieDetail } from "../hooks/useMovieDetail";
import { IMG_POSTER_CDN } from "../utils/constants";
import {
    faArrowLeft,
  faBookmark,
  faHeart,
  faListUl,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShowMovieDetails = () => {
  const { id } = useParams();
  const movie = useMovieDetail(id);

  if (!movie) return null;

  const {
    poster_path,
    original_title,
    release_date,
    origin_country,
    genres,
    runtime,
    tagline,
    overview,
  } = movie;
  const year = new Date(release_date).getFullYear();
  const day = new Date(release_date).getDate();
  const month = new Date(release_date).getMonth() + 1;
  const durationHr = Math.floor(runtime / 60);
  const durationMin = runtime - durationHr * 60;
  const genre = genres.map((g) => g.name).join(", ");

  return (
    <div className="py-22 max-md:py-16">
      <div className="relative flex max-md:flex-col space-x-10 px-16 py-8 max-sm:py-2 max-md:px-8 max-sm:px-4 cursor-pointer rounded-xl">
        <img
          className="absolute max-[400px]:hidden inset-0 w-full h-full object-cover opacity-25 -z-10"
          src={IMG_POSTER_CDN + poster_path}
          alt="background"
        />
        <div className="w-[80%] h-full flex flex-col min-md:space-y-2">
          <Link to={"/browse"}>
            <button className="font-medium font-mono text-lg max-lg:text-sm max-lg:font-normal px-4 max-md:px-3 min-md:py-1 rounded-md bg-red-600 cursor-pointer hover:bg-red-700">
              <FontAwesomeIcon className="pr-3" icon={faArrowLeft} />
              <span className="max-[500px]:hidden">Go-Back</span>
            </button>
          </Link>
          {poster_path ? (
            <img
              className="w-[350px] h-[500px] rounded-lg  max-md:hidden"
              src={IMG_POSTER_CDN + poster_path}
              alt="img_poster"
            />
          ) : (
            <div className="w-[300px] rounded-lg  max-md:hidden">
              <h3 className="p-2 text-lg font-medium">Poster not availabe</h3>
            </div>
          )}
        </div>
        <div className="py-16 max-md:py-10 max-sm:py-4 flex flex-col space-y-2">
          <h1 className="text-3xl font-bold max-[500px]:text-2xl max-[350px]:text-xl hover:text-neutral-400">
            {original_title}{" "}
            <span className="font-normal text-neutral-400">({year})</span>
          </h1>
          <p>
            {day}/{month}/{year} ({origin_country}) . {genre} . {durationHr}h{" "}
            {durationMin}m
          </p>
          <div className="flex items-center max-[400px]:justify-around min-[400px]:space-x-5 py-5">
            <div className="bg-black p-3 rounded-full">
              <FontAwesomeIcon icon={faListUl} size="lg" />
            </div>
            <div className="bg-black p-3 rounded-full">
              <FontAwesomeIcon icon={faHeart} size="lg" />
            </div>
            <div className="bg-black p-3 rounded-full">
              <FontAwesomeIcon icon={faBookmark} size="lg" />
            </div>
            <div className="py-3 flex space-x-2 hover:text-neutral-400 rounded-full">
              <FontAwesomeIcon icon={faPlay} size="lg" />
              <span className="font-semibold max-[400px]:hidden">Play Trailer</span>
            </div>
          </div>
          <p className="text-neutral-300">{tagline}</p>
          <div>
            <h2 className="text-2xl max-[500px]:text-xl max-[350px]:text-lg font-semibold">Overview</h2>
            <p>{overview}</p>
          </div>
          <div className="grid grid-cols-3 gap-10 py-5">
            <div>
              <h4 className="font-semibold hover:text-neutral-400">
                Simon Stone
              </h4>
              <p>Director, Screenplay</p>
            </div>
            <div>
              <h4 className="font-semibold hover:text-neutral-400">
                Farhan Rana Rajpoot
              </h4>
              <p>Director</p>
            </div>
            <div>
              <h4 className="font-semibold hover:text-neutral-400">
                Ruth Ware
              </h4>
              <p>Novel</p>
            </div>
            <div>
              <h4 className="font-semibold hover:text-neutral-400">
                Joe Shrapnel
              </h4>
              <p>Screenplay</p>
            </div>
            <div>
              <h4 className="font-semibold hover:text-neutral-400">
                Anna Waterhouse
              </h4>
              <p>Screenplay</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMovieDetails;
