import { ArrayContains } from 'typeorm';
import AppDataSource from '../data-source';
import { Client } from '../entities/client.entity';
import { User } from '../entities/user.entity';
import AppError from '../errors/AppError';
import { clientRepository, userRepository } from '../services/repositories';

export const emailChecker = async (array: string[]) => {
  for (const email of array) {
    if (!email.includes('@')) {
      throw new AppError(`Given email is not a proper email: ${email}`);
    }

    const emailExistsUsers = await userRepository.findBy({
      emails: ArrayContains([email]),
    });

    const emailExistsClients = await clientRepository.findBy({
      emails: ArrayContains([email]),
    });

    if (emailExistsUsers.length > 0 || emailExistsClients.length > 0) {
      throw new AppError(`Given email is already registered: ${email}`, 409);
    }
  }
};

export const updateEmailChecker = async (
  type: string,
  array: string[],
  entity: User | Client
) => {
  if (type === 'user') {
    for (const email of array) {
      if (!email.includes('@')) {
        throw new AppError(`Given email is not a proper email: ${email}`);
      }

      const emailBeingUsedUsers = await userRepository.findBy({
        emails: ArrayContains([email]),
      });

      if (emailBeingUsedUsers.length > 0) {
        if (entity!.id === emailBeingUsedUsers[0].id) {
          continue;
        } else {
          throw new AppError(
            `Given email is already registered: ${email}`,
            409
          );
        }
      }

      const emailBeingUsedClients = await clientRepository.findBy({
        emails: ArrayContains([email]),
      });

      if (emailBeingUsedClients.length > 0) {
        throw new AppError(`Given email is already registered: ${email}`, 409);
      }
    }
  } else {
    for (const email of array) {
      if (!email.includes('@')) {
        throw new AppError(`Given email is not a proper email: ${email}`);
      }

      const emailBeingUsedUsers = await userRepository.findBy({
        emails: ArrayContains([email]),
      });

      if (emailBeingUsedUsers.length > 0) {
        throw new AppError(`Given email is already registered: ${email}`, 409);
      }

      const emailBeingUsedClients = await clientRepository.findBy({
        emails: ArrayContains([email]),
      });

      if (emailBeingUsedClients.length > 0) {
        if (entity!.id === emailBeingUsedClients[0].id) {
          continue;
        } else {
          throw new AppError(
            `Given email is already registered: ${email}`,
            409
          );
        }
      }
    }
  }
};

export const clearEverythingQueryBuilder = async () => {
  await AppDataSource.createQueryBuilder().delete().from(Client).execute();

  await AppDataSource.createQueryBuilder().delete().from(User).execute();
};
