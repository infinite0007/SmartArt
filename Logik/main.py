import matrixController
import helper
def main():
  #Festlegen des Pfades fuer die anzuzeigenden Bilder
    #path = "/home/salah/SmartArt/WebApp/public/matrixPictures/"
    path = "/home/pi/SmartArt/WebApp/public/matrixPictures/"
    #setzen der Optionen fuer die 64x64 Matrix 
    matrix = matrixController.setOptions()

    helper.startUI()    
    
    choice = helper.startCheck("Was willst du tun?\n")
    if choice == 1:
        slt = helper.intCheck("Waehle noch die Zeit (in Sekunden) zwischen den Bildern aus: \n")
        #Fehlerabfrage bei viel zu langen Zeiten
        while slt > (60*60*24):
            print("Eingabe dauert laenger als 1 Tag!")
            safety = helper.strCheck("Sicher dass es so lang sein soll? (Y,y/N,n)\n")
            if safety == "n":
                slt = helper.intCheck("Waehle eine andere Zeit (in Sekunden): \n")
            elif safety =="y":
                matrixController.startDiashow(matrix, path,slt)
            else:
                safety = helper.strCheck("Sicher dass es so lang sein soll? (Y,y/N,n)\n")
                
        matrixController.startDiashow(matrix, path,slt)
    elif choice == 2:
        try:
            matrixController.startSingleImageView(matrix, path)
        except KeyboardInterrupt:
            return main()
    elif choice == 3:
        helper.cleanup(path)
        return main()
    
if __name__ == "__main__":
    main()