const debug = require('debug')('server:log');

module.exports = () => (req, res, next) => {
  res.on('finish', () => {
    debug(
      `${req.method} ${req.originalUrl} - ${res.statusCode} [${
        res.statusMessage
      }]`
    );
  });
  next();
};
