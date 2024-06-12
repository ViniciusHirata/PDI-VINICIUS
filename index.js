const http = require('http');

const port = 3000;

const server = http.createServer((request, response) => {
    response.setHeader('content-type','text/html; charset=utf8')
    response.write('Olá HTTP!');
    response.end();
});

server.listen(3000, () => {
    console.log('servidor iniciado na porta', port);
});

