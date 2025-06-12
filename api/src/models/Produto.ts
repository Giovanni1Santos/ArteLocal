import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

const Produto = sequelize.define('Produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true
  },
  disp: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'Produtos',
  timestamps: false
});

export default Produto;
