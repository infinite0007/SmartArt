#!/usr/bin/env python
import time
import os
import glob

from rgbmatrix import RGBMatrix, RGBMatrixOptions
from PIL import Image
num = 0
#path = "/home/salah/Downloads/"
path = "/home/pi/pictures/"
img = ""

#list_of_files = glob.glob(path)

#latest_file = max(list_of_files, key= os.path.getctime)
#print("latest file: " + str(latest_file))

    
# Configuration for the matrix
options = RGBMatrixOptions()
options.rows = 64
options.cols = 64
options.chain_length = 1
options.parallel = 1
options.hardware_mapping = 'adafruit-hat'  # If you have an Adafruit HAT: 'adafruit-hat'

matrix = RGBMatrix(options = options)

#loop to iterate through the picture folder over and over
while True:
    files = os.listdir(path)
    amount = len(files)
    num = 0
    while num < amount and amount != 0:
        img = files[num].title().lower()
        if os.listdir(path) !=[]:
            _img = path + img
        else:
            #_img = "/home/salah/Pictures/critical_failure.jpeg"    
            _img = "/home/pi/Downloads/criticalfailure.jpeg"    
        image = Image.open(_img)
        # Make image fit our screen.
        image.thumbnail((matrix.width, matrix.height), Image.ANTIALIAS)
        matrix.SetImage(image.convert('RGB'))
        num +=1
        time.sleep(5)
        #if num == amount:
            #num = 0
    #only reached when there is a Problem
    matrix.SetImage(image.convert('RGB'))
    time.sleep(5)