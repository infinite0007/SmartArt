require("../../stylesheets/_all.scss");
import React, { useState } from "react";
import {Container, Button, Image} from "react-bootstrap";
import ParallaxComponent from "../components/Parallax/ParallaxComponent";
import StyleImagesModal from "../components/Art/StyleImagesModal";
import FileBase64 from "../utils/react-file-base64" // Dependency als Util da ich diese von Hand bearbeiten musste für meinen Fall, dient dazu um Files in meinem Fall Bilder als Base64 string dazustellen, also zu encoden.
import PostCombinePictures from "../components/APICalls/PostCombinePictures";

// Store einbinden
import mobxInteractionStore from "../stores/mobxInteractionStore"

function Art() {

  const [uploadedFile, setUploadedFile] = useState({files: []}); // Speicherung des Arrays an Fileinformationen die Base64 alles mitgiebt, für die Ausgabe des Bildes
  const [base64String, setBase64String] = useState(""); // Speicherung des schon gecutteten Base64-String der nun an die API übergeben werden kann

  const [modalShow, setModalShow] = useState(false);

  const [stylePicture, setStylePicture] = useState("") // Pfad zur Bilddatei die als Style ausgewählt wurde.

  // Callback für Base64 Upload für Image
  function getFiles(files) {
    setUploadedFile({ files: files }) // Setzen der Files in state: uploadedFile
    CutBase64String(files[0].base64, setBase64String);
    // console.log(files[0].base64);
  }

  const body = {
    background: '#0a2a43',
    minHeight: '1500px'
  };

  let handleSubmitClick = (e) => {
    e.preventDefault();
    var payload={
      "styleId":mobxInteractionStore.choosedStyle[0],
      "imageBase64Encoded":base64String
    }
  
    // Hole Submission id, durch Kombination (Submission id ist für den letzten Schritt, mit dieser kann man dann an das Kombinierte, durch AI erstelltes Bild)
    let submissionId = "";
    PostCombinePictures(payload).then((response) => {
      // MOBX-Action wird getriggert.
      // mobxInteractionStore.setUserPlanArray(response);
      submissionId = response;
    })
  }

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

        <Button variant="success" onClick={handleSubmitClick}>
        Kombiniere
        </Button>
      </Container>
    </div>
  );
}

function CutBase64String(base64String, setBase64String) { // Beim zurückgelieferten Base64 String ist Anfangs ein Parameter Bsp: data:image/jpeg;base64, dieser muss weg, ansonsten gibt es Fehler da der String dann ungültig wird. String wird dann in state: uploadedFile richtig gespeichert
  var cuttedBase64 = base64String.split(",")[1]; // Teilt den String dort wo ein Komma war [also den Character den man gewählt hat, bei mir Komma]. Teils also was links und rechts davon Bsp: str = "name: description" --> str = str.split(":")[0] --> ["name", " description"] also [0] = links davon // [1] rechts davon
  // console.log(str);
  setBase64String(cuttedBase64);
}

export default (Art);