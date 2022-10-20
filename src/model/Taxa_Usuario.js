const Sequelize = require('sequelize');
const database = require('../database');

const Taxa_Usuario = database.define('taxa_usuario',{
    usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id'
        }
    },
    taxa_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'taxas',
            key: 'id'
        }
    },
    data_ocorrencia: {
        type: Sequelize.DATE,
        allowNull: false
    }
})

module.exports = Taxa_Usuario;