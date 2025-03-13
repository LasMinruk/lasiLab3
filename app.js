const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello, this is my Node.js server!</h1>');
    res.end();
}).listen(8080);

console.log("Server running at http://localhost:8080");
