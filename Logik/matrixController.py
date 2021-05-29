#!/usr/bin/env python
import time
import os
import glob

from rgbmatrix import RGBMatrix, RGBMatrixOptions
from PIL import Image

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
    options.parallel = 1
    options.hardware_mapping = 'adafruit-hat'  # If you have an Adafruit HAT: 'adafruit-hat'

    matrix = RGBMatrix(options = options)
    return matrix

def setImage(matrix,img):
    image = Image.open(img)
    # Make image fit our screen.
    image.thumbnail((matrix.width, matrix.height), Image.ANTIALIAS)
    matrix.SetImage(image.convert('RGB'))


def startDiashow(matrix,path):
    num = 0
    img = ""
    #loop to iterate through the picture folder over and over
    while True:
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
                time.sleep(5)
        
def startSingleImageView(matrix,path):
    img = ""
    while True:
        if os.listdir(path) !=[]:
            img = newestPic(path)
            setImage(matrix,img)
        else:
            #img = "/home/salah/Pictures/critical_failure.jpeg"    
            img = "/home/pi/SmartArt/WebApp/public/ErrPics/criticalfailure.png"    
            setImage(matrix,img)
            time.sleep(5)
            break
