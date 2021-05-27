import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../config/apiConstants';
import axios from 'axios'

// Store einbinden
import mobxInteractionStore from "../../stores/mobxInteractionStore"

function GetStyles() {
  
  axios.get(API_BASE_URL+'/styles', { headers: { 'x-api-key': 'V7aoLs17Iz9iEFJhk1CpC7hKgVKVPGMp3pV6MSoF' }})
  .then(function (response) {
      if(response.status == 200){
        
        // MOBX-Action wird getriggert.
        mobxInteractionStore.setStylesArray(response.data.styles);
        console.log(response.data.styles); // Nur zum testen, was in dem Array drin ist
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

export default (GetStyles);