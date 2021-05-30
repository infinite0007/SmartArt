import { ACCESS_KEY, API_BASE_URL } from '../../config/apiConstants';
import fs from 'fs'
import axios from 'axios'

//  Speichere durch Deepart erstelltes Ergebnis URL als Bilddatei ab um es auf der Matrix anzeigen zu lassen
function SafeResult(url) {

  axios.get("http://" + location.hostname + ":8000/saveresult", { headers: { 'url': url }}, { mode: 'cors', credentials: 'include' })
  .then(function (response) {
      if(response.status == 200){
        // console.log(response.data);
      }
      else{ // Response war nicht 200 also fehlerhaft
        return;
      }
  })
  .catch(function (error) {
    console.log(error);
  });

  /*axios.get({ url, responseType: 'stream', }, { mode: 'cors', credentials: 'include' })
  .then(
    response =>
      new Promise((resolve, reject) => {
        console.log("Response erhalten:");
        console.log(response.data);

        /*response.data
          .pipe(fs.createWriteStream(image_path))
          .on('finish', () => resolve())
          .on('error', e => reject(e));
      }),
  );*/
}

export default SafeResult;