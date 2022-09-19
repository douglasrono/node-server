// import node_modules
// http module helps us create a server 
let http = require('http'),
      fs = require('fs);

http.createServer(function (req, res) {
  //Read index.html file
  fs.readFile('index.html', function(err, data) {
    // Write headers to the file
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

}).listen(8080);
