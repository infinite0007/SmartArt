import os
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
                
            except FileNotFoundError:
                print(fileName)
                continue
            