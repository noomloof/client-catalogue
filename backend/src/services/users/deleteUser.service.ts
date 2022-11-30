import AppError from '../../errors/AppError';
import { userRepository } from '../repositories';

const deleteUserService = async (id: string) => {
  const user = await userRepository.findOne({ where: { id } });

  if (!user) {
    throw new AppError('User not found', 404);
  }

  await userRepository.delete(id);

  return true;
};

export default deleteUserService;
