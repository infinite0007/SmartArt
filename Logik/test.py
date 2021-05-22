import logging
import threading
import time
import os
from rgbmatrix import RGBMatrix, RGBMatrixOptions
from PIL import Image

amount = 0
num = 1
path = "/home/pi/pictures/"


options = RGBMatrixOptions()
options.rows = 64
options.cols = 64
options.chain_length = 1
options.parallel = 1
options.hardware_mapping = 'adafruit-hat'  # If you have an Adafruit HAT: 'adafruit-hat'

matrix = RGBMatrix(options = options)

is_checking = False

def check_folder():
    global amount, img
    is_checking = True
    for files in os.listdir(path):
        amount += 1
        img = files.title().lower()
        print(img)
        print(amount)

def print_picture():
    global amount, path, img
    is_checking = False
    while amount != 0:
        if os.listdir(path) !=[]:
            _img = path + img
        else:
            _img = "/home/pi/Downloads/CriticalFail.jpeg"    
        image = Image.open(_img)
        image.thumbnail((matrix.width, matrix.height), Image.ANTIALIAS)
        matrix.SetImage(image.convert('RGB'))
        time.sleep(5)
    #only reached when there is a Problem
    matrix.SetImage(image.convert('RGB'))
    time.sleep(3)

if __name__ == "__main__":
    if is_checking == False:
        check_folder()
    else:
        print_picture()
