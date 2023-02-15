const Sequelize = require('sequelize');
const sequelize = require("../config.js")

// Define User model
const User = sequelize.define('User', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
      },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
      },
    address: {
        type: Sequelize.STRING,
        allowNull: false
      },
    img: {
        type: Sequelize.STRING,
        allowNull: false
      },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    role: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
  });

module.exports = User;