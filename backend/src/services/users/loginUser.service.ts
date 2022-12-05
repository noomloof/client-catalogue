import { ArrayContains } from 'typeorm';
import AppError from '../../errors/AppError';
import { IUserLogin } from '../../interfaces/users';
import { userRepository } from '../repositories';
import * as bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const loginUserService = async ({ email, password }: IUserLogin) => {
  if (!email || !password) {
    throw new AppError('Missing data', 422);
  }

  const user = await userRepository.findBy({
    emails: ArrayContains([email]),
  });

  if (user.length === 0) {
    throw new AppError('Invalid email or password', 403);
  }

  const passwordChecker = bcrypt.compareSync(password, user[0].password);

  if (!passwordChecker) {
    throw new AppError('Invalid email or password', 403);
  }

  const token = jwt.sign(
    {
      userId: user[0].id,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: '24h',
    }
  );

  return token;
};

export default loginUserService;
