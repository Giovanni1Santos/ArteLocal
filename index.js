import express from 'express'
import router from './src/routes/routes.js'

import sequelize from './src/database/db.js';
import User from './src/models/User.js';
import Contato from './src/models/Contato.js';
import RelationTables from './src/models/RelationTables.js';
import cors from 'cors';


(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado com sucesso ao PostgreSQL da Vercel/Neon!');

    await sequelize.sync();
    console.log('Modelos sincronizados.');

  } catch (error) {
    console.error('Erro na conexão com o banco: ', error);
  }
})();

const app = express();


app.use(cors());
app.use(express.json());
app.use(router);

app.listen(8080);