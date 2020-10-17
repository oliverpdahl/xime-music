import React from "react";
import sizeMe from "react-sizeme";
import XIMEPhotoImage from "../graphics/XIME-Photo.png";

function XIMEPhoto(props) {
  const { width } = props.size;

  const consistentStyle = {
    backgroundImage: `url(${XIMEPhotoImage})`,
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
    color: "#f5f5f5",
    backgroundPosition: "center",
  };

  const ToRender =
    width > 650 ? (
      <div style={{ ...consistentStyle, backgroundSize: "contain" }}></div>
    ) : (
      <div style={{ ...consistentStyle, backgroundSize: "cover" }}></div>
    );

  return <div>{ToRender}</div>;
}

export default sizeMe({ monitorHeight: true })(XIMEPhoto);
