const sequelize = require('sequelize');
const Sequelize = require('sequelize');
const database = require('../database');

const Taxa = database.define('taxa',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    taxa_condominio: {
        type: sequelize.BOOLEAN,
        allowNull: true
    }
})

module.exports = Taxa;