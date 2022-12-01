import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import handleErrorMiddleware from './middlewares/handleError.middleware';
import { appRoutes } from './routes';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
app.use(cookieParser());
const corsOptions = {
  origin: true,
  credentials: true,
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
};

app.use(cors(corsOptions));
app.use(express.json());
appRoutes(app);

app.use(handleErrorMiddleware);

export default app;
