import axios from 'axios'

// API-Call Schritt 4: Speichere das durch die Deepart-AI erstellte Bild ab, um es auf der Matrix erscheinen zu lassen

//  Speichere durch Deepart erstelltes Ergebnis URL als Bilddatei ab um es auf der Matrix anzeigen zu lassen
function SafeResult(url) {

  axios.get("http://" + location.hostname + ":8000/saveresult", { headers: { 'url': url }}, { mode: 'cors', credentials: 'include' })
  .then(function (response) {
      if(response.status == 200){
      }
      else{ // Response war nicht 200 also fehlerhaft
        return;
      }
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default SafeResult;