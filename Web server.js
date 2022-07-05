var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('TEJASWINI PATIBANDLA);
  res.end();
}).listen(8085); //listens on port 8085
