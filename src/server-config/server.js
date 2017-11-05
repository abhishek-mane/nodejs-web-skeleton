const
    path = require('path'),
    strFormat = require('string-format'),
    logger = require(path.join(global.webconfig.path.server_config, 'logger'));


module.exports = {
    init: (app) => {
        logger.enter('init', __filename);

        const PORT = process.env.PORT || global.webconfig.port;

        logger.data('PORT', PORT)

        const server = app.listen(PORT, () => {
            logger.info(strFormat('Remote Monitoring Application is listening at http://localhost:{0}',
                server.address().port
            ));
        });

        logger.exit('init', __filename);
    }
};