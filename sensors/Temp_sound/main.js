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

var groveSensor = require('jsupm_grove'); 
var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console

var analogPin0 = new mraa.Aio(1); //setup access analog input Analog pin #1 (A1)

var report = require('./report.js');

var toggle = true;
periodicActivity(); //call the periodicActivity function

function periodicActivity()
{
    //var uni=true;
    //while(uni)
    //{
    //console.log("start");
    if(toggle)
    {
        //console.log("temp");
        var temp = new groveSensor.GroveTemp(0);
        //console.log(temp.value());      
        report.reportSensors("temperature", "temperature", temp.value());
    }
    else
    {
        //console.log("sound");
        var analogValue = analogPin0.read(); //read the value of the analog pin
        //console.log(analogValue);
        report.reportSensors("sound", "sound", analogValue);
    }
    //console.log("peri");
    toogle =!toggle;
    setTimeout(periodicActivity, 500); //call the indicated function after 1 second (1000 milliseconds)
    
    //}
}