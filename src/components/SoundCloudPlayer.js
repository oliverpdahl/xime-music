import React from "react";
import ReactPlayer from "react-player";

function SoundCloudPlayer() {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: "3",
        bottom: "1%",
        left: "2%",
        width: "100%",
      }}
    >
      <iframe
        width="96%"
        height="20"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/497604249&color=%2300968e&inverse=true&auto_play=false&show_user=true"
      ></iframe>
    </div>
  );
}

export default SoundCloudPlayer;
