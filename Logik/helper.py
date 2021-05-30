

def startUI():
    print("=========================================")
    print("Willkommen in der Bildergalerie Steuerung")
    print("      Bitte einen Modus auswaehlen")
    print("      1 -   Diashow starten")
    print("      2 -   Neuestes Bild anzeigen")
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
            return _str if _str == "y" or _str == "n" else strCheck("Falsche Eingabe. Sicher dass es so lang sein soll? (y/n)")
        except ValueError as e:
            print("Das war kein String... Bitte nochmal versuchen")
            
def startCheck(prompt):
    while True:
        try:
            num = int(input(prompt))
            return num if num == 1 or num == 2 else startCheck("Diese Auswahl existiert nicht, nochmal bitte:\n ")
        except ValueError as e:
            print("Diese Auswahl existiert nicht, nochmal bitte:\n")
            startUI()
