const Sequelize = require('sequelize');
const database = require('../database');

const Votacao = database.define('votacao',{
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'usuario',
            key: 'id'
        }
    },
    id_assembleia: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'assembleias',
            key: 'id'
        }
    },
    voto: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    observacao: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

module.exports = Votacao;