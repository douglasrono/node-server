// import node_modules
// http module helps us create a server 
var http = require('http');

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});

  res.end('Hello World!');

}).listen(8080);
