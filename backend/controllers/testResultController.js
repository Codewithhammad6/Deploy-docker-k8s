import TestResult from '../models/TestResultModel.js';
import Student from '../models/studentModel.js';
import { validationResult } from 'express-validator';
import { catchAsyncError } from '../middleware/catchAsyncError.js';
import ErrorHandler from '../middleware/error.js';


export const addTestResult = catchAsyncError(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new ErrorHandler(errors.array()[0].msg, 400));
  }

  const { studentId, subject, testName, totalMarks, obtainedMarks, testDate, remarks } = req.body;

  // Check if student exists
  const student = await Student.findById(studentId);
  if (!student) {
    return next(new ErrorHandler('Student not found', 404));
  }

  const percentage = (obtainedMarks / totalMarks) * 100;
  
  let grade;
  if (percentage >= 90) grade = 'A+';
  else if (percentage >= 80) grade = 'A';
  else if (percentage >= 70) grade = 'B+';
  else if (percentage >= 60) grade = 'B';
  else if (percentage >= 50) grade = 'C+';
  else if (percentage >= 40) grade = 'C';
  else if (percentage >= 33) grade = 'D';
  else grade = 'F';

  const existingResult = await TestResult.findOne({
    student: studentId,
    subject,
    testName,
    testDate: new Date(testDate)
  });

  if (existingResult) {
    // Update existing result
    existingResult.totalMarks = totalMarks;
    existingResult.obtainedMarks = obtainedMarks;
    existingResult.percentage = percentage;
    existingResult.grade = grade;
    existingResult.remarks = remarks || existingResult.remarks;
    existingResult.teacher = req.user._id;
    await existingResult.save();

    return res.status(200).json({
      success: true,
      message: 'Test result updated successfully',
      testResult: existingResult
    });
  }

  const testResult = await TestResult.create({
    student: studentId,
    teacher: req.user._id,
    subject,
    testName,
    totalMarks,
    obtainedMarks,
    percentage,
    grade,
    testDate: new Date(testDate),
    class: student.class,
    section: student.section,
    remarks
  });

  res.status(201).json({
    success: true,
    message: 'Test result added successfully',
    testResult
  });
});





export const addBulkTestResults = catchAsyncError(async (req, res, next) => {
  const { testData, class: className, section } = req.body;

  if (!Array.isArray(testData) || testData.length === 0) {
    return next(new ErrorHandler('Please provide test data', 400));
  }

  const students = await Student.find({
    _id: { $in: testData.map(d => d.studentId) },
    class: className,
    section: section
  });

  if (students.length !== testData.length) {
    return next(new ErrorHandler('Invalid student data provided', 400));
  }

  const results = [];
  const errors = [];

  for (const data of testData) {
    try {
      const student = students.find(s => s._id.toString() === data.studentId);
      
      const percentage = (data.obtainedMarks / data.totalMarks) * 100;
      
      let grade;
      if (percentage >= 90) grade = 'A+';
      else if (percentage >= 80) grade = 'A';
      else if (percentage >= 70) grade = 'B+';
      else if (percentage >= 60) grade = 'B';
      else if (percentage >= 50) grade = 'C+';
      else if (percentage >= 40) grade = 'C';
      else if (percentage >= 33) grade = 'D';
      else grade = 'F';
      
      const existingResult = await TestResult.findOne({
        student: data.studentId,
        subject: data.subject,
        testName: data.testName,
        testDate: new Date(data.testDate)
      });

      if (existingResult) {
        // Update existing
        existingResult.totalMarks = data.totalMarks;
        existingResult.obtainedMarks = data.obtainedMarks;
        existingResult.percentage = percentage;
        existingResult.grade = grade;
        existingResult.remarks = data.remarks || existingResult.remarks;
        existingResult.teacher = req.user._id;
        await existingResult.save();
        results.push(existingResult);
      } else {
        // Create new
        const newResult = await TestResult.create({
          student: data.studentId,
          teacher: req.user._id,
          subject: data.subject,
          testName: data.testName,
          totalMarks: data.totalMarks,
          obtainedMarks: data.obtainedMarks,
          percentage,
          grade,
          testDate: new Date(data.testDate),
          class: className,
          section: section,
          remarks: data.remarks
        });
        results.push(newResult);
      }
    } catch (error) {
      errors.push({ studentId: data.studentId, error: error.message });
    }
  }

  res.status(200).json({
    success: true,
    message: `Processed ${results.length} test results${errors.length > 0 ? `, ${errors.length} failed` : ''}`,
    count: results.length,
    errors: errors.length > 0 ? errors : undefined,
    results
  });
});


export const updateTestResult = catchAsyncError(async (req, res, next) => {
  const { resultId } = req.params;
  const { totalMarks, obtainedMarks, remarks } = req.body;

  const testResult = await TestResult.findById(resultId);

  if (!testResult) {
    return next(new ErrorHandler('Test result not found', 404));
  }

  if (testResult.teacher.toString() !== req.user._id.toString()) {
    return next(new ErrorHandler('You are not authorized to update this result', 403));
  }

  // Update fields
  if (totalMarks) testResult.totalMarks = totalMarks;
  if (obtainedMarks) testResult.obtainedMarks = obtainedMarks;
  if (remarks) testResult.remarks = remarks;

  testResult.percentage = (testResult.obtainedMarks / testResult.totalMarks) * 100;
  
  if (testResult.percentage >= 90) testResult.grade = 'A+';
  else if (testResult.percentage >= 80) testResult.grade = 'A';
  else if (testResult.percentage >= 70) testResult.grade = 'B+';
  else if (testResult.percentage >= 60) testResult.grade = 'B';
  else if (testResult.percentage >= 50) testResult.grade = 'C+';
  else if (testResult.percentage >= 40) testResult.grade = 'C';
  else if (testResult.percentage >= 33) testResult.grade = 'D';
  else testResult.grade = 'F';
  
  await testResult.save();

  res.status(200).json({
    success: true,
    message: 'Test result updated successfully',
    testResult
  });
});





export const getTestResultsByClass = catchAsyncError(async (req, res, next) => {
  const { class: className, section, subject, testName } = req.query;

  if (!className || !section) {
    return next(new ErrorHandler('Class and section are required', 400));
  }

  const query = {
    class: className,
    section: section
  };

  if (subject) query.subject = subject;
  if (testName) query.testName = testName;

  const results = await TestResult.find(query)
    .populate('student', 'fullName rollNumber fatherName')
    .sort({ testDate: -1, 'student.rollNumber': 1 });

  res.status(200).json({
    success: true,
    count: results.length,
    results
  });
});
export const getStudentTestResults = catchAsyncError(async (req, res, next) => {
  const { studentId } = req.params;

  const results = await TestResult.find({ student: studentId })
    .sort({ testDate: -1 });

  // Calculate statistics
  const stats = {
    totalTests: results.length,
    averagePercentage: results.length > 0 
      ? (results.reduce((sum, r) => sum + r.percentage, 0) / results.length).toFixed(2)
      : 0,
    highestScore: results.length > 0 
      ? Math.max(...results.map(r => r.percentage))
      : 0,
    lowestScore: results.length > 0 
      ? Math.min(...results.map(r => r.percentage))
      : 0,
    subjectWise: {}
  };

  results.forEach(result => {
    if (!stats.subjectWise[result.subject]) {
      stats.subjectWise[result.subject] = {
        count: 0,
        totalPercentage: 0,
        average: 0
      };
    }
    stats.subjectWise[result.subject].count++;
    stats.subjectWise[result.subject].totalPercentage += result.percentage;
  });

  Object.keys(stats.subjectWise).forEach(subject => {
    stats.subjectWise[subject].average = 
      (stats.subjectWise[subject].totalPercentage / stats.subjectWise[subject].count).toFixed(2);
  });

  res.status(200).json({
    success: true,
    stats,
    results
  });
});

export const deleteTestResult = catchAsyncError(async (req, res, next) => {
  const { resultId } = req.params;

  const testResult = await TestResult.findById(resultId);

  if (!testResult) {
    return next(new ErrorHandler('Test result not found', 404));
  }

  // Check if this teacher created this result
  if (testResult.teacher.toString() !== req.user._id.toString()) {
    return next(new ErrorHandler('You are not authorized to delete this result', 403));
  }

  // Check if test is from more than 7 days ago (optional restriction)
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  
  if (testResult.testDate < sevenDaysAgo) {
    return next(new ErrorHandler('Cannot delete test results older than 7 days', 400));
  }

  await testResult.deleteOne();

  res.status(200).json({
    success: true,
    message: 'Test result deleted successfully'
  });
});

export const getClassReport = catchAsyncError(async (req, res, next) => {
  const { class: className, section } = req.query;

  if (!className || !section) {
    return next(new ErrorHandler('Class and section are required', 400));
  }

  const report = await TestResult.aggregate([
    {
      $match: {
        class: className,
        section: section
      }
    },
    {
      $group: {
        _id: {
          student: '$student',
          subject: '$subject'
        },
        averagePercentage: { $avg: '$percentage' },
        testsCount: { $sum: 1 },
        highestMarks: { $max: '$obtainedMarks' }
      }
    },
    {
      $group: {
        _id: '$_id.student',
        subjects: {
          $push: {
            subject: '$_id.subject',
            average: '$averagePercentage',
            testsCount: '$testsCount',
            highest: '$highestMarks'
          }
        },
        overallAverage: { $avg: '$averagePercentage' },
        totalTests: { $sum: '$testsCount' }
      }
    },
    {
      $lookup: {
        from: 'students',
        localField: '_id',
        foreignField: '_id',
        as: 'studentInfo'
      }
    },
    {
      $sort: { overallAverage: -1 }
    }
  ]);

  const classAverage = report.length > 0
    ? (report.reduce((sum, r) => sum + r.overallAverage, 0) / report.length).toFixed(2)
    : 0;

  res.status(200).json({
    success: true,
    classAverage,
    totalStudents: report.length,
    report
  });
});