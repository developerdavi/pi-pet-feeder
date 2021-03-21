const Gpio = require('pigpio').Gpio;
const { CronJob } = require('cron');
const { format: formatDate } = require('date-fns');

const OPEN_POSITION = 1500;
const CLOSE_POSITION = 1000;

const log = (text) => {
  console.log(`[!] ${formatDate(new Date(), 'dd/MM/yyyy HH:mm:ss')}: ${text}`);
};

const motor = new Gpio(18, { mode: Gpio.OUTPUT });
motor.servoWrite(CLOSE_POSITION);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const open = () => {
  motor.servoWrite(OPEN_POSITION);
};

const close = () => {
  motor.servoWrite(CLOSE_POSITION);
};

const feedPet = async () => {
  log('Feeding...');
  open();
  await delay(500);
  close();
};

new CronJob('0 9 * * *', feedPet).start();
new CronJob('0 18 * * *', feedPet).start();

log('Pet feeder started');
