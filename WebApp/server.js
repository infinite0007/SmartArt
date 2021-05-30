var express = require('express'); // um Server zu erstellen
var app = express();
var multer = require('multer') // Filemanipulation
var cors = require('cors'); // Erlaubt das nutzen/laden auch von anderen Servern, ansonst von Google gesperrt da Sicherheitsmaßnahme bei Browser
const serverhelper = require('./serverhelper'); // Ausschluss/Filterung von Falschdaten: Die hochgeladene Datei muss ein Bild sein, womöglich wird es sonst ausgenutzt dass jemand andere Dateien wie Malware aufspielen könnte
// Für Speicherung des Results
const fs = require('fs');
const axios = require('axios');
app.use(cors())

// Info zu Einmaligen Nämen wird Date.now() benutzt. Diese gibt die Anzahl der Millisekunden, die seit dem 01.01.1970 00:00:00 UTC vergangen sind zurück. Somit ist diese einmalig. Auch wäre: Math.random().toString(36).substring(2, 15) möglich dies ist auch einmalig, aber es reicht Date.now() aus.

// Erstellen einer Multer-Instanz und festlegung des Zielordners wo die Dateien gespeichert werden sollen
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/matrixPictures')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' +file.originalname.toLowerCase()) // LowerCase da das Python Programm welches die Bilder darstellt nur damit arbeiten kann (Genauer in Doku erklärt)
    }
  })
  
  // Erstellen einer Upload-Instanz zum erhalten einer einzelnen Datei (bei mehreren Dateien(multi-files) eventuell single zu array ändern wenn nötig)
  var upload = multer({ storage: storage, fileFilter: serverhelper.imageFilter }).single('file')
  
app.get('/',function(req,res){ // Falls jemand auf Standard-Adresse einen Call ausführt
    return res.send('Der Server läuft.')
})

// Festlegung der API POST Route (URL-Adresse) für den File-Upload
app.post('/upload',function(req, res) {

    
  upload(req, res, function (err) {

    if (req.fileValidationError) { // Keine Bilddatei
      return res.status(500).json(req.fileValidationError)
    }
    else if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
      // Multer-Fehler aufgetreten beim Upload.
    }
    else if (err) {
      return res.status(500).json(err)
      // Unbekannter Fehler aufgetreten beim Upload.
    }
    
    // Alles hat funktioniert. Bilddatei war richtig: Status 200 -> Operation/API call erfolgreich
    return res.status(200).send(`${req.file.path}`)
    })
});

app.get('/saveresult',function(req, res) {
  
  console.log(req.headers.url);
  var download_image;
  axios({
    url: req.headers.url,
    responseType: 'stream', // definiere was ich zurück bekomme -> (Binärdaten ohne Information)
  })
  .then(
    response =>
      new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream('public/matrixPictures/'+Date.now()+'-result.jpg')
          .on('finish', () => resolve())
          .on('error', e => reject(e)));
      }),
  );
});

// Den Server auf Port 8000 hören lassen
app.listen(8000, function() {
    console.log('SmartArt-Server läuft und hört auf Port: 8000');
});