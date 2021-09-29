import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import sequelize from './db.js';
import cors from 'cors';
import models from './models/models.js';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

const startApp = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server enabled on ${PORT} port.`);
    });
  } catch (e) {
    console.log(e);
  }
};

startApp();
