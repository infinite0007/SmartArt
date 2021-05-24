var express = require('express'); // um Server zu erstellen
var app = express();
var multer = require('multer') // Filemanipulation
var cors = require('cors'); // Erlaubt das nutzen/laden auch von anderen Servern, ansonst von Google gesperrt da Sicherheitsmaßnahme bei Browser
app.use(cors())

// Erstellen einer Multer-Instanz und festlegung des Zielordners wo die Dateien gespeichert werden sollen
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/matrixPictures')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' +file.originalname )
    }
  })
  
  // Erstellen einer Upload-Instanz zum erhalten einer einzelnen Datei (bei mehreren Dateien(multi-files) eventuell single zu array ändern wenn nötig)
  var upload = multer({ storage: storage }).single('file')
  
app.get('/',function(req,res){ // Falls jemand auf Standard-Adresse einen Call ausführt
    return res.send('Der Server läuft.')
})

// Festlegung der API POST Route (URL-Adresse) für den File-Upload
app.post('/upload',function(req, res) {
    
    upload(req, res, function (err) {
     
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
          // Multer-Fehler aufgetreten beim Upload.
        } else if (err) {
            return res.status(500).json(err)
          // Unbekannter Fehler aufgetreten beim Upload.
        } 
        
        return res.status(200).send(req.file)
        // Alles hat funktioniert. Status 200 -> Operation/API call erfolgreich
      })
});

// Den Server auf Port 8000 hören lassen
app.listen(8000, function() {
    console.log('SmartArt-Server läuft und hört auf Port: 8000');
});