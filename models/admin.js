const {Sequelize} = require('sequelize');

const sequelize = require('../util/database');

// Creating Admins table
const Admin = sequelize.define('admin', {
    admin_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    admin_name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    admin_email: {
        type: Sequelize.STRING,
        allowNull: false
    },

    admin_phone: {
        type: Sequelize.STRING,
        allowNull: false
    },

    admin_password: {
        type: Sequelize.STRING,
        allowNull: false
    },

    admin_level: {
        type: Sequelize.STRING,
        allowNull: false
    },

    rf_id: {
        type: Sequelize.STRING,
        allowNull: false
    }
    
});

module.exports = Admin;