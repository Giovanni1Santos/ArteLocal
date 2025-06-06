const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Artesao = sequelize.define('Artesao', {
  nome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  senha: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Artesao;
