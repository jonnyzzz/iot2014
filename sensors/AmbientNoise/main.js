/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */
/*global */

/*
A simple node.js application intended to read data from Analog pins on the Intel based development boards such as the Intel(R) Galileo and Edison with Arduino breakout board.

MRAA - Low Level Skeleton Library for Communication on GNU/Linux platforms
Library in C/C++ to interface with Galileo & other Intel platforms, in a structured and sane API with port nanmes/numbering that match boards & with bindings to javascript & python.

Steps for installing MRAA & UPM Library on Intel IoT Platform with IoTDevKit Linux* image
Using a ssh client: 
1. echo "src maa-upm http://iotdk.intel.com/repos/1.1/intelgalactic" > /etc/opkg/intel-iotdk.conf
2. opkg update
3. opkg upgrade

Article: https://software.intel.com/en-us/html5/articles/intel-xdk-iot-edition-nodejs-templates
*/

var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console

var myOnboardLed = new mraa.Gpio(13); //LED hooked up to digital pin 13 (or built in pin on Galileo Gen1 & Gen2)
myOnboardLed.dir(mraa.DIR_OUT); //set the gpio direction to output
var ledState = true; //Boolean to hold the state of Led

var redLed = new mraa.Gpio(2); //LED hooked up to digital pin 2 (or built in pin on Galileo Gen1 & Gen2)
redLed.dir(mraa.DIR_OUT); //set the gpio direction to output
//var greenLed = new mraa.Gpio(3); //LED hooked up to digital pin 3 (or built in pin on Galileo Gen1 & Gen2)
//greenLed.dir(mraa.DIR_OUT); //set the gpio direction to output
var blueLed = new mraa.Gpio(4); //LED hooked up to digital pin 4 (or built in pin on Galileo Gen1 & Gen2)
blueLed.dir(mraa.DIR_OUT); //set the gpio direction to output

var analogPin0 = new mraa.Aio(0); //setup access analog input Analog pin #0 (A0)

var report = require('./report.js');

periodicActivity(); //call the periodicActivity function

function periodicActivity()
{
    /*
    myOnboardLed.write(ledState?1:0); //if ledState is true then write a '1' (high) otherwise write a '0' (low)
    ledState = !ledState; //invert the ledState
    */
    
    var analogValue = analogPin0.read(); //read the value of the analog pin
    console.log(analogValue);
        
    //report.reportSensors("sound", "sound", analogValue);
    
    setTimeout(periodicActivity, 100); //call the indicated function after 1 second (1000 milliseconds)
}