// Navjot Kaur
//File name - server.js
//website - http://emergingtech-comp308-navjot.azurewebsites.net/
//Description - server.js page runs the app.js file and listens to port 3000.

var app=require('./app');
var debug=require('debug')('EmergTechAssignment1:server');
var http=require('http');

const localport=3000;   //port set to 3000

let port=process.env.PORT || localport;

app.set('port', port);

app.listen(port);
console.log('Server started at port 3000');

