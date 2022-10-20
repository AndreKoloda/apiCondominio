const Sequelize = require('sequelize');
const database = require('../database');

const Vaga = database.define('vaga',{
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    id_usuario: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id'
        }
    },
})

module.exports = Vaga;