import matrixController

#path = "~/Downloads/"
path = "/home/pi/SmartArt/WebApp/public/matrixPictures/"

if __name__ == "__main__":
    
    matrix = matrixController.setOptions()
    #matrixController.Diashow(matrix, path)
    print(matrixController.newestPic(path))
    matrixController.SingleImageView(matrix, path)
    