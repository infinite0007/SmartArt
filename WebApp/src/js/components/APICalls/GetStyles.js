require("../../../stylesheets/_all.scss");
import { ACCESS_KEY, API_BASE_URL } from '../../config/apiConstants';
import React, { useState } from "react";
import {Col, Card} from "react-bootstrap";
import axios from 'axios'

// Store einbinden
import mobxInteractionStore from "../../stores/mobxInteractionStore"

//  Hole Styles durch API-GET-Call und speichere sie in Mobx-Styles-Array
function GetStyles(props) {

  const [isBusy, setBusy] = useState(true) // Busy initialisiert mit anfangs true!

  if (mobxInteractionStore.stylesArray == null) { // Macht API-Call nur wenn Styles-Array noch nicht befüllt wurde

    axios.get(API_BASE_URL+'/styles', { headers: { 'x-api-key': ACCESS_KEY }})
    .then(function (response) {
        if(response.status == 200){

          console.log("Styles erfolgreich geladen");
          // MOBX-Action wird getriggert.
          mobxInteractionStore.setStylesArray(response.data.styles);
          // console.log(response.data.styles); // Nur zum testen, was in dem Array drin ist

          setBusy(false); // API-Call erfolgreich abgeschlossen nun nicht mehr busy es kann gerendert werden!
        }
        else{ // Response war nicht 200 also fehlerhaft
          return;
        }
    })
    .catch(function (error) {
      console.log(error);
      // redirectToLogin()
    });
  }
  else if (isBusy) { // Wenn stylesArray schon befüllt stelle Busy auf false somit werden Images gleich gerendert
    setBusy(false);
  }

  if (isBusy) { // Wenn noch beschäftigt mit API-Call dann return null
    return null;
  }

  // Anderenfalls return meine Bild-Komponenten gemappt -> Geht jedes Element im Array durch und führt das Return aus
  return mobxInteractionStore.stylesArray.map((image, index) => {
    // console.log(image)
    return (
      <Col key={index}>
        <div onClick={props.onHide}>
          <Card onClick={() => {CardClicked([image.id, image.url]); props.setstylepicture(image.url);}}>
            <Card.Img variant="top" src={image.url} />
            <Card.Body>
              <Card.Title>{image.title}</Card.Title>
              <Card.Text>{image.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>  
      </Col>
    );
  });
}

function CardClicked(choosedStyle) { // Speichere gewähltes Style in mobx
   // Schließt das Modal wieder nach Auswahl des Styles
  mobxInteractionStore.setChoosedStyle(choosedStyle);
  // console.log(choosedStyle[0], choosedStyle[1]) // Für Testzwecke, um zu sehen ob die Daten die man bekommt richtig sind: [0] ist die spezielle id, [1] ist die Url zur Bilddatei
}

export default GetStyles;