import { Request, Response, NextFunction } from 'express';
import { CustomBaseError } from '../errors/error-interface';

export const errorHandler = (
  err: CustomBaseError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).send({ errors: err.serializeErrors() });
};
