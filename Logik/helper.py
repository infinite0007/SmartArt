
import time
import os
import glob

def startUI():
    print("=========================================")
    print("Willkommen in der Bildergalerie Steuerung")
    print("      Bitte einen Modus auswaehlen")
    print("      1 -   Diashow starten")
    print("      2 -   Neuestes Bild anzeigen")
    print("      3 -   Alle Bilder entfernen (außer Beispielbilder)")
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

def cleanup():
    file_path = "/home/pi/SmartArt/WebApp/public/ErrPics/"
    while not os.path.exists(file_path):
        time.sleep(10)

        if os.path.isfile(file_path):
        
            for CleanUp in glob.glob("/home/pi/SmartArt/WebApp/public/ErrPics/*.*"):
                print(CleanUp)
                if CleanUp.endswith('goa.jpg'):    
                    continue
                elif CleanUp.endswith('monalisa.jpg'):
                    continue
                else:
                    os.remove(CleanUp)
                    