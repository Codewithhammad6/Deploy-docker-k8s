import mongoose from 'mongoose';

const testResultSchema = new mongoose.Schema({
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
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    enum: ['English',
    'Physics', 
    'Chemistry',
    'Biology',
    'Computer',
    'Pak Studies',
    'Urdu', 
    'Math',
    'Science',
    'History',
    'Arabic',
    'Tarjama-tul-Quran',
    'Islamiat',
    'Drawing'
  ]
  },
  testName: {
    type: String,
    required: [true, 'Test name is required'],
    trim: true,
  },
  totalMarks: {
    type: Number,
    required: [true, 'Total marks is required'],
    min: [1, 'Total marks must be at least 1'],
    max: [100, 'Total marks cannot exceed 100']
  },
  obtainedMarks: {
    type: Number,
    required: [true, 'Obtained marks is required'],
    min: [0, 'Obtained marks cannot be negative'],
    validate: {
      validator: function(v) {
        return v <= this.totalMarks;
      },
      message: 'Obtained marks cannot exceed total marks'
    }
  },
  percentage: {
    type: Number,
    required: true
  },
  grade: {
    type: String,
    enum: ['A+', 'A', 'B+', 'B', 'C+', 'C', 'D', 'F'],
    required: true
  },
  testDate: {
    type: Date,
    required: [true, 'Test date is required'],
    default: Date.now
  },
  class: {
    type: String,
    required: [true, 'Class is required'],
    enum: ['9', '10']
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

testResultSchema.pre('save', function(next) {
  this.percentage = (this.obtainedMarks / this.totalMarks) * 100;
  
  // Calculate grade based on percentage
  if (this.percentage >= 90) this.grade = 'A+';
  else if (this.percentage >= 80) this.grade = 'A';
  else if (this.percentage >= 70) this.grade = 'B+';
  else if (this.percentage >= 60) this.grade = 'B';
  else if (this.percentage >= 50) this.grade = 'C+';
  else if (this.percentage >= 40) this.grade = 'C';
  else if (this.percentage >= 33) this.grade = 'D';
  else this.grade = 'F';
  
  // next();
});

// Index for querying by teacher
testResultSchema.index({ teacher: 1, testDate: -1 });
testResultSchema.index({ student: 1, testDate: -1 });
testResultSchema.index({ class: 1, section: 1, subject: 1 });

const TestResult = mongoose.model('TestResult', testResultSchema);

export default TestResult;