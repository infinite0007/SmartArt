import os
import sys
import matrixController

def startUI():
    print("=========================================")
    print("Willkommen in der Bildergalerie Steuerung")
    print("      Bitte einen Modus auswaehlen")
    print("      1 -   Diashow starten")
    print("      2 -   Neuestes Bild anzeigen")
    print("      3 -   Alle Bilder entfernen (ausser Beispielbilder)")
    print("=========================================")

def intCheck(prompt):
    while True:
        try:
            num = int(input(prompt))
            return num
        except ValueError as e:
            print("Das war keine Zahl... Bitte nochmal versuchen")

def strCheck(prompt):
    while True:
        try:
            _str = str(input(prompt)).lower()
            return _str if _str == "y" or _str == "n" else strCheck("Falsche Eingabe. Sicher dass es so lang sein soll? (Y,y/N,n)")
        except ValueError as e:
            print("Das war kein String... Bitte nochmal versuchen")
            
def startCheck(prompt):
    while True:
        try:
            num = int(input(prompt))
            return num if num == 1 or num == 2 or num == 3 else startCheck("Diese Auswahl existiert nicht, nochmal bitte:\n ")
        except ValueError as e:
            print("Diese Auswahl existiert nicht, nochmal bitte:\n")
            startUI()

def cleanup(path):
    #file_path = "/home/pi/SmartArt/WebApp/public/matrixPictures/"
    fileList = os.listdir(path)
    for fileName in fileList:
        if fileName == 'goa.jpg':
            continue
        elif fileName == 'monalisa.jpg':
            continue
        else:
            try:
                print(fileName + " was successfully removed")
                os.remove(path + fileName)
                return main()
                
            except FileNotFoundError:
                print(fileName)
                return main()
def main():
  #Festlegen des Pfades fuer die anzuzeigenden Bilder
    #path = "/home/salah/SmartArt/WebApp/public/matrixPictures/"
    path = "/home/pi/SmartArt/WebApp/public/matrixPictures/"
    #setzen der Optionen fuer die 64x64 Matrix 
    matrix = matrixController.setOptions()

    startUI()    
    
    choice = startCheck("Was willst du tun?\n")
    if choice == 1:
        slt = intCheck("Waehle noch die Zeit (in Sekunden) zwischen den Bildern aus: \n")
        #Fehlerabfrage bei viel zu langen Zeiten
        while slt > (60*60*24):
            print("Eingabe dauert laenger als 1 Tag!")
            safety = strCheck("Sicher dass es so lang sein soll? (Y,y/N,n)\n")
            if safety == "n":
                slt = intCheck("Waehle eine andere Zeit (in Sekunden): \n")
            elif safety =="y":
                matrixController.startDiashow(matrix, path,slt)
            else:
                safety = strCheck("Sicher dass es so lang sein soll? (Y,y/N,n)\n")
                
        matrixController.startDiashow(matrix, path,slt)
    elif choice == 2:
        matrixController.startSingleImageView(matrix, path)
    elif choice == 3:
        cleanup(path)

    elif choice == 4:
        sys.exit()

            