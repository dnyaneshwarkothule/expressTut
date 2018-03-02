/**
 * Created by Dnyaneshwar on 01/03/2018.
 */
var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
    res.render('contact', {
        title: 'Contact',
        url : req.originalUrl
    });
});

module.exports = router;
