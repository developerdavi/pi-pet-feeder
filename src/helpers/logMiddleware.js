const log = require('./log');

/**
 * Logs a endpoint request
 * @param {Request} request
 * @param {Response} response
 * @param {NextFunction} next
 */
const logMiddleware = (request, response, next) => {
  log(`${request.method} ${request.path}`);
  next();
};

module.exports = logMiddleware;
