import express from 'express';
import {
  addTestResult,
  getTestResultsByClass,
  getStudentTestResults,
  updateTestResult,
  deleteTestResult,
  getClassReport,
  addBulkTestResults
} from '../controllers/testResultController.js';
import { authenticateUser } from "../middleware/auth.js";

const router = express.Router();

// Test Results routes
router.post('/add',authenticateUser, addTestResult);
router.get('/by-class', getTestResultsByClass);
router.get('/class-report', getClassReport);
router.get('/student/:studentId', getStudentTestResults);
router.put('/:resultId',authenticateUser, updateTestResult);
router.delete('/:resultId',authenticateUser, deleteTestResult);
router.post('/bulk-add', authenticateUser, addBulkTestResults);
export default router;