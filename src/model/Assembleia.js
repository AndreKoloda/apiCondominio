const Sequelize = require('sequelize');
const database = require('../database');

const Assembleia = database.define('assembleia',{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    assunto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_ocorrencia: {
        type: Sequelize.DATE,
        allowNull: false
    }
})

module.exports = Assembleia;