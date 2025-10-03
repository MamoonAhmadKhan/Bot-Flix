import { useMovieTrailer } from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useMovieTrailer(movieId);  

  return (
    <div className="w-screen">
      <iframe 
      className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${trailer?.key}`}
        title="YouTube video player"
        allow="autoplay; fullscreen; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
