import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    maxlength: [100, 'Full name cannot exceed 100 characters']
  },
  rollNumber: {
    type: String,
    required: [true, 'Roll number is required'],
    trim: true,
    uppercase: true
  },
  class: {
    type: String,
    required: [true, 'Class is required'],
    enum: ['10', '9','8','7','6']
  },
  section: {
    type: String,
    required: [true, 'Section is required'],
    enum: ['Iqbal', 'Quaid', 'Liaqat', 'Tariq', 'Excellent']
  },
  fatherName: {
    type: String,
    required: [true, 'Father\'s name is required'],
    trim: true,
    maxlength: [100, 'Father\'s name cannot exceed 100 characters']
  },
  contactNumber: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    trim: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'transferred', 'graduated'],
    default: 'active'
  },
  enrollmentDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});
studentSchema.index(
  { rollNumber: 1, class: 1, section: 1 }, 
  { unique: true }
);

const Student = mongoose.model('Student', studentSchema);

export default Student;