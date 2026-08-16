class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.message = message; // Explicitly save message
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorMiddleware = (err, req, res, next) => {
  if (err instanceof ErrorHandler) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message
    });
  }

  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error.";

  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  if (err.name === "JsonWebTokenError") {
    const message = "Invalid token. Please login again.";
    err = new ErrorHandler(message, 401);
  }

  if (err.name === "TokenExpiredError") {
    const message = "Token expired. Please login again.";
    err = new ErrorHandler(message, 401);
  }

  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  return res.status(err.statusCode).json({
    success: false,
    message: err.message
  });
};

export default ErrorHandler;
