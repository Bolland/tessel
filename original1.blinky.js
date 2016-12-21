// Import the interface to Tessel hardware
var tessel = require('tessel');

// Set the led pins as outputs with initial states
// Truthy initial state sets the pin high
// Falsy sets it low.
var led1 = tessel.led[0].output(1);
var led2 = tessel.led[1].output(1);
var led3 = tessel.led[2].output(1);
var led4 = tessel.led[3].output(1);

var i = 0;

setInterval(function () {
    console.log("Hello blinky prime number world!"+i);
    // Toggle the led states
    i += 1;

    if ((i % 2) == 0)
    {
        led1.toggle();
    }

    if ((i % 3) == 0)
    {
        led2.toggle();
    }
    if ((i % 5) == 0)
    {
        led3.toggle();
    }
    if ((i % 7) == 0)
    {
        led4.toggle();
    }

}, 100);
