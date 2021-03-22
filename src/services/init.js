const config = require('../config');
const Gpio = require('pigpio').Gpio;

const motor = new Gpio(18, { mode: Gpio.OUTPUT });

const init = () => {
  motor.servoWrite(config.CLOSE_POSITION);
};

module.exports = { init, motor };
