// Navjot Kaur
//File name - app.js
//website -
//Description - app.js page finds the route file index.js and fetchs all the .ejs files in the views folder

var express=require('express');
var path=require('path');


var index=require('./routes/index');

var app=express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');   //considers the .ejs files in views folder

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);  //uses index.js file in the routes folder


app.use(function(req, res, next) {
    var err=new Error('Not found');
    err.status=404;
    next(err);
});


module.exports=app;