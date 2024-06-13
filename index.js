const express = require('express');

const port = 3000;

const server = express();
// nome real body-parser
server.use(express.json())

server.use((request, response) => {
    const tokens = request.token;

    if (token === 'meu-token') {
        next();
    } else {
        response.status(403)
        .send('Usuário não autenticado.');
    }
});

server.get('/', (request, response) => {
    response
        .setHeader('Content-Type', 'text/html; charset=utf-8')
        .status(200)
        .send('<html><body>Olá <strong>Node Js</strong></body></html>');
}); 

server.get('/help', (request, response) => {
    response
        .setHeader('Content-Type', 'text/html; charset=utf-8')
        .status(200)
        .send('<html><body>Help page!</body></html>');
}); 

server.get('/user/:userId/:groupId', (request, response) => {
    const userId = request.params.userId;
    const groupId = request.params.groupId;

    response
        .setHeader('Content-Type', 'text/html; charset=utf-8')
        .status(200)
        .send('<html><body>User:'+ userId + '/' + groupId +'</body></html>');
}); 

server.post('/user', (request, response) => {
    const body = request.body;
    console.log(body);

    response.status(201).send();
})

server.listen(port, () => {
    console.log('Servidor iniciado na porta:', port);
});
