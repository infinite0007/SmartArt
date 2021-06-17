# SmartArt Project: Systemadministration - build your own art.<br/>by Sebastian Jäger & Julian Lingnau 
![image](https://github.com/infinite0007/SmartArt/blob/Julian/WebApp/src/images/smartart/smartart_logo.png?raw=true)

<img src="https://github.com/infinite0007/SmartArt/blob/Julian/WebApp/src/images/aboutapp/slider4.png?raw=true" height="500">

In the past decade, digital art has gained enormous attraction and popularity for people whose age group could not be more different.

There are several manufacturers of digital photo frames that all do the same thing:
Play back images previously saved on a memory card. To make this product more interesting, as part of a project work for the Systemadministration course, a system is to be created that scales the stored images into a smaller resolution and displays them on a simple LED matrix instead of on a screen. Due to the RGB with ~ 16 million colors, there are interesting possibilities here. We want to use it to make art more digital in order to bring technology-loving people closer to art - and vice versa.

## Getting the Hardware  
  
For the project you will need the specific hardware from the following links:   
[Adafruit Matrix HAT](https://www.adafruit.com/product/2345)  
[64x64 RGB LED Matrix](https://www.adafruit.com/product/4732)  
[Raspberry Pi 3](https://www.adafruit.com/product/3055)  
[Power supply 5V 10A](https://www.adafruit.com/product/658) or at least 5V 4A as the matrix consumes a LOT of power.  
Make sure you don`t go over 5V though.

To set up the project's basic configuration simply follow the [Adafruit tutorial](https://learn.adafruit.com/raspberry-pi-led-matrix-display/hardware).  
Some soldering is needed!  

# Installation - Get started

Install [Node.js](https://maker-tutorials.com/node-js-raspberry-pi-installieren/) on your Raspberry Pi.  

In the main directory: "SmartArt/"  

### `npm install`

To install all dependencies, which are important before running the project.

# Raspberry
When the basic stuff is up and running, simply clone the repository to a folder on your Raspberry Pi.  
cd into */SmartArt/Logik* and run the command  
*`sudo python3 SmartArt.py`*  
The main menu should appear in the console and show options for what is yet possible with the program.  

## The matrixController module
This module contains the functions for setting the matrix options.  
These come from the Python binding of the rpi-rgb-led-matrix-library.  
`setOptions ():` Here you can define the size of the matrix, how many matrices  
have been linked, and the hardware mapping.  
`newestPic ():` returns the newest picture and is used for the display modes.  
`setImage ():` Sets the image which should be displayed on the matrix. Used in the display modes.  
`startDiashow ():` starts the slide show on the matrix  
`startSingleImageView()` Starts the single image display on the matrix  

### The helper module
The auxiliary functions for the program are located in this module.  
`startUI ():` outputs the selection options on the console when the program is started  
`intCheck () strCheck () and startCheck ():` are auxiliary functions for exception handling in the event of incorrect user entries.  
`deleteAllPics ():` Deletes all pictures from the user folder except for the sample images.  

### The SmartArt module
The SmartArt module serves as the starting point for the program.  
It starts with a console output that leads through a small user menu to select the display modes.  

## Display modes
Two different modes were planned that can be called up.
### The single image view mode:
In this mode, only the last uploaded image should be displayed. This was implemented by the program monitoring the folder,  
which acts as a common interface, and always setting the image to be displayed to the last changed one during runtime.
### The slide show mode
In this mode, all images in the matrixPictures folder are displayed in sequence.  
The duration of how long each image is displayed can be specified via a parameter when the program is started.  
The slide show can be expanded to include images at runtime.    
  
  
All the Code for driving the matrix is found in the /Logik folder.  
Feel free to use it. It is derived from hzeller's [rpi-rgb-led-matrix library](https://github.com/hzeller/rpi-rgb-led-matrix) found on github, where you can check for further informations.  
There are also bindings for C# and C available.  
It is also possible to write your program directly in C++ which is recommended  
as it provides a way faster execution.


# WebApp
### To start the SmartArt Webapplication you need to run these following commands in directory: "SmartArt/WebApp"

### `npm start`
**Easiest way to run SmartArt**

Runs the SmartArt-Server **plus** the WebApp with one command.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run dev`

Runs the app only. (Without server)\
Open [http://localhost:3000](http://localhost:3000)\
or\
http://RaspberryIP:3000 to view it in the browser.

### `npm server.js`

Launches the SmartArt-Server only. (Without the app)\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
