import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: [true, 'Student reference is required']
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Teacher reference is required']
  },
  date: {
    type: Date,
    required: [true, 'Date is required']
  },
  status: {
    type: String,
    enum: ['present', 'absent', 'late', 'half-day'],
    required: [true, 'Attendance status is required']
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
  remarks: {
    type: String,
    trim: true,
    maxlength: [200, 'Remarks cannot exceed 200 characters']
  }
}, {
  timestamps: true
});

attendanceSchema.index({ student: 1, date: 1 }, { unique: true });

attendanceSchema.index({ teacher: 1, date: -1 });
attendanceSchema.index({ class: 1, section: 1, date: -1 });

const Attendance = mongoose.model('Attendance', attendanceSchema);

export default Attendance;