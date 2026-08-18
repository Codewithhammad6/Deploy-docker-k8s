import express from 'express';
import cors from 'cors';
import connectDB from './database/dbConnection.js';
import cookieParser from "cookie-parser";
import userRouter from './routers/userRoute.js';
import studentRoutes from './routers/studentRoute.js';
import attendanceRoutes from './routers/attendanceRoutes.js';
import testRoutes from './routers/testResultRoutes.js';
import { errorMiddleware } from './middleware/error.js';
import {removeUnverifiedAccounts } from './automation/removeUnverifiedUsers.js';
import dotenv from 'dotenv';

dotenv.config();

export const app = express();

removeUnverifiedAccounts();
// Get origins from environment variables
const getOrigins = () => {
  const origins = [
    "http://localhost:5173",
    "http://localhost:5000", 
    "http://localhost:3000",
    "http://10.0.2.2:19000",
    "http://192.168.100.12:19000",
  ];

  // Add frontend URL from environment variable
  if (process.env.FRONTEND_URL) {
    const frontendUrl = process.env.FRONTEND_URL.trim();
    origins.push(frontendUrl);
    
    // Also add without trailing slash if present
    if (frontendUrl.endsWith('/')) {
      origins.push(frontendUrl.slice(0, -1));
    } else {
      origins.push(frontendUrl + '/');
    }
  }

  // Remove duplicates
  return [...new Set(origins)];
};

const allowedOrigins = getOrigins();

console.log('Allowed Origins:', allowedOrigins);




// Update your corsOptions in index.js
const corsOptions = {
  origin: function (origin, callback) {
    // Your existing origin logic
    if (!origin) return callback(null, true);
    
    const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL === '1';
    
    if (allowedOrigins.includes(origin) || 
        origin.includes('.vercel.app') || 
        origin.includes('localhost') ||
        (!isProduction && (origin.includes('localhost') || origin.includes('127.0.0.1')))) {
      return callback(null, true);
    }
    callback(new Error(`Not allowed by CORS`));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  exposedHeaders: ["set-cookie"],
  maxAge: 86400
};





app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK"
  });
});




// Apply CORS
app.use(cors(corsOptions));
// app.options('*', cors(corsOptions));

// Middlewares
app.use(cookieParser());
app.use(express.json());

// DB Connection
connectDB();

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'API is runnings...',
    frontendUrl: process.env.FRONTEND_URL || 'Not set',
    allowedOrigins: allowedOrigins,
    environment: process.env.NODE_ENV
  });
});


// API Routes
app.use('/api/user', userRouter);
app.use('/api/students', studentRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/test-results', testRoutes);

// Error handler
app.use(errorMiddleware);

// Export for Vercel
export default app;