import Attendance from '../models/AttendanceModel.js';
import Student from '../models/studentModel.js';
import { validationResult } from 'express-validator';
import { catchAsyncError } from '../middleware/catchAsyncError.js';
import ErrorHandler from '../middleware/error.js';



export const markBulkAttendance = catchAsyncError(async (req, res, next) => {
  const { attendanceData, date, class: className, section } = req.body;

  if (!Array.isArray(attendanceData) || attendanceData.length === 0) {
    return next(new ErrorHandler('Please provide attendance data', 400));
  }

  const students = await Student.find({
    _id: { $in: attendanceData.map(a => a.studentId) },
    class: className,
    section: section
  });

  if (students.length !== attendanceData.length) {
    return next(new ErrorHandler('Invalid student data provided', 400));
  }

  const results = [];
  const errors = [];

  for (const data of attendanceData) {
    try {
      const existingAttendance = await Attendance.findOne({
        student: data.studentId,
        date: new Date(date)
      });

      if (existingAttendance) {
        // Update existing
        existingAttendance.status = data.status;
        existingAttendance.remarks = data.remarks || existingAttendance.remarks;
        existingAttendance.teacher = req.user._id;
        await existingAttendance.save();
        results.push(existingAttendance);
      } else {
        // Create new
        const student = students.find(s => s._id.toString() === data.studentId);
        const newAttendance = await Attendance.create({
          student: data.studentId,
          teacher: req.user._id,
          date: new Date(date),
          status: data.status,
          class: className,
          section: section,
          remarks: data.remarks
        });
        results.push(newAttendance);
      }
    } catch (error) {
      errors.push({ studentId: data.studentId, error: error.message });
    }
  }

  res.status(200).json({
    success: true,
    message: `Attendance processed for ${results.length} students${errors.length > 0 ? `, ${errors.length} failed` : ''}`,
    count: results.length,
    errors: errors.length > 0 ? errors : undefined,
    attendance: results
  });
});


// access  Private (Teacher only)
export const getStudentAttendance = catchAsyncError(async (req, res, next) => {
  const { studentId } = req.params;
  const { month, year } = req.query;

  let query = { student: studentId };
  
  // Filter by month/year if provided
  if (month && year) {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0, 23, 59, 59);
    query.date = { $gte: startDate, $lte: endDate };
  }

  const attendance = await Attendance.find(query)
    .sort({ date: -1 })
    .populate('student', 'fullName rollNumber');

  // Calculate statistics
  const stats = {
    total: attendance.length,
    present: attendance.filter(a => a.status === 'present').length,
    absent: attendance.filter(a => a.status === 'absent').length,
    late: attendance.filter(a => a.status === 'late').length,
    halfDay: attendance.filter(a => a.status === 'half-day').length,
    holiday: attendance.filter(a => a.status === 'holiday').length,
    percentage: attendance.length > 0 
      ? ((attendance.filter(a => a.status === 'present' || a.status === 'late').length / attendance.length) * 100).toFixed(2)
      : 0
  };

  res.status(200).json({
    success: true,
    stats,
    attendance
  });
});


// access  Private (Teacher only)
export const getAttendanceStats = catchAsyncError(async (req, res, next) => {
  const { class: className, section, month, year } = req.query;

  if (!className || !section || !month || !year) {
    return next(new ErrorHandler('Class, section, month and year are required', 400));
  }

  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0, 23, 59, 59);

  const stats = await Attendance.aggregate([
    {
      $match: {
        class: className,
        section: section,
        date: { $gte: startDate, $lte: endDate }
      }
    },
    {
      $group: {
        _id: '$status',
        count: { $sum: 1 },
        students: { $addToSet: '$student' }
      }
    },
    {
      $group: {
        _id: null,
        statuses: {
          $push: {
            status: '$_id',
            count: '$count',
            uniqueStudents: { $size: '$students' }
          }
        },
        totalRecords: { $sum: '$count' },
        totalStudents: { $max: { $size: '$students' } }
      }
    }
  ]);

  res.status(200).json({
    success: true,
    stats: stats[0] || { statuses: [], totalRecords: 0, totalStudents: 0 }
  });
});




export const markAttendance = catchAsyncError(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new ErrorHandler(errors.array()[0].msg, 400));
  }

  const { studentId, date, status, remarks } = req.body;

  const student = await Student.findById(studentId);
  if (!student) {
    return next(new ErrorHandler('Student not found', 404));
  }

  const existingAttendance = await Attendance.findOne({
    student: studentId,
    date: new Date(date)
  });

  if (existingAttendance) {
    existingAttendance.status = status;
    existingAttendance.remarks = remarks || existingAttendance.remarks;
    existingAttendance.teacher = req.user._id; // Last editor track karne ke liye
    await existingAttendance.save();

    return res.status(200).json({
      success: true,
      message: 'Attendance updated successfully',
      attendance: existingAttendance
    });
  }

  // Create new attendance record
  const attendance = await Attendance.create({
    student: studentId,
    teacher: req.user._id, // Kisne banaya track karne ke liye
    date: new Date(date),
    status,
    class: student.class,
    section: student.section,
    remarks
  });

  res.status(201).json({
    success: true,
    message: 'Attendance marked successfully',
    attendance
  });
});


export const getAttendanceByDate = catchAsyncError(async (req, res, next) => {
  const { date, class: className, section } = req.query;

  if (!date || !className || !section) {
    return next(new ErrorHandler('Date, class and section are required', 400));
  }

  const startDate = new Date(date);
  startDate.setHours(0, 0, 0, 0);
  
  const endDate = new Date(date);
  endDate.setHours(23, 59, 59, 999);

  const attendance = await Attendance.find({
    date: { $gte: startDate, $lte: endDate },
    class: className,
    section: section
  }).populate('student', 'fullName rollNumber fatherName');

  res.status(200).json({
    success: true,
    count: attendance.length,
    attendance
  });
});


export const getAllAttendanceByClass = catchAsyncError(async (req, res, next) => {
  const { class: className, section } = req.query;

  if (!className || !section) {
    return next(new ErrorHandler('Class and section are required', 400));
  }

  const attendance = await Attendance.find({
    class: className,
    section: section
  })
  .populate('student', 'fullName rollNumber fatherName')
  .sort({ date: -1 });

  const studentStats = {};
  
  attendance.forEach(record => {
    const studentId = record.student._id.toString();
    if (!studentStats[studentId]) {
      studentStats[studentId] = {
        total: 0,
        present: 0,
        absent: 0,
        late: 0,
        halfDay: 0,
        holiday: 0
      };
    }
    
    studentStats[studentId].total++;
    studentStats[studentId][record.status]++;
  });

  Object.keys(studentStats).forEach(studentId => {
    const stats = studentStats[studentId];
    stats.percentage = stats.total > 0 
      ? Math.round(((stats.present + stats.late) / stats.total) * 100)
      : 0;
  });

  res.status(200).json({
    success: true,
    count: attendance.length,
    attendance,
    studentStats
  });
});

export const updateAttendance = catchAsyncError(async (req, res, next) => {
  const { attendanceId } = req.params;
  const { status, remarks } = req.body;

  const attendance = await Attendance.findById(attendanceId);

  if (!attendance) {
    return next(new ErrorHandler('Attendance record not found', 404));
  }


  attendance.status = status || attendance.status;
  attendance.remarks = remarks || attendance.remarks;
  attendance.teacher = req.user._id; // Last editor update karo
  await attendance.save();

  res.status(200).json({
    success: true,
    message: 'Attendance updated successfully',
    attendance
  });
});


export const deleteAttendance = catchAsyncError(async (req, res, next) => {
  const { attendanceId } = req.params;

  const attendance = await Attendance.findById(attendanceId);

  if (!attendance) {
    return next(new ErrorHandler('Attendance record not found', 404));
  }


  await attendance.deleteOne();

  res.status(200).json({
    success: true,
    message: 'Attendance record deleted successfully'
  });
});