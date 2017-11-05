const logger = require(global.webconfig.logging.logger);

module.exports = {
    init: (express, app) => {
        logger.enter('init', __filename);
        let
            prefix = global.webconfig.static_prefix,
            public_dir = global.webconfig.path.public;

        logger.data('prefix', prefix);
        logger.data('public_dir', public_dir);

        app.use(prefix, express.static(public_dir));
        logger.exit('init', __filename);
    }
}