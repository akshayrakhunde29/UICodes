var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var data = {};
     data.status = req.session.isValid ? true : false;
     console.log(data.status)
    res.send(JSON.stringify(data));
});

module.exports = router;