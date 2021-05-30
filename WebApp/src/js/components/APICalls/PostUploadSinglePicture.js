import axios from 'axios'

// API-Call Schritt 4: Speichere das durch die Deepart-AI erstellte Bild ab, um es auf der Matrix erscheinen zu lassen

//  Speichere durch Deepart erstelltes Ergebnis URL als Bilddatei ab um es auf der Matrix anzeigen zu lassen
function PostUploadSinglePicture(data, setPicturePath) {

  axios.post("http://" + location.hostname + ":8000/upload", data,)  // location.hostname gibt den aktuellen Host wieder, von dem die Seite aufgerufen wird. Somit funktioniert der API-Call auch wenn die WebApp auf einer anderen Maschine im Netz läuft und nicht nur local.
  .then(res => { // then print response status
      console.log(res.statusText)
      var newPicturePath = res.data.replace("public", ""); // Ändere das Bild zum Pfad des gerade hochgeladenen -> Das /public vorne muss noch weggecutted werden da wir schon von /public ausgehen und dies dann nicht mehr brauchen, ansonsten wird das Bild nicht gefunden da falscher Ordner
      setPicturePath(newPicturePath);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default PostUploadSinglePicture;