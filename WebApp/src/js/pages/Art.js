require("../../stylesheets/_all.scss");
import React, { useState } from "react";
import {Container, Button, Image} from "react-bootstrap";
import ParallaxComponent from "../components/Parallax/ParallaxComponent";
import StyleImagesModal from "../components/Art/StyleImagesModal";
import FileBase64 from "../utils/react-file-base64" // Dependency als Util da ich diese von Hand bearbeiten musste für meinen Fall, dient dazu um Files in meinem Fall Bilder als Base64 string dazustellen, also zu encoden.

// Store einbinden
import mobxInteractionStore from "../stores/mobxInteractionStore"

function Art() {

  const [uploadedFile, setUploadedFile] = useState({files: []});

  const [modalShow, setModalShow] = useState(false);

  const [stylePicture, setStylePicture] = useState("") // Pfad zur Bilddatei die als Style ausgewählt wurde.

  // Callback für Base64 Upload für Image
  function getFiles(files) {
    setUploadedFile({ files: files })
    console.log(files);
  }

  const body = {
    background: '#0a2a43',
    minHeight: '1500px'
  };

  return (
    <div style={body}>
      <ParallaxComponent/>

      <Container>

        <Button variant="warning">
          Wähle ein Bild welches kombiniert wird<br/>
          <FileBase64
            multiple={true}
            onDone={getFiles.bind(this)}
          />
        </Button>

        <div className="text-center">
          { uploadedFile.files.map((file, index) => {
            return <Image src={file.base64} width="300" key={index} rounded />
          }) }
        </div>

        <Button variant="primary" onClick={() => setModalShow(true)}>
        Wähle einen Style für die Kombination aus
        </Button>

        <StyleImagesModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          setstylepicture={setStylePicture}
        />

        <div className="text-center">
          <Image src={stylePicture} width="300" rounded />
        </div>
      </Container>

    </div>
  );
}

export default (Art);