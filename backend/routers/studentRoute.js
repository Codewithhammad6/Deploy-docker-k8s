import express from 'express';
import {
  addStudent,
  addBulkStudents,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  getStudentsByClass,
  searchStudents,
  getStudentStats,
  getMyStudents,
  updateStudentStatus,
  checkRollNumber
} from '../controllers/studentController.js';
import { authenticateUser } from "../middleware/auth.js";

const router = express.Router();


// Student routes
router.post('/add',authenticateUser, addStudent);
router.post('/bulk-add',authenticateUser, addBulkStudents);
router.get('/', getStudents);
router.get('/stats/summary', getStudentStats);
router.get('/my-students', getMyStudents);
router.get('/search', searchStudents);
router.get('/check-roll/:rollNumber', checkRollNumber);
router.get('/class/:className', getStudentsByClass);
router.get('/:id', getStudentById);
router.put('/:id',authenticateUser, updateStudent);
router.delete('/:id',authenticateUser, deleteStudent);
router.patch('/:id/status',authenticateUser, updateStudentStatus);

export default router;