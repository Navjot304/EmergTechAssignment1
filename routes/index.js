var express=require('express');
var router=express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/about', function(req, res, next) {
    res.render('about', {title: 'About'});
});

router.get('/resume', function(req, res, next) {
    res.render('resume', {title: 'Resume'});
});

router.get('/skills', function(req, res, next) {
    res.render('skills', {title: 'Skills'});
});

router.get('/contact', function(req, res, next) {
    res.render('contact', {title: 'Contact'});
});

module.exports=router;