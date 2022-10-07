
const http = require('http');
const fs = require('fs);

 //create a server object:  
http.createServer((req, res) => {
    // Write headers to response 
    res.writeHead(200, {'Content-Type': 'text/html'});
    
   //write response to the client
    res.write("hello There!");
    res.write("I'm from the server!");
    res.write("GOODBYE!");
    return res.end();
  });

}).listen(8080); // access the server on port 8000
