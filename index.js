const http = require('http');

const port = 3000;

const server = http.createServer((request, response) => {
    response.write('Olá HTTP!');
    response.end();
});

server.listen(3000, () => {
    console.log('servidor iniciado na porta', port);
});