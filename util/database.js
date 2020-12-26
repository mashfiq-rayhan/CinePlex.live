// Connecting to Database
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('cineplex','root','openthegate',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;