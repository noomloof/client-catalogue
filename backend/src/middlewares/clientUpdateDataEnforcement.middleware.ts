import { NextFunction, Request, Response } from 'express';
import { clientRepository, userRepository } from '../services/repositories';
import { updateEmailChecker } from '../utils';

const clientUpdateDataEnforcementMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const { clientId } = req.params;

  const client = await clientRepository.findOne({ where: { id: clientId } });

  if (data.emails) {
    data.emails = data.emails.replaceAll(/\s/g, '').split(',');

    await updateEmailChecker('client', data.emails, client!);
  }

  if (data.phones) {
    data.phones = data.phones.replaceAll(/\s/g, '').split(',');
  }

  next();
};

export default clientUpdateDataEnforcementMiddleware;
