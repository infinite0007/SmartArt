require("../../../stylesheets/_all.scss");
import { ACCESS_KEY, API_BASE_URL } from '../../config/apiConstants';
import axios from 'axios'

// API-Call Schritt 3: Erhalte mein durch die Deepart-AI kombiniertes Bild

//  Hole Ergebnis der Kombinierung
function GetResult(submissionId, setResultUrl, setUploadResultButtonDisabled) {

  return axios.get(API_BASE_URL+'/result?submissionId='+submissionId, /*{ params: { submissionId: 'submissionId' } },*/ { headers: { 'x-api-key': ACCESS_KEY }}, { mode: 'cors', credentials: 'include' })
  .then(function (response) {
      if(response.status == 200){
        // console.log(response.data);

        if (response.data.status!="finished") { // Solange der Status meines Bildes noch nicht finished also "fertig" ist rufe ich den API-Call jede Sekunde neu auf und überprüfe ob es fertig ist
          setUploadResultButtonDisabled(true);
          setTimeout(() => {  GetResult(submissionId, setResultUrl, setUploadResultButtonDisabled); }, 1000); // Warte eine Sekunde da die API nur einen Aufruf pro Sekunde zulässt und wir immer überprüfen müssen ob das Bild bereits fertig ist (finished)
        }
        else { // Wenn das Bild fertig ist also "finished" speichere die Url ab
          setResultUrl(response.data.url);
          setUploadResultButtonDisabled(false);
          return;
        }
      }
      else{ // Response war nicht 200 also fehlerhaft
        return;
      }
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default GetResult;