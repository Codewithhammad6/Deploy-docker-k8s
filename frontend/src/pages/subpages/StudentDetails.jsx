import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useStudentStore from '../../store/studentStore.js';
import useAttendanceStore from '../../store/attendanceStore.js';
import useTestResultStore from '../../store/testResultStore.js';
import useUserStore from '../../store/userStore.js';
import toast from 'react-hot-toast';

export default function StudentDetails() {
  const navigate = useNavigate();
  const { id } = useParams(); // Student ID from URL params
  
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchId, setSearchId] = useState('');
  const [activeSubject, setActiveSubject] = useState(null);
  const [attendanceData, setAttendanceData] = useState([]);
  const [subjectResults, setSubjectResults] = useState({});
  const [showFullId, setShowFullId] = useState(false); // For mobile ID toggle
  
  // Get stores
  const { getStudentById } = useStudentStore();
  const { getStudentAttendance } = useAttendanceStore();
  const { getStudentTestResults } = useTestResultStore();
  const { getUserById, allUsers, getAllUsers } = useUserStore();
  
  // ✅ Load last searched ID from localStorage on component mount
  useEffect(() => {
    const lastSearchedId = localStorage.getItem('lastStudentId');
    
    // Agar URL mein ID nahi hai aur localStorage mein ID hai to navigate karo
    if (!id && lastSearchedId) {
      navigate(`/student-details/${lastSearchedId}`, { replace: true });
    }
    
    // Load all users for teacher names
    getAllUsers();
  }, []);
  
  // Load student data when component mounts or ID changes
  useEffect(() => {
    if (id) {
      // ✅ Save to localStorage when new ID is searched
      localStorage.setItem('lastStudentId', id);
      
      loadStudentData(id);
      // Search input mein bhi ID show karo
      setSearchId(id);
    } else {
      setLoading(false);
    }
  }, [id]);
  
  // Load student data by ID
  const loadStudentData = async (studentId) => {
    setLoading(true);
    
    try {
      // Get student details
      const studentResult = await getStudentById(studentId);
      
      if (studentResult.success) {
        setStudent(studentResult.student);
        
        // Load attendance data
        const attendanceResult = await getStudentAttendance(studentId);
        if (attendanceResult.success) {
          setAttendanceData(attendanceResult.attendance || []);
        }
        
        // Load test results
        const testResult = await getStudentTestResults(studentId);
        if (testResult.success) {
          // Group test results by subject
          const grouped = {};
          testResult.results.forEach(test => {
            if (!grouped[test.subject]) {
              grouped[test.subject] = [];
            }
            grouped[test.subject].push(test);
            
            // Sort by date (newest first)
            grouped[test.subject].sort((a, b) => 
              new Date(b.testDate) - new Date(a.testDate)
            );
          });
          
          setSubjectResults(grouped);
          
          // Set first subject as active
          const subjects = Object.keys(grouped);
          if (subjects.length > 0) {
            setActiveSubject(subjects[0]);
          }
        }
      } else {
        toast.error('Student not found');
      }
    } catch (error) {
      console.error('Error loading student data:', error);
      toast.error('Failed to load student data');
    } finally {
      setLoading(false);
    }
  };
  
  // Handle search by student ID
  const handleSearch = async () => {
    if (!searchId.trim()) {
      toast.error('Please enter student ID');
      return;
    }
    
    // ✅ Navigate - automatically localStorage mein save ho jayega (useEffect mein)
    navigate(`/student-details/${searchId}`);
  };
  
  // Get teacher name by ID
  const getTeacherName = (teacherId) => {
    if (!teacherId) return 'Unknown';
    
    // Check if we already have it in allUsers
    const teacher = allUsers?.find(u => u._id === teacherId);
    if (teacher) return teacher.name || teacher.email || 'Unknown Teacher';
    
    return 'Loading...';
  };
  
  // Calculate attendance statistics
  const getAttendanceStats = () => {
    if (!attendanceData || attendanceData.length === 0) {
      return { total: 0, present: 0, absent: 0, late: 0, halfDay: 0, percentage: 0 };
    }
    
    const total = attendanceData.length;
    const present = attendanceData.filter(a => a.status === 'present').length;
    const absent = attendanceData.filter(a => a.status === 'absent').length;
    const late = attendanceData.filter(a => a.status === 'late').length;
    const halfDay = attendanceData.filter(a => a.status === 'half-day').length;
    const percentage = total > 0 
      ? Math.round(((present + late) / total) * 100) 
      : 0;
    
    return { total, present, absent, late, halfDay, percentage };
  };
  
  const stats = getAttendanceStats();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-2 sm:py-8 px-2 sm:px-6 lg:px-8">
      {/* Decorative Background Elements - Hidden on mobile for performance */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Back Button and Search - Stack on mobile */}
        <div className="flex flex-col gap-3 mb-4 sm:mb-8">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('/')}
              className="p-2 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-lg 
                       transition-all duration-200 border border-gray-200/50 group shrink-0"
              aria-label="Go back"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-indigo-600 transition-colors" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <div className="min-w-0 flex-1">
              <h1 className="text-lg sm:text-xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent truncate">
                Student Details
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 font-light truncate">
                {student ? `Viewing: ${student.fullName}` : 'Search for a student'}
              </p>
              {/* ✅ Show last searched ID badge - Mobile optimized */}
              {!student && localStorage.getItem('lastStudentId') && (
                <p className="text-xs text-indigo-400 mt-1 truncate">
                  Last: {localStorage.getItem('lastStudentId')}
                </p>
              )}
            </div>
          </div>
          
          {/* Search by ID - Full width on mobile */}
          <div className="flex items-center gap-2 w-full">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="Enter student ID"
                className="w-full px-3 py-2.5 pl-9 text-sm border-2 border-gray-200 rounded-xl
                         focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
                         font-light text-gray-800 bg-white/80"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button
              onClick={handleSearch}
              className="px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 
                       text-white rounded-xl shadow-lg hover:shadow-xl
                       transform hover:scale-105 transition-all duration-300
                       font-medium text-sm whitespace-nowrap"
            >
              Search
            </button>
          </div>
        </div>

        {loading ? (
          // Loading State - Centered properly on mobile
          <div className="flex justify-center items-center py-16 sm:py-20">
            <div className="relative">
              <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-4 border-indigo-200 border-t-indigo-600"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-2 w-2 sm:h-3 sm:w-3 bg-indigo-600 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        ) : student ? (
          // Student Data Found
          <div className="space-y-4 sm:space-y-6">
            {/* Student Info Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 sm:px-6 py-3 sm:py-4">
                <h2 className="text-base sm:text-xl font-light text-white">Student Information</h2>
              </div>
              
              <div className="p-3 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                  {/* Name */}
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                    <p className="text-xs text-gray-500 mb-1">Full Name</p>
                    <p className="text-base sm:text-lg font-semibold text-gray-800 break-words">{student.fullName}</p>
                  </div>
                  
                  {/* ID - Mobile friendly with toggle */}
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                    <p className="text-xs text-gray-500 mb-1">Student ID</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-base sm:text-lg font-mono font-semibold text-indigo-600">
                        {showFullId ? student._id : student._id.slice(-6)}
                      </p>
                      <button
                        onClick={() => setShowFullId(!showFullId)}
                        className="text-xs text-indigo-500 hover:text-indigo-700 underline"
                      >
                        {showFullId ? 'Show less' : 'Show full'}
                      </button>
                    </div>
                  </div>
                  
                  {/* Roll Number */}
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                    <p className="text-xs text-gray-500 mb-1">Roll Number</p>
                    <p className="text-base sm:text-lg font-semibold text-gray-800 break-words">{student.rollNumber}</p>
                  </div>
                  
                  {/* Class & Section */}
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                    <p className="text-xs text-gray-500 mb-1">Class & Section</p>
                    <p className="text-base sm:text-lg font-semibold text-gray-800">
                      Class {student.class} - {student.section}
                    </p>
                  </div>
                  
                  {/* Father's Name */}
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                    <p className="text-xs text-gray-500 mb-1">Father's Name</p>
                    <p className="text-base sm:text-lg font-semibold text-gray-800 break-words">{student.fatherName}</p>
                  </div>
                  
                  {/* Status */}
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                    <p className="text-xs text-gray-500 mb-1">Status</p>
                    <span className={`inline-block px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium rounded-full ${
                      student.status === 'active' ? 'bg-green-100 text-green-800' :
                      student.status === 'inactive' ? 'bg-gray-100 text-gray-800' :
                      student.status === 'transferred' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {student.status}
                    </span>
                  </div>
                  
                  {/* Enrollment Date */}
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                    <p className="text-xs text-gray-500 mb-1">Enrollment Date</p>
                    <p className="text-base sm:text-lg font-semibold text-gray-800">
                      {new Date(student.enrollmentDate).toLocaleDateString()}
                    </p>
                  </div>
                  
                  {/* Contact Number (Optional) */}
                  {student.contactNumber && (
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Contact Number</p>
                      <p className="text-base sm:text-lg font-semibold text-gray-800 break-words">{student.contactNumber}</p>
                    </div>
                  )}
                  
                  {/* Address (Optional) */}
                  {student.address && (
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-xl sm:col-span-2">
                      <p className="text-xs text-gray-500 mb-1">Address</p>
                      <p className="text-sm sm:text-lg font-semibold text-gray-800 break-words">{student.address}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Attendance Stats Card */}
            <div className="bg-white/80 text-black backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 sm:px-6 py-3 sm:py-4">
                <h2 className="text-base sm:text-xl font-light text-white">Attendance Overview</h2>
              </div>
              
              <div className="p-3 sm:p-6">
                {/* Stats Grid - 2 columns on mobile, 5 on desktop */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-4">
                  <div className="bg-blue-50 p-2 sm:p-4 rounded-xl text-center">
                    <p className="text-xs text-blue-600 mb-1">Total</p>
                    <p className="text-lg sm:text-2xl font-bold text-blue-700">{stats.total}</p>
                  </div>
                  <div className="bg-green-50 p-2 sm:p-4 rounded-xl text-center">
                    <p className="text-xs text-green-600 mb-1">Present</p>
                    <p className="text-lg sm:text-2xl font-bold text-green-700">{stats.present}</p>
                  </div>
                  <div className="bg-red-50 p-2 sm:p-4 rounded-xl text-center">
                    <p className="text-xs text-red-600 mb-1">Absent</p>
                    <p className="text-lg sm:text-2xl font-bold text-red-700">{stats.absent}</p>
                  </div>
                  <div className="bg-yellow-50 p-2 sm:p-4 rounded-xl text-center">
                    <p className="text-xs text-yellow-600 mb-1">Late</p>
                    <p className="text-lg sm:text-2xl font-bold text-yellow-700">{stats.late}</p>
                  </div>
                  <div className="bg-purple-50 p-2 sm:p-4 rounded-xl text-center col-span-2 sm:col-span-1">
                    <p className="text-xs text-purple-600 mb-1">%</p>
                    <p className={`text-lg sm:text-2xl font-bold ${
                      stats.percentage >= 75 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stats.percentage}%
                    </p>
                  </div>
                </div>
                
                {/* Recent Attendance - Scroll horizontally on mobile */}
                {attendanceData.length > 0 && (
                  <div className="mt-4 sm:mt-6">
                    <h3 className="text-sm font-medium text-gray-700 mb-2 sm:mb-3">Recent Attendance</h3>
                    <div className="overflow-x-auto -mx-3 sm:mx-0">
                      <div className="inline-block min-w-full align-middle px-3 sm:px-0">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-3 sm:px-4 py-2 text-left text-xs text-gray-500 whitespace-nowrap">Date</th>
                              <th className="px-3 sm:px-4 py-2 text-left text-xs text-gray-500 whitespace-nowrap">Status</th>
                              <th className="px-3 sm:px-4 py-2 text-left text-xs text-gray-500 whitespace-nowrap">Teacher</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {attendanceData.slice(0, 5).map((record, idx) => (
                              <tr key={idx}>
                                <td className="px-3 sm:px-4 py-2 text-xs sm:text-sm whitespace-nowrap">
                                  {new Date(record.date).toLocaleDateString()}
                                </td>
                                <td className="px-3 sm:px-4 py-2 whitespace-nowrap">
                                  <span className={`px-2 py-1 rounded-full text-xs whitespace-nowrap ${
                                    record.status === 'present' ? 'bg-green-100 text-green-800' :
                                    record.status === 'absent' ? 'bg-red-100 text-red-800' :
                                    record.status === 'late' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-purple-100 text-purple-800'
                                  }`}>
                                    {record.status}
                                  </span>
                                </td>
                                <td className="px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-600 truncate max-w-[100px] sm:max-w-none">
                                  {getTeacherName(record.teacher)}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Test Results Card */}
            <div className="bg-white/80 text-black backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 sm:px-6 py-3 sm:py-4">
                <h2 className="text-base sm:text-xl font-light text-white">Academic Performance</h2>
              </div>
              
              <div className="p-3 sm:p-6">
                {Object.keys(subjectResults).length > 0 ? (
                  <>
                    {/* Subject Tabs - Scroll horizontally on mobile */}
                    <div className="overflow-x-auto -mx-3 sm:mx-0 mb-4 sm:mb-6">
                      <div className="flex gap-2 px-3 sm:px-0 min-w-max sm:min-w-0 sm:flex-wrap">
                        {Object.keys(subjectResults).map(subject => (
                          <button
                            key={subject}
                            onClick={() => setActiveSubject(subject)}
                            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap
                                      ${activeSubject === subject
                                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                      }`}
                          >
                            {subject}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Subject Details */}
                    {activeSubject && (
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 truncate">
                          {activeSubject} - All Tests
                        </h3>
                        
                        {/* Test Results Table - Scroll horizontally on mobile */}
                        <div className="overflow-x-auto -mx-3 sm:mx-0">
                          <div className="inline-block min-w-full align-middle px-3 sm:px-0">
                            <table className="w-full divide-y divide-gray-200">
                              <thead className="bg-gray-50">
                                <tr>
                                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 whitespace-nowrap">Date</th>
                                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 whitespace-nowrap">Test</th>
                                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 whitespace-nowrap">Marks</th>
                                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 whitespace-nowrap">%</th>
                                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 whitespace-nowrap">Grade</th>
                                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 whitespace-nowrap">Teacher</th>
                                  <th className="px-2 sm:px-4 py-2 text-left text-xs text-gray-500 whitespace-nowrap">Remarks</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200">
                                {subjectResults[activeSubject].map((test, idx) => (
                                  <tr key={idx} className="hover:bg-gray-50">
                                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm whitespace-nowrap">
                                      {new Date(test.testDate).toLocaleDateString()}
                                    </td>
                                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap">
                                      {test.testName}
                                    </td>
                                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm whitespace-nowrap">
                                      {test.obtainedMarks}/{test.totalMarks}
                                    </td>
                                    <td className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">
                                      <span className={`text-xs sm:text-sm font-semibold ${
                                        test.percentage >= 75 ? 'text-green-600' :
                                        test.percentage >= 60 ? 'text-yellow-600' : 'text-red-600'
                                      }`}>
                                        {test.percentage.toFixed(1)}%
                                      </span>
                                    </td>
                                    <td className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">
                                      <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs whitespace-nowrap ${
                                        test.grade === 'A+' || test.grade === 'A' ? 'bg-green-100 text-green-800' :
                                        test.grade === 'B+' || test.grade === 'B' ? 'bg-blue-100 text-blue-800' :
                                        test.grade === 'C+' || test.grade === 'C' ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-red-100 text-red-800'
                                      }`}>
                                        {test.grade}
                                      </span>
                                    </td>
                                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-600 truncate max-w-[80px] sm:max-w-none">
                                      {getTeacherName(test.teacher)}
                                    </td>
                                    <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-500 truncate max-w-[80px] sm:max-w-none">
                                      {test.remarks || '-'}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                        
                        {/* Subject Statistics - Stack on mobile */}
                        <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
                          <div className="bg-blue-50 p-2 sm:p-3 rounded-lg">
                            <p className="text-xs text-blue-600">Total Tests</p>
                            <p className="text-base sm:text-xl font-bold text-blue-700">
                              {subjectResults[activeSubject].length}
                            </p>
                          </div>
                          <div className="bg-green-50 p-2 sm:p-3 rounded-lg">
                            <p className="text-xs text-green-600">Average</p>
                            <p className="text-base sm:text-xl font-bold text-green-700">
                              {(subjectResults[activeSubject].reduce((sum, t) => sum + t.percentage, 0) / 
                                subjectResults[activeSubject].length).toFixed(1)}%
                            </p>
                          </div>
                          <div className="bg-purple-50 p-2 sm:p-3 rounded-lg">
                            <p className="text-xs text-purple-600">Highest</p>
                            <p className="text-base sm:text-xl font-bold text-purple-700">
                              {Math.max(...subjectResults[activeSubject].map(t => t.percentage)).toFixed(1)}%
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-8 sm:py-12">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-base sm:text-lg font-light">No test results found</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          // No Student Found - Mobile optimized
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 sm:p-12 text-center border-2 border-dashed border-gray-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-indigo-100 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-light text-gray-700 mb-2">No Student Found</h3>
            <p className="text-sm text-gray-500 mb-4">Please enter a valid student ID to search</p>
            
            {/* ✅ Show last searched ID if available - Mobile optimized */}
            {localStorage.getItem('lastStudentId') && (
              <div className="mb-4">
                <p className="text-xs text-gray-400">Last searched ID:</p>
                <button
                  onClick={() => {
                    const lastId = localStorage.getItem('lastStudentId');
                    if (lastId) {
                      navigate(`/student-details/${lastId}`);
                    }
                  }}
                  className="mt-1 px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-50 text-indigo-600 rounded-lg text-xs sm:text-sm font-mono hover:bg-indigo-100 transition-colors truncate max-w-full"
                >
                  {localStorage.getItem('lastStudentId')}
                </button>
              </div>
            )}
            
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    placeholder="Enter student ID"
                    className="flex-1 px-3 py-2 text-sm border-2 border-gray-200 rounded-xl
                             focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
                             font-light text-gray-800"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <button
                    onClick={handleSearch}
                    className="px-4 sm:px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 
                             text-white rounded-xl shadow-lg hover:shadow-xl
                             transform hover:scale-105 transition-all duration-300
                             font-medium text-sm whitespace-nowrap"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}