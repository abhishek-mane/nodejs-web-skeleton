let
    express = require('express'),
    router = express.Router();

router.get('/', function (req, res) {
    req.login('testuser', (err) => {

    })
    res.send('GET route on login.');
});

//export this router to use in our index.js
module.exports = router;