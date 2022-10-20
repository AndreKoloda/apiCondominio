const Sequelize = require('sequelize');
const database = require('../database');

const Condominio = database.define('condominio',{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    tamanhoM2: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    disponivel: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

module.exports = Condominio;