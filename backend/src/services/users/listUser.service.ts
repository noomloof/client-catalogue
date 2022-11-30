import AppError from '../../errors/AppError';
import { userRepository } from '../repositories';

const listUserService = async (id: string) => {
  const user = await userRepository.findOne({ where: { id } });

  if (!user) {
    throw new AppError('User not found, token may be invalid', 404);
  }

  return user;
};

export default listUserService;
