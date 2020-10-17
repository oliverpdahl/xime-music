import React from "react";
import XIMEPhotoImage from "../graphics/XIME-Photo.png";

function XIMEPhoto() {
  return (
    <div style={{ width: "100%" }}>
      <img
        style={{
          height: "100vh",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        src={XIMEPhotoImage}
      />
    </div>
  );
}

export default XIMEPhoto;
