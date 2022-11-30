import { Router } from 'express';
import {
  updateUserController,
  createUserController,
  listUserController,
  deleteUserController,
} from '../controllers/users';
import tokenVerifierMiddleware from '../middlewares/tokenVerifier.middleware';
import userCreationDataEnforcementMiddleware from '../middlewares/userCreationDataEnforcement';
import userUpdateDataEnforcementMiddleware from '../middlewares/userUpdateDataEnforcement.middleware';

const routes = Router();

export const userRoutes = () => {
  routes.post('', userCreationDataEnforcementMiddleware, createUserController);
  routes.get('/profile', tokenVerifierMiddleware, listUserController);
  routes.delete('/delete', tokenVerifierMiddleware, deleteUserController);
  routes.patch(
    '/edit',
    tokenVerifierMiddleware,
    userUpdateDataEnforcementMiddleware,
    updateUserController
  );

  return routes;
};
