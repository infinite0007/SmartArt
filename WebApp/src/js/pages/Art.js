require("../../stylesheets/_all.scss");
import React, { useState } from "react";
import {Container, Button} from "react-bootstrap";
import ParallaxComponent from "../components/Parallax/ParallaxComponent";
import GetStyles from "../components/APICalls/GetStyles";
import StyleImagesModal from "../components/Art/StyleImagesModal";

// Store einbinden
import mobxInteractionStore from "../stores/mobxInteractionStore"

function Art() {
  // GetStyles(); // Hole Styles durch API-GET-Call und speichere sie in Mobx-Styles-Array

  const [modalShow, setModalShow] = React.useState(false);

  const body = {
    background: '#0a2a43',
    minHeight: '1500px'
  };

  return (
    <div style={body}>
      <ParallaxComponent/>

      <Container className="image-list" >

        <Button variant="primary" onClick={() => setModalShow(true)}>
        Wähle einen Style für die Kombination
        </Button>

        <StyleImagesModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          getstyles={GetStyles()}
        />
      </Container>

    </div>
  );
}

export default (Art);