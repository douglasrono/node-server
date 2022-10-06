
const http = require('http'),
      fs = require('fs)
       dt = require('./appDate');

http.createServer((req, res) => {
  //Read index.html file
  fs.readFile('index.html', (err, data) =>{
    // Write headers to the file
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data + dt);
    return res.end();
  });

}).listen(8080);
