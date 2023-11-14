import React from "react";
import video from "../data/video.js";



const VideoPlayer = () => {
    return (
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      
      />

    );
};

export default VideoPlayer;
