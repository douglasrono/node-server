
const http = require('http');
const fs = require('fs);

 //create a server object:  
http.createServer((req, res) => {
    // Write headers to response 
    res.writeHead(200, {'Content-Type': 'text/html'});
    
   //Read html file
    fs.readFile('index.html', function(err, resData) {
   // Write html content to the response 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(resData);
    return res.end();
  });

}).listen(8080); // access the server on port 8000
