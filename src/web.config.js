let path = require('path');

module.exports = {
    port: 8088,
    static_prefix: '/static',
    logging: {
        logger: path.join(__dirname, 'server-config', 'logger'),
        file: path.join(__dirname, '/logs/logs'),
        level: 'debug',
        maxLogFileSize: 5e+6, // Max size in bytes of the logfile, if the size is exceeded then a new file is created, a counter will become a suffix of the log file
        maxFiles: 10    // Limit the number of files created when the size of the logfile is exceeded.
    },
    path: {
        public: path.join(__dirname, 'public'),
        views: path.join(__dirname, 'views'),
        routes: path.join(__dirname, 'routes'),
        middlewares: path.join(__dirname, 'middlewares'),
        server_config: path.join(__dirname, 'server-config')
    }
}