import { Router } from 'express';
import { loginUserController } from '../controllers/users';

const routes = Router();

export const loginRoutes = () => {
  routes.post('', loginUserController);

  return routes;
};
