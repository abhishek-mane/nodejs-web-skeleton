let
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    logger = require(global.webconfig.logging.logger);

module.exports = {
    init: (app) => {
        logger.enter('init', __filename)

        app.use(passport.initialize());
        app.use(passport.session());
        passport.use(new LocalStrategy((username, password, done) => {
            (username, password, done) => {
                // CODE GOES HERE
            }
        }));

        logger.exit('init', __filename)
    }
}