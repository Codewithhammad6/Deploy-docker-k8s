import { catchAsyncError } from '../middleware/catchAsyncError.js';
import Student from '../models/studentModel.js';
import ErrorHandler from '../middleware/error.js';
import { validationResult } from 'express-validator';
import dotenv from 'dotenv';
dotenv.config();
export const addStudent = catchAsyncError(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new ErrorHandler(errors.array()[0].msg, 400));
  }

  const { fullName, rollNumber, class: className, section, fatherName, contactNumber, address } = req.body;

  const existingStudent = await Student.findOne({ 
    rollNumber: rollNumber.toUpperCase(),
    class: className,
    section: section
  });

  if (existingStudent) {
    return next(new ErrorHandler(`Student with roll number ${rollNumber} already exists in Class ${className} - ${section}`, 400));
  }

  const student = await Student.create({
    fullName,
    rollNumber: rollNumber.toUpperCase(),
    class: className,
    section,
    fatherName,
    contactNumber,
    address,
    createdBy: req.user._id
  });

  res.status(201).json({
    success: true,
    message: 'Student added successfully',
    student
  });
});


export const addBulkStudents = catchAsyncError(async (req, res, next) => {
  const { students } = req.body;

  if (!Array.isArray(students) || students.length === 0) {
    return next(new ErrorHandler('Please provide an array of students', 400));
  }

  const rollNumberMap = new Map();
  const duplicates = [];

  students.forEach((student, index) => {
    const key = `${student.class}-${student.section}-${student.rollNumber.toUpperCase()}`;
    if (rollNumberMap.has(key)) {
      duplicates.push({
        rollNumber: student.rollNumber,
        class: student.class,
        section: student.section
      });
    } else {
      rollNumberMap.set(key, index);
    }
  });

  if (duplicates.length > 0) {
    return next(new ErrorHandler(
      `Duplicate roll numbers found in same class/section: ${duplicates.map(d => 
        `${d.rollNumber} (Class ${d.class}-${d.section})`).join(', ')}`, 
      400
    ));
  }

  const existingStudents = await Student.find({
    $or: students.map(s => ({
      rollNumber: s.rollNumber.toUpperCase(),
      class: s.class,
      section: s.section
    }))
  });

  if (existingStudents.length > 0) {
    const existingList = existingStudents.map(s => 
      `${s.rollNumber} (Class ${s.class}-${s.section})`
    ).join(', ');
    return next(new ErrorHandler(`Students already exist: ${existingList}`, 400));
  }

  const studentsWithCreator = students.map(student => ({
    ...student,
    rollNumber: student.rollNumber.toUpperCase(),
    createdBy: req.user._id
  }));

  const createdStudents = await Student.insertMany(studentsWithCreator);

  res.status(201).json({
    success: true,
    message: `${createdStudents.length} students added successfully`,
    count: createdStudents.length,
    students: createdStudents
  });
});


export const getStudents = catchAsyncError(async (req, res, next) => {
  const { page = 1, limit = 10, class: className, section, status, search } = req.query;
  
  // Build filter object
  const filter = {};
  
  if (className) filter.class = className;
  if (section) filter.section = section;
  if (status) filter.status = status;
  
  if (search) {
    filter.$or = [
      { fullName: { $regex: search, $options: 'i' } },
      { fatherName: { $regex: search, $options: 'i' } },
      { rollNumber: { $regex: search, $options: 'i' } }
    ];
  }

  // Pagination
  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const skip = (pageNum - 1) * limitNum;

  const students = await Student.find(filter)
    .populate('createdBy', 'name email')
    .sort({ class: 1, section: 1, rollNumber: 1 })
    .skip(skip)
    .limit(limitNum);

  // Get total count
  const total = await Student.countDocuments(filter);

  res.status(200).json({
    success: true,
    students,
    total,
    currentPage: pageNum,
    totalPages: Math.ceil(total / limitNum),
    limit: limitNum
  });
});


export const getStudentById = catchAsyncError(async (req, res, next) => {
  const student = await Student.findById(req.params.id)
    .populate('createdBy', 'name email');

  if (!student) {
    return next(new ErrorHandler('Student not found', 404));
  }

  res.status(200).json({
    success: true,
    student
  });
});


export const updateStudent = catchAsyncError(async (req, res, next) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new ErrorHandler(errors.array()[0].msg, 400));
  }

  const student = await Student.findById(req.params.id);

  if (!student) {
    return next(new ErrorHandler('Student not found', 404));
  }

  const newRollNumber = req.body.rollNumber?.toUpperCase();
  const newClass = req.body.class || student.class;
  const newSection = req.body.section || student.section;

  if (newRollNumber && newRollNumber !== student.rollNumber) {
    const existingStudent = await Student.findOne({
      rollNumber: newRollNumber,
      class: newClass,
      section: newSection,
      _id: { $ne: req.params.id }
    });

    if (existingStudent) {
      return next(new ErrorHandler(
        `Student with roll number ${newRollNumber} already exists in Class ${newClass}-${newSection}`, 
        400
      ));
    }
  }

  // Update fields
  const updatableFields = ['fullName', 'rollNumber', 'class', 'section', 'fatherName', 'contactNumber', 'address', 'status'];
  
  updatableFields.forEach(field => {
    if (req.body[field] !== undefined) {
      if (field === 'rollNumber') {
        student[field] = req.body[field].toUpperCase();
      } else {
        student[field] = req.body[field];
      }
    }
  });

  await student.save();

  res.status(200).json({
    success: true,
    message: 'Student updated successfully',
    student
  });
});

export const deleteStudent = catchAsyncError(async (req, res, next) => {
  const student = await Student.findById(req.params.id);

  if (!student) {
    return next(new ErrorHandler('Student not found', 404));
  }

  await student.deleteOne();

  res.status(200).json({
    success: true,
    message: 'Student deleted successfully'
  });
});

export const getStudentsByClass = catchAsyncError(async (req, res, next) => {
  const { className } = req.params;
  const { section } = req.query;

  // Validate class
  if (!['6', '7', '8', '9', '10'].includes(className)) {
    return next(new ErrorHandler('Invalid class. Must be 6-10', 400));
  }

  const filter = { class: className };
  if (section) {

    filter.section = section;
  }

  const students = await Student.find(filter)
    .sort({ section: 1, rollNumber: 1 });

  res.status(200).json({
    success: true,
    count: students.length,
    students
  });
});
export const getStudentsByClassAndSection = catchAsyncError(async (req, res, next) => {
  const { class: className, section, page = 1, limit = 10 } = req.query;

  if (!className || !section) {
    return next(new ErrorHandler('Class and section are required', 400));
  }

  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const skip = (pageNum - 1) * limitNum;

  const students = await Student.find({ 
    class: className, 
    section: section 
  })
    .populate('createdBy', 'name email')
    .sort({ rollNumber: 1 })
    .skip(skip)
    .limit(limitNum);

  const total = await Student.countDocuments({ class: className, section: section });

  res.status(200).json({
    success: true,
    students,
    total,
    currentPage: pageNum,
    totalPages: Math.ceil(total / limitNum)
  });
});

export const searchStudents = catchAsyncError(async (req, res, next) => {
  const { q } = req.query;

  if (!q) {
    return next(new ErrorHandler('Please provide a search query', 400));
  }

  const students = await Student.find({
    $or: [
      { fullName: { $regex: q, $options: 'i' } },
      { fatherName: { $regex: q, $options: 'i' } },
      { rollNumber: { $regex: q, $options: 'i' } },
      { contactNumber: { $regex: q, $options: 'i' } }
    ]
  }).limit(20);

  res.status(200).json({
    success: true,
    count: students.length,
    students
  });
});

export const getStudentStats = catchAsyncError(async (req, res, next) => {
  const stats = await Student.aggregate([
    {
      $group: {
        _id: { class: '$class', section: '$section' },
        count: { $sum: 1 }
      }
    },
    {
      $group: {
        _id: '$_id.class',
        sections: {
          $push: {
            section: '$_id.section',
            count: '$count'
          }
        },
        totalInClass: { $sum: '$count' }
      }
    },
    {
      $sort: { '_id': 1 }
    }
  ]);

  const totalStudents = await Student.countDocuments();
  const activeStudents = await Student.countDocuments({ status: 'active' });

  res.status(200).json({
    success: true,
    stats,
    totalStudents,
    activeStudents
  });
});

export const getMyStudents = catchAsyncError(async (req, res, next) => {
  const { page = 1, limit = 10 } = req.query;
  
  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const skip = (pageNum - 1) * limitNum;

  const students = await Student.find({ createdBy: req.user._id })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limitNum);

  const total = await Student.countDocuments({ createdBy: req.user._id });

  res.status(200).json({
    success: true,
    students,
    total,
    currentPage: pageNum,
    totalPages: Math.ceil(total / limitNum)
  });
});

export const updateStudentStatus = catchAsyncError(async (req, res, next) => {
  const { status } = req.body;
  
  if (!['active', 'inactive', 'transferred', 'graduated'].includes(status)) {
    return next(new ErrorHandler('Invalid status value', 400));
  }

  const student = await Student.findById(req.params.id);

  if (!student) {
    return next(new ErrorHandler('Student not found', 404));
  }

  student.status = status;
  await student.save();

  res.status(200).json({
    success: true,
    message: `Student status updated to ${status}`,
    student
  });
});

export const checkRollNumber = catchAsyncError(async (req, res, next) => {
  const { rollNumber } = req.params;
  const { class: className, section } = req.query;
  
  if (!className || !section) {
    return next(new ErrorHandler('Class and section are required', 400));
  }

  const existingStudent = await Student.findOne({ 
    rollNumber: rollNumber.toUpperCase(),
    class: className,
    section: section
  });

  res.status(200).json({
    success: true,
    exists: !!existingStudent,
    message: existingStudent 
      ? `Roll number ${rollNumber} already exists in Class ${className} - ${section}` 
      : 'Roll number is available'
  });
});