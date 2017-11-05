const logger = require(global.webconfig.logging.logger);

module.exports = {
    init: (app) => {
        logger.enter('init', __filename);

        let controllers = require(global.webconfig.path.routes);
        Object.keys(controllers).forEach((key) => {
            app.use('/' + key, controllers[key])
        });
        
        logger.exit('init', __filename);
    }
}