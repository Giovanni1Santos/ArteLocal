import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import pg from 'pg';


dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectModule: pg,
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, 
    },
  },
  pool: {
    max: 2,
    min: 0,
    acquire: 3000,
    idle: 0,
    evict: 8000
  }
});

export default sequelize;