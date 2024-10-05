const http = require('http') 
const { readFileSync} = require('fs')

//get all files
const homepage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/style.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');


const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homepage);
        res.end();
    } else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>about us</h1>');
        res.end();
    } else if (url === '/style.css') {
        res.writeHead(200, { 'content-type': 'text/css'})
        res.write(homeStyles)
        res.end()
    } else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeImage)
        res.end()
    }
    
    
    else {
        res.writeHead(404, { 'content-type': 'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()
    }
})

server.listen(9000)