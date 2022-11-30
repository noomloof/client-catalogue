import { Express } from 'express';
import { clientRoutes } from './clients.routes';
import { loginRoutes } from './login.routes';
import { userRoutes } from './user.routes';

export const appRoutes = (app: Express) => {
  app.use('/users', userRoutes());
  app.use('/login', loginRoutes());
  app.use('/clients', clientRoutes());
};
