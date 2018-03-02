/**
 * Created by Dnyaneshwar on 01/03/2018.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('gallery', {
        title: 'Gallery',
        url : req.originalUrl
    });
});

module.exports = router;
