import { Router } from 'express';
import {
  deleteUserCookieController,
  loginUserController,
} from '../controllers/users';
import tokenVerifierMiddleware from '../middlewares/tokenVerifier.middleware';

const routes = Router();

export const loginRoutes = () => {
  routes.post('', loginUserController);
  routes.get('', tokenVerifierMiddleware, deleteUserCookieController);

  return routes;
};
