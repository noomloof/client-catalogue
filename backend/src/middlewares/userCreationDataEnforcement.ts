import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';
import { emailChecker } from '../utils';

const userCreationDataEnforcementMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;

  if (
    data.emails === undefined ||
    data.name === undefined ||
    data.password === undefined ||
    data.phones === undefined
  ) {
    throw new AppError('Missing data', 422);
  }

  data.emails = data.emails.replaceAll(/\s/g, '').split(',');

  data.phones = data.phones.replaceAll(/\s/g, '').split(',');

  await emailChecker(data.emails);

  next();
};

export default userCreationDataEnforcementMiddleware;
