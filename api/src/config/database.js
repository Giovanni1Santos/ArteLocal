const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('artelocal', 'user', 'password', {
  host: 'db',
  dialect: 'postgres'
});

module.exports = sequelize;
