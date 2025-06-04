import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();

const db = new Sequelize(process.env.DB_URL!, {
  models: [__dirname + "/../models/**/*.ts"],
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // para Render, normalmente esto es necesario
    },
  },
});

export default db;