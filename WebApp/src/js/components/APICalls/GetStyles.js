import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../config/apiConstants';
import {Row, Col, Image} from "react-bootstrap";
import axios from 'axios'
import React from "react";

// Store einbinden
import mobxInteractionStore from "../../stores/mobxInteractionStore"


function GetStyles() {

  const array = [{"id":"1001","author":"Danielle MacInnes","width":5616,"height":3744,"url":"https://unsplash.com/photos/1DkWWN1dr-s","download_url":"https://picsum.photos/id/1001/5616/3744"},{"id":"1002","author":"NASA","width":4312,"height":2868,"url":"https://unsplash.com/photos/6-jTZysYY_U","download_url":"https://picsum.photos/id/1002/4312/2868"},{"id":"1003","author":"E+N Photographies","width":1181,"height":1772,"url":"https://unsplash.com/photos/GYumuBnTqKc","download_url":"https://picsum.photos/id/1003/1181/1772"},{"id":"1004","author":"Greg Rakozy","width":5616,"height":3744,"url":"https://unsplash.com/photos/SSxIGsySh8o","download_url":"https://picsum.photos/id/1004/5616/3744"},{"id":"1005","author":"Matthew Wiebe","width":5760,"height":3840,"url":"https://unsplash.com/photos/tBtuxtLvAZs","download_url":"https://picsum.photos/id/1005/5760/3840"}];

    axios.get(API_BASE_URL+'/styles', { headers: { 'x-api-key': 'V7aoLs17Iz9iEFJhk1CpC7hKgVKVPGMp3pV6MSoF' }})
    .then(function (response) {
        if(response.status == 200){

          // MOBX-Action wird getriggert.
          mobxInteractionStore.setStylesArray(response.data.styles);
          
          // console.log(response.data.styles); // Nur zum testen, was in dem Array drin ist
        }
        else{ // Response war nicht 200 also fehlerhaft
          return;
        }
    })
    .catch(function (error) {
      console.log(error);
      // redirectToLogin()
    });

  return array.map((image) => {
    console.log(image)
    return (
      <Col>
      <Image style={{ width: 350, height: 300 }} src={image.download_url} />
      </Col>);
  });
}

export default GetStyles;