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

//--------MYSQL 2------------
/* GET users listing
router.get('/', function(request, response, next) {
//   console.log('request start', new Date());
    // connection.query(
    //   'select * from usuarios',
    //   (error, result, field) => {
    //     console.log('query start', new Date());
    //     if(error) {
    //       console.log(error);
    //       response.status(400).send('Erro ao se conectar ao banco de dados.');
    //       return;
    //       }
    //     response.status(200).json(result);

    //     console.log('query end', new Date());
    //   },
    // );
    
    
    // console.log('request end', new Date());
// });

// router.get('/:usuariosId', function(request, response, next) {
  // connection.query(
  //   'select * from usuarios u where u.id = ?',
  //   [request.params.usuariosId],
  //   (error, result, field) => {
  //     if(error) {
  //       console.log(error);
  //       response.status(400).send('Erro ao se conectar ao banco de dados.');
  //       return;
  //       }

  //       if (!result.length) {
  //         response.status(400).send('Usuário não encontrado.');
  //         return;
  //       }
  //     response.status(200).json(result[0]);
  //   },
  // );
  
  
// });


module.exports = router;