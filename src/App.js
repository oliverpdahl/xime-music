import React from "react";
import "./App.css";
import XIMEPhoto from "./components/XIMEPhoto";
import XIMETitle from "./components/XIMETitle";
import SoundCloudPlayer from "./components/SoundCloudPlayer";

function App() {
  return (
    <div className="bg_image">
      <SoundCloudPlayer />
      <XIMETitle />
      <XIMEPhoto />
    </div>
  );
}

export default App;
