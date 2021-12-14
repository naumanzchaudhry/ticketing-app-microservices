import { CustomBaseError } from './error-interface';

export class DatabaseConnectionError extends Error implements CustomBaseError {
  statusCode = 400;
  reason = 'Error connecting to database';
  constructor() {
    super();
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
