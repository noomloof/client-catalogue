import { IUserUpdate } from '../../interfaces/users';
import { userRepository } from '../repositories';
import AppError from '../../errors/AppError';
import * as bcrypt from 'bcryptjs';

const updateUserService = async (data: IUserUpdate, id: string) => {
  const user = await userRepository.findOne({ where: { id } });

  if (!user) {
    throw new AppError('User not found, token may be invalid', 404);
  }

  if (typeof data !== 'object') {
    throw new AppError('Request format is not an object', 400);
  }

  if (data.password) {
    data.password = bcrypt.hashSync(data.password, 10);
  }

  await userRepository.update(id, { ...user, ...data });

  return true;
};

export default updateUserService;
