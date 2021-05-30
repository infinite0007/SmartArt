
def intCheck(prompt):
    while True:
        try:
            num = int(prompt)
            return num
        except ValueError as e:
            print("Das war keine Zahl... Bitte nochmal versuchen")

def strCheck(prompt):
    while True:
        try:
            _str = str(prompt)
            return _str
        except ValueError as e:
            print("Das war kein String... Bitte nochmal versuchen")
