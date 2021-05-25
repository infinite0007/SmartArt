const imageFilter = function(req, file, cb) {
  // Erlaube nur Bilddateien
  if (!file.mimetype.match(/(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
      req.fileValidationError = 'Es sind nur Bilddateien erlaubt!';
      return cb(new Error('Es sind nur Bilddateien erlaubt!'), false);
  }

  cb(null, true);
};

exports.imageFilter = imageFilter;