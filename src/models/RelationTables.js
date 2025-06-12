import User from './User.js';
import Contato from './Contato.js';
import Produto from './Produto.js';
import Artesao from './Artesao.js';

const RelationTables = () => {
  User.hasMany(Contato, {
    foreignKey: 'userId',
    as: 'contatos',
  });

  Contato.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user',
  });

  User.hasMany(Produto, {
    foreignKey: 'userId',
    as: 'produto',
  });

  Produto.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user',
  });
};

export default RelationTables;