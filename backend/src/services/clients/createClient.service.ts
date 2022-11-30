import { INewClient } from '../../interfaces/clients';
import { Client } from '../../entities/client.entity';
import { clientRepository, userRepository } from '../repositories';
import AppError from '../../errors/AppError';

const createClientService = async (
  { name, emails, phones }: INewClient,
  id: string
) => {
  const user = await userRepository.findOne({
    where: { id },
    select: { id: true, name: true },
  });

  if (!user) {
    throw new AppError('User not found, token may be invalid', 404);
  }

  const newClient = new Client();
  newClient.name = name;
  newClient.emails = emails;
  newClient.phones = phones;
  newClient.user = user!;

  clientRepository.create(newClient);
  await clientRepository.save(newClient);

  return newClient;
};

export default createClientService;
