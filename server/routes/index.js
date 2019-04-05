const auth = require('./auth');
const jokes = require('./jokes');

module.exports = server => {
  server.use('/api/auth', auth);
  server.use('/api/jokes', jokes);
};
