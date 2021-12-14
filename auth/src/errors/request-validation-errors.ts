import { ValidationError } from 'express-validator';
import { CustomBaseError } from './error-interface';

export class RequestValidationError extends Error implements CustomBaseError {
  statusCode = 400;
  constructor(public errors: ValidationError[]) {
    super();
    // Only bcz wer are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => {
      return {
        message: err.msg,
        field: err.param,
      };
    });
  }
}
