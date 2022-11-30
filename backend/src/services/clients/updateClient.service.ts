import AppError from '../../errors/AppError';
import { IUpdateClient } from '../../interfaces/clients';
import { clientRepository, userRepository } from '../repositories';

const updateClientService = async (
  data: IUpdateClient,
  clientId: string,
  userId: string
) => {
  const client = await clientRepository.findOne({
    where: { id: clientId },
    relations: { user: true },
  });
  const user = await userRepository.findOne({ where: { id: userId } });

  if (!client || !user) {
    throw new AppError(
      'User or client not found, check client id or if your token expired',
      404
    );
  }

  if (typeof data !== 'object') {
    throw new AppError('Request format is not an object', 400);
  }

  if (client.user.id !== user.id) {
    throw new AppError('Requester did not register given client', 401);
  }

  await clientRepository.update(clientId, { ...client, ...data });

  return true;
};

export default updateClientService;
