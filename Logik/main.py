import matrixController

if __name__ == "__main__":

    #path = "/home/salah/Downloads/"
    path = "/home/pi/SmartArt/WebApp/public/matrixPictures/"
    matrix = matrixController.setOptions()

    print("=========================================")
    print("Willkommen in der Bildergalerie Steuerung")
    print("      Bitte einen Modus auswaehlen")
    print("      1 -   Diashow starten")
    print("      2 -   Neuestes Bild anzeigen")
    print("=========================================")

    choice = input("Was willst du tun?\n")
    
    if choice == "1":
        slt = input("Wähle noch die Zeit zwischen den Bildern aus: \n")
        matrixController.startDiashow(matrix, path, slt)
    elif choice == "2":
        #print(matrixController.newestPic(path))
        matrixController.startSingleImageView(matrix, path)
    
    
    