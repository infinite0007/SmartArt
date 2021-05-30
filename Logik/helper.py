
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
            _str = str(input(prompt))
            return _str
        except ValueError as e:
            print("Das war kein String... Bitte nochmal versuchen")

def startUI():
    print("=========================================")
    print("Willkommen in der Bildergalerie Steuerung")
    print("      Bitte einen Modus auswaehlen")
    print("      1 -   Diashow starten")
    print("      2 -   Neuestes Bild anzeigen")
    print("=========================================")
