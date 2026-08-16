import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import ErrorHandler from "./error.js";
import { catchAsyncError } from "./catchAsyncError.js";

export const authenticateUser = catchAsyncError(async (req, res, next) => {
  let token = req.cookies.tokenSchool;

  if (!token && req.headers.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorHandler("Please login to access this resource", 401));
  }

  try {
    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decodedData.id);
    
    if (!req.user) {
      return next(new ErrorHandler("User not found", 404));
    }
    
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return next(new ErrorHandler("Session expired, please login again", 401));
    }
    if (error.name === 'JsonWebTokenError') {
      return next(new ErrorHandler("Invalid token, please login again", 401));
    }
    return next(new ErrorHandler("Authentication failed", 401));
  }
});