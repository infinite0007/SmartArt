import matrixController
import helper
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
    
    choice = helper.intCheck(input("Was willst du tun?\n"))
    if choice == 1:
        slt = helper.intCheck(input("Waehle noch die Zeit (in Sekunden) zwischen den Bildern aus: \n"))
        #Fehlerabfrage bei viel zu langen Zeiten
        while slt > (60*60*24):
            print("Eingabe dauert laenger als 1 Tag!")
            safety = input("Sicher dass es so lang sein soll? (y/n)\n").lower()
            if safety == "n":
                slt = helper.intCheck(input("Waehle eine andere Zeit (in Sekunden): \n"))
            elif safety =="y":
                matrixController.startDiashow(matrix, path,slt)
            else:
                print("falsche Eingabe!")
                safety = helper.strCheck(input("Sicher dass es so lang sein soll? (y/n)\n").lower())
                
        matrixController.startDiashow(matrix, path,slt)
    elif choice == 2:
        matrixController.startSingleImageView(matrix, path)
    