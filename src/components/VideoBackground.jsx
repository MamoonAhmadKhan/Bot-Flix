import { useMovieTrailer } from "../hooks/useMovieTrailer";
import bg_trailer from "../assets/bg_trailer.mp4";

const VideoBackground = ({ movieId }) => {
  const trailer = useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <video
        className="w-screen aspect-video"
        src={bg_trailer}
        autoPlay
        muted
        loop
        controls={false} // same as controls=0
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
