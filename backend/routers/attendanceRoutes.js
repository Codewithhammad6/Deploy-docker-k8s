import express from 'express';
import {
  markAttendance,
  markBulkAttendance,
  getAttendanceByDate,
  getStudentAttendance,
  updateAttendance,
  deleteAttendance,
  getAttendanceStats,
  getAllAttendanceByClass
} from '../controllers/attendanceController.js';
import { authenticateUser } from "../middleware/auth.js";
const router = express.Router();


// Attendance routes
router.post('/mark',authenticateUser, markAttendance);
router.post('/bulk-mark',authenticateUser, markBulkAttendance);
router.get('/by-date', getAttendanceByDate);
router.get('/stats', getAttendanceStats);
router.get('/student/:studentId', getStudentAttendance);
router.put('/:attendanceId',authenticateUser, updateAttendance);
router.delete('/:attendanceId',authenticateUser, deleteAttendance);
router.get('/class/all', getAllAttendanceByClass);
export default router;