import React from "react";
import "./App.css";
import XIMEPhoto from "./components/XIMEPhoto";
import XIMETitle from "./components/XIMETitle";

function App() {
  return (
    <div className="bg_image">
      <XIMETitle />
      <XIMEPhoto />
    </div>
  );
}

export default App;
