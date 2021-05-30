import matrixController
import helper
if __name__ == "__main__":
    #Festlegen des Pfades für die anzuzeigenden Bilder
    #path = "/home/salah/Downloads/"
    path = "/home/pi/SmartArt/WebApp/public/matrixPictures/"
    #setzen der Optionen für die 64x64 Matrix 
    matrix = matrixController.setOptions()

    helper.startUI()    
    
    choice = helper.startCheck("Was willst du tun?\n")
    if choice == 1:
        slt = helper.intCheck("Waehle noch die Zeit (in Sekunden) zwischen den Bildern aus: \n")
        #Fehlerabfrage bei viel zu langen Zeiten
        while slt > (60*60*24):
            print("Eingabe dauert laenger als 1 Tag!")
            safety = helper.strCheck("Sicher dass es so lang sein soll? (y/n)\n")
            if safety == "n":
                slt = helper.intCheck("Waehle eine andere Zeit (in Sekunden): \n")
            elif safety =="y":
                matrixController.startDiashow(matrix, path,slt)
            else:
                safety = helper.strCheck("Sicher dass es so lang sein soll? (y/n)\n")
                
        matrixController.startDiashow(matrix, path,slt)
    elif choice == 2:
        matrixController.startSingleImageView(matrix, path)
