const { format: formatDate } = require('date-fns');

const log = (text) => {
  console.log(`[!] ${formatDate(new Date(), 'dd/MM/yyyy HH:mm:ss')}: ${text}`);
};

module.exports = log;
