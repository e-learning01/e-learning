const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('e-learning', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'});