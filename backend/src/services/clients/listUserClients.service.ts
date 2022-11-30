import AppError from '../../errors/AppError';
import { userRepository } from '../repositories';

const listUserClientsService = async (id: string) => {
  const user = await userRepository.findOne({
    where: { id },
    relations: { clients: true },
    select: { clients: true },
  });

  if (!user) {
    throw new AppError('User not found, token may be invalid', 404);
  }

  const clients = user.clients;

  return clients;
};

export default listUserClientsService;
