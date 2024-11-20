var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    // Set up routing for different pages
    if (req.url === '/' || req.url === '/index.html') {
        fs.readFile('index.html', function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('<h1>404 Not Found</h1>');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
            }
            res.end();
        });
    } else if (req.url === '/contact.html') {
        fs.readFile('contact.html', function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('<h1>404 Not Found</h1>');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
            }
            res.end();
        });
    } else if (req.url === '/about.html') {
        fs.readFile('about.html', function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('<h1>404 Not Found</h1>');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
            }
            res.end();
        });
    }
    else if (req.url === '/products.html') {
        fs.readFile('products.html', function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('<h1>404 Not Found</h1>');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
            }
            res.end();
        });
    }
    else {
        // Handle unknown routes
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 Page Not Found</h1>');
        res.end();
    }
}).listen(8080);

console.log('Server is running at http://localhost:8080');
