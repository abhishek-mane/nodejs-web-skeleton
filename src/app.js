// Make web configurations globally accessible
global.webconfig = require('./web.config')

// Initialize express app
let
    // importing express
    express = require('express'),
    app = express(),
    // get server configuration modules
    serverConfig = require(global.webconfig.path.server_config),
    logger = require(require('path').join(global.webconfig.path.server_config, 'logger'))

// Initialise static web contents serving
logger.task('Initialize static web contents');
serverConfig.serve_static.init(express, app);

// Initialize session
logger.task('Initialize express session');
serverConfig.session.init(app);

// Initialize passport
logger.task('Initialize passport authentication');
serverConfig.passport.init(app);

// Initialise http routes
logger.task('Initialize the routes')
serverConfig.routes.init(app);

// Start server
logger.task('Initialize the server')
serverConfig.server.init(app);
