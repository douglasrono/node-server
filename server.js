
const http = require('http');
const fs = require('fs);
const url = require('url');
const path = require('os');

 //create a server object:  
http.createServer((req, res) => {
    // Write headers to response 
    res.writeHead(200, {'Content-Type': 'text/html'});
    
   //Read html file
    fs.readFile('index.html',(err, resData) => {
   // Write html content to the response 
    if(err) throw err;
    res.write(resData);
    return res.end();
  });
//Listen to connection event
 http.on('connection',  () =>{
  console.log('Connection Created!');

}).listen(8080); // access the server on port 8000
