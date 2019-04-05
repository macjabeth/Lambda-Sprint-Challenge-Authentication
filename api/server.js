const logger = require('../middleware/logger');
const configureRoutes = require('../routes');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const express = require('express');
const server = express();

// Middleware
server.use(express.json());
server.use(compression());
server.use(helmet());
server.use(cors());
server.use(logger());

// Routes
configureRoutes(server);

module.exports = server;
