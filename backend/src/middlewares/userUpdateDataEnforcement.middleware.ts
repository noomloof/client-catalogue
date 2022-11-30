import { NextFunction, Request, Response } from 'express';
import { clientRepository, userRepository } from '../services/repositories';
import { updateEmailChecker } from '../utils';

const userUpdateDataEnforcementMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;

  const user = await userRepository.findOne({ where: { id: req.user.userId } });

  if (data.emails) {
    data.emails = data.emails.replaceAll(/\s/g, '').split(',');

    await updateEmailChecker('user', data.emails, user!);
  }

  if (data.phones) {
    data.phones = data.phones.replaceAll(/\s/g, '').split(',');
  }

  next();
};

export default userUpdateDataEnforcementMiddleware;
