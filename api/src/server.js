const app = require('./app');
const sequelize = require('./config/database');

const PORT = process.env.PORT || 3001;

sequelize.sync().then(() => {
  console.log('Banco sincronizado');
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});
