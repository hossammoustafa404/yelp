const { StatusCodes } = require("http-status-codes");
const config = require("../config/config");

const sendDevError = (err, res) =>
  res.status(err.status).json({
    statusText: err.statusText,
    message: err.message,
    stack: err.stack,
    error: err,
  });

const sendProdError = (err, res) => {
  return res.status(err.status).json({
    statusText: err.statusText,
    message: err.message,
  });
};
const errorHandler = (err, req, res, next) => {
  err.message = err.message || "Something went wrong";
  err.status = err.status || StatusCodes.INTERNAL_SERVER_ERROR;
  err.statusText = err.statusText || "Error";
  err.stack = err.stack;

  if (config.app.env === "development") {
    sendDevError(err, res);
  } else if (config.app.env === "production") {
    sendProdError(err, res);
  }
};

module.exports = errorHandler;
