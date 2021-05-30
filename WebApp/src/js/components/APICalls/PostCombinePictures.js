import { ACCESS_KEY, API_BASE_URL } from '../../config/apiConstants';
import axios from 'axios';

// API-Call Schritt 2: Gib gewünschte Style-Id mit sowie ein Base64 encoded String von einem Bild das dann mit dem Style kombiniert wird (bekommen submissionId zurück)

function PostCombinePictures(payload) {
  
  // Hole Userplan
  return axios.post(API_BASE_URL+'/upload', payload, { headers: { 'x-api-key': ACCESS_KEY }}, { mode: 'cors', credentials: 'include' })
  .then(function (response) {
      if(response.status == 200){ // erfolg
        return response.data.submissionId
      }
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default (PostCombinePictures);