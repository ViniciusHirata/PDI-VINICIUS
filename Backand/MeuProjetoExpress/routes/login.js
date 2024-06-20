const express = require('express');
const jwt = require('jsonwebtoken');

const jwtPassword = 'mudar123';

const router = express.Router();
// localhost:3000/login
router.get('/', function(request, response) {
  const payload = {
    name: 'Vinicius Hirata',
    type: 'admin'
  };
  const token = jwt.sign(payload, jwtPassword,{
    expiresIn: '7d'
  });
  response.status(200).send(token);
});

router.get('/verify', function(request, response) {
  try {
    const token = request.headers.token;
    const payload = jwt.verify(token,jwtPassword);
    response.status(200).send(payload);
 } catch (err) {
  console.warn(err);
  response.status(401).send('Token Inválido')
 }
});


module.exports = router;
