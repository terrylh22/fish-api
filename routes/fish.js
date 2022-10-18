var express = require('express');
var router = express.Router();
var fishWatch = require('../apis/fishwatch');

// GET fish listing
router.get('/', function(req, res, next) {
    fishWatch.getFish((error, data) => {
        if(error) {
            console.log("fishwatch api error => " + error);
        } else {
            console.log("********inside router.get***********");
            console.log(data);
            res.json(data);
        }
    });
});

module.exports = router;