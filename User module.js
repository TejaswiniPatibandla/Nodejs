var http = require('http');
var date= require('./link'); http.createServer (function (req, res){
res.writeHead (200, {'content-Type': 'text/html'}); 
res.write("the current date andtime is:"+date.myDateTime());
res.end();
}).listen(8888);
