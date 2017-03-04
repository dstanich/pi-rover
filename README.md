# pi-rover
This repo contains software and information on a hobby project for a remote controlled Raspberry Pi rover.

## Videos and Screenshot
<img src="https://github.com/dstanich/pi-rover/raw/master/web_ui_example.png" height="300px" alt="Web UI">

<a href="http://www.youtube.com/watch?feature=player_embedded&v=qJu69sHTsoA" target="_blank"><img src="http://img.youtube.com/vi/qJu69sHTsoA/0.jpg" alt="Remote Controlled Raspberry Pi Rover" border="1"></a>


## Hardware Setup
Generally, I followed hardware instructions from the [Simple Raspberry Pi Robot tutorial](https://learn.adafruit.com/simple-raspberry-pi-robot/overview).

### Parts List
Most parts can be purchased via Adafruit and Amazon.  [This kit](https://www.adafruit.com/products/2939) has the majority of the parts.

* x1 Raspberry Pi Zero
* x1 Raspberry Pi Zero OTG cable and pins [link](https://www.amazon.com/gp/product/B01FH1UXXU)
* x1 USB power bank [link](https://www.amazon.com/gp/product/B005X1Y7I2)
* x1 Wireless adapter [link](https://www.amazon.com/gp/product/B003MTTJOY)
* x2 Wheels [link](https://www.adafruit.com/products/2744)
* x2 DC motors [link](https://www.adafruit.com/products/2941)
* x1 Support wheel [link](https://www.adafruit.com/products/2942)
* x1 Metal chassis [link](http://www.adafruit.com/products/2943)
* x1 4xAA battery pack [link](https://www.adafruit.com/products/830)
* x1 Adafruit motor hat [link](https://www.adafruit.com/products/2348)
* Various wires for connecting motors

### Assembly
Assembly can you followed at the [Simple Raspberry Pi Robot tutorial](https://learn.adafruit.com/simple-raspberry-pi-robot/overview).  I followed the hardware installation instructions except for mounting the items.  I used some lego to insulate the Raspberry Pi from the chassis and some carpet tape to attach the pieces.


## Software Setup
The software uses a web application, NodeJS server, and Python to control the robot.  The steps below are necessary to get the code to work.

### Install Steps
1. Clone the repo
2. Run `npm install`
	* Installs NodeJS server dependencies
	* Clones [Adafruit motor hat library](https://github.com/adafruit/Adafruit-Motor-HAT-Python-Library)


## Running
Run `npm start` which will start the NodeJS server and serve up the web application on http://localhost:3000.  Pushing directions on the application will trigger the rover to change direction.

### Flow of Application
1. Web UI sends REST call to NodeJS backend
2. NodeJS backend reads the data and calls Python bridge code
3. Python bridge call interacts with Adafruit library
4. Adafruit library updates rover's speed and direction
