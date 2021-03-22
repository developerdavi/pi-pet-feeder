const { CronJob } = require('cron');
const feedPet = require('./services/feedPet');

const morningCron = new CronJob('0 9 * * *', feedPet);
const eveningCron = new CronJob('0 18 * * *', feedPet);

morningCron.start();
eveningCron.start();

const crons = { morningCron, eveningCron };

module.exports = crons;
