const config = require('../config');
const delay = require('../helpers/delay');
const log = require('../helpers/log');
const { motor } = require('./init');

const open = () => {
  motor.servoWrite(config.OPEN_POSITION);
};

const close = () => {
  motor.servoWrite(config.CLOSE_POSITION);
};

const feedPet = async () => {
  log('Feeding...');
  open();
  await delay(500);
  close();
};

module.exports = feedPet;
