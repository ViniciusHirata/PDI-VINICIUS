const express = require('express');
const mysql = require('mysql2');
const { User } = require('../models');

const router = express.Router();

const connection = mysql.createConnection({
  database: 'pratica_sql',
  host:'captain.lab.smarppy.com',
  user: 'vinicius-hirata',
  password: '123mudar',
  port:35000
});


router.get('/', async function(request, response, next) {
  try {
    const users = await User.findAll();
    response.status(200).json(users);
  }catch (err) {
    console.log(err);
    response.status(400).send('Falha ao consultar os usuários')
  }
});


router.get('/:usuariosId', async function(request, response, next) {
  try {
    const users = await User.findByPk(request.params.usuariosId);
    if (!users) {
      response.status(404).send('Usuário não encontrado')
      return;
    }
    response.status(200).json(users);
  }catch (err) {
    console.log(err);
    response.status(400).send('Falha ao consultar os usuários')
  }
});

module.exports = router;


