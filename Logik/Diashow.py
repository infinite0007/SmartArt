#!/usr/bin/env python
import time
import os
import glob

from rgbmatrix import RGBMatrix, RGBMatrixOptions
from PIL import Image
amount = 0
num = 0
#path = "/home/salah/Downloads/"
path = "/home/pi/pictures/"
img = ""

list_of_files = glob.glob(path)

latest_file = max(list_of_files, key= os.path.getctime)
print("latest file: " + str(latest_file))

files = os.listdir(path)
amount = len(files)
    
# Configuration for the matrix
options = RGBMatrixOptions()
options.rows = 64
options.cols = 64
options.chain_length = 1
options.parallel = 1
options.hardware_mapping = 'adafruit-hat'  # If you have an Adafruit HAT: 'adafruit-hat'

matrix = RGBMatrix(options = options)

# Make image fit our screen.
print("Amount of Pictures: " + str(amount))
#loop to iterate through the picture folder over and over
while num <= amount and amount != 0:
    img = files[num].title().lower()
    if os.listdir(path) !=[]:
        _img = path + img
    else:
        #_img = "/home/salah/Pictures/critical_failure.jpeg"    
        _img = "/home/pi/Downloads/criticalfailure.jpeg"    
    image = Image.open(_img)
    image.thumbnail((matrix.width, matrix.height), Image.ANTIALIAS)
    matrix.SetImage(image.convert('RGB'))
    num +=1
    time.sleep(5)
    if num == amount+1:
        num = 0
#only reached when there is a Problem
matrix.SetImage(image.convert('RGB'))
time.sleep(5)
'''try:
    print("Press CTRL-C to stop.")
    while True:
        time.sleep(100)
except KeyboardInterrupt:
    sys.exit(0)
'''
