//set up sequelize
const Sequelize = require('sequelize');

const sequelize = new Sequelize('e-learning', 'root', 'KianaKaslana', {
    host: 'localhost',
    dialect: 'mysql',
  });

module.exports = sequelize;