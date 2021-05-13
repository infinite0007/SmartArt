require("../../stylesheets/_all.scss");
import React from "react";
import ParallaxComponent from "../components/Parallax/ParallaxComponent";

function Ranking() {

  const body = {
    background: '#0a2a43',
    minHeight: '1500px'
  };

  return (
    <div style={body}>
      <ParallaxComponent/>
    </div>
  );
}

export default (Ranking);