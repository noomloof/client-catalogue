import { NextFunction, Request, Response } from 'express';
import jwt, { decode } from 'jsonwebtoken';
import AppError from '../errors/AppError';

const tokenVerifierMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;
  if (!token) {
    if (!req.cookies.token) {
      throw new AppError('Token is either expired or invalid', 401);
    }
  }

  if (!req.cookies.token) {
    token = token!.split(' ')[1];
  }

  jwt.verify(
    req.cookies.token || token,
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
        throw new AppError('Token is either expired or invalid', 401);
      }

      req.user = {
        userId: decoded.userId,
      };

      next();
    }
  );
};

export default tokenVerifierMiddleware;
