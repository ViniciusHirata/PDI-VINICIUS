const http = require('http');

const port = 3000;

const server = http.createServer((request, response) => {
    response.setHeader('content-type','text/html; charset=utf8')
    response.writeHead(201);
    response.write('<html><body>Olá <strong>HTTP!</strong></body></html>');
    response.end();
});

server.listen(3000, () => {
    console.log('servidor iniciado na porta', port);
});

