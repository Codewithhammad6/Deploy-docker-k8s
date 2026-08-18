import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {
try {
  // Configure mongoose for better connection handling
  mongoose.set('bufferCommands', true);
  mongoose.set('bufferTimeoutMS', 10000);
  
  const conn = await mongoose.connect(process.env.MONGO_URL, {
    maxPoolSize: 10, // Maintain up to 10 socket connections
    minPoolSize: 2, // Maintain at least 2 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
    retryWrites: true, // Retry failed writes once
    retryReads: true, // Retry failed reads once
    w: 'majority', // Write concern
  });
  
  console.log(`MongoDB connected: ${conn.connection.host}`);
  console.log(`MongoDB Database: ${conn.connection.name}`);
  
  // Handle connection events
  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected. Attempting to reconnect...');
  });
  
  mongoose.connection.on('reconnected', () => {
    console.log('MongoDB reconnected');
  });
  
  return conn;
  
} catch (error) {
    console.error('MongoDB connection error:', error.message);
    // Retry connection after 5 seconds
    setTimeout(() => {
      console.log('Retrying MongoDB connection...');
      connectDB();
    }, 5000);
}
}

export default connectDB;
