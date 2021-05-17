#!/usr/bin/env python
import time
import sys
import os.path

from rgbmatrix import RGBMatrix, RGBMatrixOptions
from PIL import Image
amount = 0
num = 1
path = "/home/pi/pictures/"

for files in os.listdir(path):
    amount += 1
    print(files.title())

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
    if os.listdir(path) !=[]:
        img = path + "Pic" + str(num) + ".png"
    else:
        img = "/home/pi/Downloads/CriticalFail.jpeg"    
    image = Image.open(img)
    image.thumbnail((matrix.width, matrix.height), Image.ANTIALIAS)
    matrix.SetImage(image.convert('RGB'))
    num +=1
    time.sleep(3)
    if num == amount+1:
        num = 1
#only reached when there is a Problem
matrix.SetImage(image.convert('RGB'))
time.sleep(3)
'''try:
    print("Press CTRL-C to stop.")
    while True:
        time.sleep(100)
except KeyboardInterrupt:
    sys.exit(0)
'''
