import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { User } from '../../entities/user.entity';
import { INewUser, IUserLogin } from '../../interfaces/users';
import createUserService from '../../services/users/createUser.service';
import deleteUserService from '../../services/users/deleteUser.service';
import listUserService from '../../services/users/listUser.service';
import loginUserService from '../../services/users/loginUser.service';
import updateUserService from '../../services/users/updateUser.service';

const createUserController = async (req: Request, res: Response) => {
  const { name, emails, phones, password }: INewUser = req.body;

  const newUser: User = await createUserService({
    name,
    emails,
    password,
    phones,
  });

  return res.status(201).json(instanceToPlain(newUser));
};

const loginUserController = async (req: Request, res: Response) => {
  const { email, password }: IUserLogin = req.body;

  const token: string = await loginUserService({ email, password });

  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
    domain: '.local',
  });

  return res.status(200).json({ token: token });
};

const listUserController = async (req: Request, res: Response) => {
  const id = req.user.userId;

  const user: User = await listUserService(id);

  return res.status(200).json(instanceToPlain(user));
};

const updateUserController = async (req: Request, res: Response) => {
  const id = req.user.userId;
  const data = req.body;

  const update: boolean = await updateUserService(data, id);

  return res.status(204).json({ message: 'User updated successfully' });
};

const deleteUserController = async (req: Request, res: Response) => {
  const id = req.user.userId;

  const deleteUser: boolean = await deleteUserService(id);

  return res.status(204).json({ message: 'User deleted successfully' });
};

export {
  createUserController,
  loginUserController,
  listUserController,
  updateUserController,
  deleteUserController,
};
