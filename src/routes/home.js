const
    path = require('path'),
    express = require('express'),
    router = express.Router(),
    authMiddleware = require(path.join(global.webconfig.path.middlewares, 'auth'));

router.use(authMiddleware);

router.get('/', (req, res) => {
    res.send('GET route on home.');
});

router.post('/', (req, res) => {
    res.send('POST route on home.');
});

//export this router to use in our index.js
module.exports = router;