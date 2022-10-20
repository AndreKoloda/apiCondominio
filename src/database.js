const Sequelize = require('sequelize')
const sequelize = new Sequelize('apicondominio','root','mysql',{
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

module.exports = sequelize;