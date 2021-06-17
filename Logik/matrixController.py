import time
import os
import helper
#Matrix imports
from rgbmatrix import RGBMatrix, RGBMatrixOptions, FrameCanvas

#Image processing imports
from PIL import Image
from PIL import ImageFile

#Secures that even truncated pictures can be loaded
ImageFile.LOAD_TRUNCATED_IMAGES = True
clearImg = "/home/pi/SmartArt/WebApp/public/ErrPics/blacksquare.png" 

def newestPic(path):
    files = os.listdir(path)
    paths = [os.path.join(path, basename) for basename in files]
    return max(paths, key=os.path.getctime)

def setOptions():
    # Configuration for the matrix
    options = RGBMatrixOptions()
    options.rows = 64
    options.cols = 64
    options.chain_length = 1
    options.brightness = 80
    options.parallel = 1
    options.hardware_mapping = 'adafruit-hat'  # If you don't have an Adafruit HAT: 'regular'

    matrix = RGBMatrix(options = options)
    return matrix

def setImage(matrix,img):
    image = Image.open(img)
    # Make image fit our screen.
    image.thumbnail((matrix.width, matrix.height), Image.ANTIALIAS)
    matrix.SetImage(image.convert('RGB'))
    
def clearScreen(matrix, clearImg):
    image = Image.open(clearImg)
    # Make image fit our screen.
    image.thumbnail((matrix.width, matrix.height), Image.ANTIALIAS)
    matrix.SetImage(image.convert('RGB'))

def startDiashow(matrix,path,sleeptime):
    num = 0
    img = ""
    #loop to iterate through the picture folder over and over 
    while True:
        try:
            #simple polling
            files = os.listdir(path)
            amount = len(files)
            num = 0
            if amount == 0:
                #img = "/home/salah/Pictures/critical_failure.jpeg"    
                img = "/home/pi/SmartArt/WebApp/public/ErrPics/criticalfailure.png"    
                image = Image.open(img)
                # Make image fit our screen.
                setImage(matrix,img)
                time.sleep(5)
                break
            while num < amount and amount != 0:
                img = files[num].title().lower()
                if os.listdir(path) !=[]:
                    img = path + img
                    setImage(matrix,img)
                    num +=1
                    time.sleep(sleeptime)
                    clearScreen(matrix, clearImg)    
        except KeyboardInterrupt:
            print('\nKehre zum Hauptmenu zurueck...')
            clearScreen(matrix, clearImg)         
            time.sleep(1)
            break  # finishing the loop
        except FileNotFoundError:
            print('\nBild nicht gefunden. Ueberpruefe ob Bilder im Ordner vorhanden sind!')
            print('\nKehre zum Hauptmenu zurueck...')
            clearScreen(matrix, clearImg)         
            time.sleep(1)
            break  # finishing the loop
                
def startSingleImageView(matrix,path):
    img = ""
    while True:
        try:
            if os.listdir(path) != FileNotFoundError:
                img = newestPic(path)
                setImage(matrix,img)
                time.sleep(3)           #3 secs of delay to wait for new pictures to be loaded
            else:
                #img = "/home/salah/Pictures/critical_failure.jpeg"    
                img = "/home/pi/SmartArt/WebApp/public/ErrPics/criticalfailure.png"    
                setImage(matrix,img)
                time.sleep(5)
                clearScreen(matrix, clearImg)   
                break  # finishing the loop
        except KeyboardInterrupt:
            print('Kehre zum Hauptmenu zurueck...')
            clearScreen(matrix, clearImg)         
            time.sleep(1)
            break  # finishing the loop
        except FileNotFoundError:
            print('\nBild nicht gefunden. Ueberpruefe ob Bilder im Ordner vorhanden sind!')
            print('\nKehre zum Hauptmenu zurueck...')
            clearScreen(matrix, clearImg)         
            time.sleep(1)
            break  # finishing the loop
