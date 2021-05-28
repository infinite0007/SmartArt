require("../../stylesheets/_all.scss");
import React from "react";
import ParallaxComponent from "../components/Parallax/ParallaxComponent";
import GetStyles from "../components/APICalls/GetStyles";
// Store einbinden
import mobxInteractionStore from "../stores/mobxInteractionStore"

function Art() {
  // GetStyles(); // Hole Styles durch API-GET-Call und speichere sie in Mobx-Styles-Array

  const body = {
    background: '#0a2a43',
    minHeight: '1500px'
  };

  return (
    <div style={body}>
      <ParallaxComponent/>
      <div className="image-list" >

        <GetStyles/>
      </div>
      
    </div>
  );
}

export default (Art);