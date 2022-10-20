const Sequelize = require('sequelize');
const database = require('../database');

const Contrato = database.define('contrato',{
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id'
        }
    },
    id_condominio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'condominios',
            key: 'id'
        }
    },
    data_inicio: {
        type: Sequelize.DATE,
        allowNull: false
    },
    data_fim: {
        type: Sequelize.DATE,
        allowNull: false
    }
})

module.exports = Contrato;