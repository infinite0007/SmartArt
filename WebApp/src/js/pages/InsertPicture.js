require("../../stylesheets/_all.scss");
import {Container, Row, Col, Button, Image} from "react-bootstrap";
import React, { useState } from "react";
import axios from 'axios';

function InsertPicture() {

  const [picturePath , setPicturePath] = useState("") // Pfad zum Bild welches dann immer angezeigt wird. Am Anfang leer da kein Bild angezeigt werden soll, bevor etwas hochgeladen wurde.

  const [state , setState] = useState({selectedFile: null}) // Filestate

  const onChangeHandler = (e) => {
    console.log(e.target.files[0]) // Nur zum prüfen welche File für Entwicklung / an Stelle 0 ist das aktuelle File und die Details

    setState({
      selectedFile: e.target.files[0], // File in state laden
      loaded: 0,
    })
  }

  const onClickHandler = () => { // Wenn der Button gedrückt wird zum hochladen
    const data = new FormData() 
    data.append('file', state.selectedFile)
    axios.post("http://" + location.hostname + ":8000/upload", data, { // location.hostname gibt den aktuellen Host wieder, von dem die Seite aufgerufen wird. Somit funktioniert der API-Call auch wenn die WebApp auf einer anderen Maschine im Netz läuft und nicht nur local.
      // receive two    parameter endpoint url ,form data
    })
    .then(res => { // then print response status
        console.log(res.statusText)
        var newPicturePath = res.data.replace("public", ""); // Ändere das Bild zum Pfad des gerade hochgeladenen -> Das /public vorne muss noch weggecutted werden da wir schon von /public ausgehen und dies dann nicht mehr brauchen, ansonsten wird das Bild nicht gefunden da falscher Ordner
        setPicturePath(newPicturePath);
    })
    }

  return (
    <div  className="aboutapp">
      <Container>
        <h1 className="smallHeader">Lassen Sie ein Bild direkt auf Ihrer Matrix anzeigen!</h1>
        <Row>
          <Col xs={6} md={{ span: 4, offset: 2 }}>
            <input type="file" name="file" onChange={onChangeHandler} accept="image/png, image/jpeg"/>
            <Button variant="success" onClick={onClickHandler}>Hochladen</Button>
          </Col>
          <Col xs={6} md={4}>
          <Image src={picturePath} width="500" rounded />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default (InsertPicture);