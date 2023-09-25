const { StatusCodes } = require("http-status-codes");

// App Error
class AppError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    this.statusText = `${this.status}`.startsWith("4") ? "Fail" : "Error";

    Error.captureStackTrace(this, this.constructor);
  }
}

// Not Found Error
class NotFoundError extends AppError {
  constructor(message) {
    super(message, StatusCodes.NOT_FOUND);
  }
}

// Bad Request Error
class BadRequestError extends AppError {
  constructor(message) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}

module.exports = {
  AppError,
  NotFoundError,
  BadRequestError,
};
