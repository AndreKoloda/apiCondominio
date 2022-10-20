const sequelize = require('sequelize');
const Sequelize = require('sequelize');
const database = require('../database');

const Usuario = database.define('usuario',{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: sequelize.STRING,
        allowNull: false
    },
    admin: {
        type: sequelize.BOOLEAN,
        allowNull: true
    }
})

module.exports = Usuario;