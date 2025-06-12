import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

const Contato = sequelize.define('Contato', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true
  },
  userId:{
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'contatos',
  timestamps: false   
});

export default Contato;
