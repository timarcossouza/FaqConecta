var express = require('express'),
    app = express.createServer();
var router = express.Router();


router.get('/', function(req, res) {
	res.send('ok')
});

module.exports = router;