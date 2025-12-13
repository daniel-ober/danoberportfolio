// client/src/components/BackgroundVideo.jsx
import React from "react";
import "./BackgroundVideo.css";

const BackgroundVideo = () => {
  return (
    <div className="bg-video-wrapper">
      <video
        className="bg-video"
        src="/media/app-bg-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Optional subtle dark overlay */}
      <div className="bg-video-overlay" />
    </div>
  );
};

export default BackgroundVideo;