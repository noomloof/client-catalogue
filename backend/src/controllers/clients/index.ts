import { instanceToInstance, instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { Client } from '../../entities/client.entity';
import createClientService from '../../services/clients/createClient.service';
import deleteClientService from '../../services/clients/deleteClient.service';
import listUserClientsService from '../../services/clients/listUserClients.service';
import updateClientService from '../../services/clients/updateClient.service';

const createClientController = async (req: Request, res: Response) => {
  const { name, emails, phones } = req.body;
  const userId = req.user.userId;

  const newClient: Client = await createClientService(
    { name, emails, phones },
    userId
  );

  return res.status(201).json(instanceToPlain(newClient));
};

const listUserClientsController = async (req: Request, res: Response) => {
  const userId = req.user.userId;

  const clients: Client[] = await listUserClientsService(userId);

  return res.status(200).json(clients);
};

const updateClientController = async (req: Request, res: Response) => {
  const { clientId } = req.params;
  const userId = req.user.userId;
  const data = req.body;

  const update: boolean = await updateClientService(data, clientId, userId);

  return res.status(204).json({ message: 'Client updated successfully' });
};

const deleteClientController = async (req: Request, res: Response) => {
  const { clientId } = req.params;
  const userId = req.user.userId;

  const deleteClient: boolean = await deleteClientService(clientId, userId);

  return res.status(204).json({ message: 'Client deleted successfully' });
};

export {
  createClientController,
  listUserClientsController,
  updateClientController,
  deleteClientController,
};
