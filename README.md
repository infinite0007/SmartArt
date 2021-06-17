# SmartArt Project: Systemadministration - build your own art.<br />by Sebastian Jäger & Julian Lingnau 
![image](https://github.com/infinite0007/SmartArt/blob/Julian/WebApp/src/images/smartart/smartart_logo.png?raw=true)

<img src="https://github.com/infinite0007/SmartArt/blob/Julian/WebApp/src/images/aboutapp/slider4.png?raw=true" height="500">

In the past decade, digital art has gained enormous attraction and popularity for people whose age group could not be more different.

There are several manufacturers of digital photo frames that all do the same thing:
Play back images previously saved on a memory card. To make this product more interesting, as part of a project work for the Systemadministration course, a system is to be created that scales the stored images into a smaller resolution and displays them on a simple LED matrix instead of on a screen. Due to the RGB with ~ 16 million colors, there are interesting possibilities here. We want to use it to make art more digital in order to bring technology-loving people closer to art - and vice versa.

# Installation - Get started
## Raspberry
1. Install Node.js on your Raspberry Pi.
   - npm install or npm i to install all dependency`s which are necessary to run our project.


## WebApp
### To start the SmartArt Webapplication you need to run these following commands in directory: "SmartArt/WebApp"

### `npm install`

Install all dependencies.\
Important before running the project.

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
