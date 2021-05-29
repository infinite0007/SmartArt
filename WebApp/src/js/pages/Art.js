require("../../stylesheets/_all.scss");
import React, { useState } from "react";
import {Container, Button, Image} from "react-bootstrap";
import ParallaxComponent from "../components/Parallax/ParallaxComponent";
import StyleImagesModal from "../components/Art/StyleImagesModal";

// Store einbinden
import mobxInteractionStore from "../stores/mobxInteractionStore"

function Art() {

  const [modalShow, setModalShow] = React.useState(false);

  const [stylePicture, setStylePicture] = useState("") // Pfad zur Bilddatei die als Style ausgewählt wurde.

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
          setstylepicture={setStylePicture}
        />

        <Image src={stylePicture} width="300" rounded />
      </Container>

    </div>
  );
}

export default (Art);