interface CustomBaseError {
  statusCode: number;
  serializeErrors(): {
    message: string;
    field?: string;
  }[];
}

export { CustomBaseError };
