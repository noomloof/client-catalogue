import AppError from '../../errors/AppError';
import { clientRepository, userRepository } from '../repositories';

const deleteClientService = async (clientId: string, userId: string) => {
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

  if (client.user.id !== user.id) {
    throw new AppError('Requester did not register given client', 401);
  }

  await clientRepository.delete(clientId);

  return true;
};

export default deleteClientService;
