import { Router } from 'express';
import {
  createClientController,
  deleteClientController,
  listUserClientsController,
  updateClientController,
} from '../controllers/clients';
import clientCreationDataEnforcementMiddleware from '../middlewares/clientCreationDataEnforcement.middleware';
import clientUpdateDataEnforcementMiddleware from '../middlewares/clientUpdateDataEnforcement.middleware';
import tokenVerifierMiddleware from '../middlewares/tokenVerifier.middleware';

const routes = Router();

export const clientRoutes = () => {
  routes.post(
    '',
    tokenVerifierMiddleware,
    clientCreationDataEnforcementMiddleware,
    createClientController
  );
  routes.patch(
    '/edit/:clientId',
    tokenVerifierMiddleware,
    clientUpdateDataEnforcementMiddleware,
    updateClientController
  );
  routes.get('/list', tokenVerifierMiddleware, listUserClientsController);
  routes.delete(
    '/delete/:clientId',
    tokenVerifierMiddleware,
    deleteClientController
  );

  return routes;
};
