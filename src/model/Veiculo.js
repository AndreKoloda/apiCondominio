const Sequelize = require('sequelize');
const database = require('../database');

const Assembleia = database.define('assembleia',{
    placa: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    marca: {
        type: Sequelize.STRING,
        allowNull: false
    },
    modelo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ano: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id'
        }
    }
})

module.exports = Assembleia;