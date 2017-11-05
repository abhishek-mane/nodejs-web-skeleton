let
    express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    let dev = require('../lib/devices')
    dev.create('device1')
    dev.list()
    res.send('Logic ran, check console logs.');
});

//export this router to use in our index.js
module.exports = router;