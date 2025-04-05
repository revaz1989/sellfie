const { Sequelize } = require('sequelize');

// Initialize Sequelize to use SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'sellfie.sqlite'  // This file will be created in your backend folder
});

module.exports = sequelize;
