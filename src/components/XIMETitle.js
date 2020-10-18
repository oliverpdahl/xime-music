import React from "react";
import XIMETitleImage from "../graphics/XIMETypography.png";

function XIMETitle() {
  return (
    <div
      style={{
        position: "absolute",
        left: "0px",
        top: "0px",
        zIndex: "1",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${XIMETitleImage})`,
          backgroundRepeat: "no-repeat",
          maxWidth: "700px",
          minHeight: "40vh",
          margin: "auto",
          color: "#f5f5f5",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      ></div>
    </div>
  );
}

export default XIMETitle;
