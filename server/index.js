require('dotenv').config(); // load .env variables

const debug = require('debug')('server:init');

const server = require('./api/server.js');

const port = process.env.PORT || require('config').get('port');

server.listen(port, () => debug(`Server Listening {${port}}`));
