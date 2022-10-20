const Sequelize = require('sequelize');
const database = require('../database');

const Acessos = database.define('acessos',{
    chave: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    is_admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

module.exports = Acessos;