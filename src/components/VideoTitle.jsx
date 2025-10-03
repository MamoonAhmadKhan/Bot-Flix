import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;

  return (
    <div className="w-screen aspect-video pt-80 px-14 absolute bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="py-4 w-[40%]">{overview}</p>
      <div className="flex items-center space-x-3">
        <button className="bg-white text-black px-7 py-1.5 rounded-sm cursor-pointer hover:bg-white/80"><FontAwesomeIcon icon={faPlay} /> Play</button>
        <button className="bg-black/30 px-7 py-1.5 rounded-sm cursor-pointer"><FontAwesomeIcon icon={faCircleInfo} size="lg" /> More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
