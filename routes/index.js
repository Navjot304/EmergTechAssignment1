// Navjot Kaur
//File name - index.js
//website - http://emergingtech-comp308-navjot.azurewebsites.net/
//Description - index.js page links to all .ejs files contained in the views folder of express portfolio

var express=require('express');
var router=express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {title: 'Home'});   //home page
});

router.get('/about', function(req, res, next) {
    res.render('about', {title: 'About'});    //about page
});

router.get('/service', function(req, res, next) {
    res.render('service', {title: 'Service'});   //service page
});

router.get('/project', function(req, res, next) {
    res.render('project', {title: 'Projects'});    //project page
});

router.get('/contact', function(req, res, next) {
    res.render('contact', {title: 'Contact'});   //contact page
});

module.exports=router;