const  { Sequelize, DataTypes }  = require('sequelize');
const sequelize = new Sequelize(
    'pratica_sql', // database
    'vinicius-hirata', // user
    '123mudar', // password

    {
        dialect: 'mysql',
        host: 'captain.lab.smarppy.com',
        port: '35000',
        define: {
            //desabilita colunas createAt e updateAt
            timestamps: false
        }
    }
)


const User = sequelize.define('usuarios', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaltValue: null,
    },
    data_criacao: {
        type: DataTypes.DATE,
        allowNull: false,
        defaltValue: DataTypes.NOW,
    }

    
}); 

module.exports = {
    sequelize,
    User
};