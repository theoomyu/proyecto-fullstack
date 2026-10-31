import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

import { app } from './app';
import { connectMongo } from './config/mongo';

const PORT = Number(process.env.PORT) || 3000;

const startServer = async () => {
  await connectMongo();
  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto: ${PORT}`);
  });
};

startServer();