import AppDataSource from '../data-source';
import { Client } from '../entities/client.entity';
import { User } from '../entities/user.entity';

export const userRepository = AppDataSource.getRepository(User);
export const clientRepository = AppDataSource.getRepository(Client);
