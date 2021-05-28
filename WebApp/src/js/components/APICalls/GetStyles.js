import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../config/apiConstants';
import {Row, Col, Image} from "react-bootstrap";
import axios from 'axios'
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

// Store einbinden
import mobxInteractionStore from "../../stores/mobxInteractionStore"


function GetStyles() {

  const [isBusy, setBusy] = useState(true) // Busy initialisiert mit anfangs true!

    if (mobxInteractionStore.stylesArray == null) { // Macht API-Call nur wenn Styles-Array noch nicht befüllt wurde

      axios.get(API_BASE_URL+'/styles', { headers: { 'x-api-key': 'PxL2SR0qCF79udOZ9b23Q2EGu83E3esB2jsCp6SL' }})
      .then(function (response) {
          if(response.status == 200){

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
        <Image style={{ width: 350, height: 300 }} src={image.url} key={index} />
        );
    });
    
}

export default GetStyles;