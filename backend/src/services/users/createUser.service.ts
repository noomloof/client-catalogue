import { User } from '../../entities/user.entity';
import { INewUser } from '../../interfaces/users';
import * as bcrypt from 'bcryptjs';
import { userRepository } from '../repositories';

const createUserService = async ({
  name,
  emails,
  password,
  phones,
}: INewUser) => {
  const newUser = new User();
  newUser.name = name;
  newUser.emails = emails;
  newUser.phones = phones;
  newUser.password = bcrypt.hashSync(password, 10);

  userRepository.create(newUser);
  await userRepository.save(newUser);

  return newUser;
};

export default createUserService;
