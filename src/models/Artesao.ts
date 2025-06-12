import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

const Artesao = sequelize.define('Artesao', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dtNascimento: {
        type: DataTypes.DATE,
        allowNull: true
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Artesao',
    timestamps: false
});

export default Artesao;
