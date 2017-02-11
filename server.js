var app=require('./app');
var debug=require('debug')('Emergingtech_COMP308_Sec004_Assignment-1_Navjot-Kaur:server');
var http=require('http');

const localport=3000;

let port=process.env.PORT || localport;

app.set('port', port);

app.listen(port);
console.log('Server started at port 3000');

//var port=normalizePort(process.env.PORT || '3000');
//app.set('port', port);
