import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStudentStore from '../../store/studentStore.js';
import useAttendanceStore from '../../store/attendanceStore.js';
import useTestResultStore from '../../store/testResultStore.js';
import useUserStore from '../../store/userStore.js';
import toast from 'react-hot-toast';

export default function TeacherDashboard() {
  const navigate = useNavigate();
  
  // Get current user from userStore
  const { user } = useUserStore();
  
  // States for teacher's class and section
  const [teacherClass, setTeacherClass] = useState('');
  const [teacherSection, setTeacherSection] = useState('');
  const [showStudents, setShowStudents] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString('en-CA'));
  const [showMarksModal, setShowMarksModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [activeTab, setActiveTab] = useState('attendance');
  const [editingTest, setEditingTest] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  // Search state
  const [searchTerm, setSearchTerm] = useState('');

  // Attendance state for each student
  const [attendanceData, setAttendanceData] = useState({});
  const [pendingChanges, setPendingChanges] = useState({});
  const [studentPercentageData, setStudentPercentageData] = useState({});
  const [isSavingAttendance, setIsSavingAttendance] = useState(false);
  
  // Test/Marks state
  const [newTest, setNewTest] = useState({
    subject: '',
    testName: '',
    totalMarks: '',
    obtainedMarks: '',
    testDate: new Date().toLocaleDateString('en-CA'),
    remarks: ''
  });

  // Get stores
  const { 
    students, 
    loading: studentsLoading,
    getStudentsByClass 
  } = useStudentStore();

  const { 
    attendanceRecords, 
    loading: attendanceLoading,
    stats: attendanceStats,
    markBulkAttendance,
    getAttendanceByDate,
    getAllAttendanceByClass,
    getStudentAttendance: fetchStudentAttendance,
    deleteAttendance,
    getAttendanceStats
  } = useAttendanceStore();

  const {
    testResults,
    loading: testLoading,
    addTestResult,
    getTestResultsByClass,
    getStudentTestResults,
    updateTestResult,
    deleteTestResult
  } = useTestResultStore();

  // Class options
  const classOptions = ['10', '9', '8', '7', '6'];
  
  // Section options based on class
  const getSectionOptions = () => {
    const sectionMap = {
      '6': ['Iqbal', 'Quaid', 'Liaqat'],
      '7': ['Iqbal', 'Quaid', 'Liaqat'],
      '8': ['Iqbal', 'Quaid', 'Liaqat'],
      '9': ['Iqbal', 'Liaqat', 'Tariq', 'Excellent'],
      '10': ['Iqbal', 'Liaqat', 'Tariq', 'Excellent']
    };
    return teacherClass ? sectionMap[teacherClass] || [] : [];
  };
  
  // Subject options based on class
  const getSubjectOptions = () => {
    const subjectMap = {
      // Classes 6-8 Subjects
      low: [
        'English',
        'Urdu', 
        'Math',
        'Science',
        'History',
        'Arabic',
        'Tarjama-tul-Quran',
        'Islamiat',
        'Drawing'
      ],
      
      // Classes 9-10 Subjects
      high: [
        'English',
        'Urdu',
        'Physics', 
        'Chemistry',
        'Biology',
        'Math',
        'Computer',
        'Islamiat',
        'Pak Studies'
      ]
    };
    
    if (!teacherClass) return [];
    const classNum = parseInt(teacherClass);
    return classNum >= 9 ? subjectMap.high : subjectMap.low;
  };

  // Load data when class and section are selected
  useEffect(() => {
    if (teacherClass && teacherSection && showStudents) {
      loadData();
    }
  }, [teacherClass, teacherSection, showStudents]);

  // Reload attendance when date changes
  useEffect(() => {
    if (teacherClass && teacherSection && showStudents && activeTab === 'attendance') {
      loadTodayAttendance();
      loadAllAttendance();
      loadAttendanceStats();
      setPendingChanges({});
    }
  }, [selectedDate]);

  // Load test results when switching to marks tab
  useEffect(() => {
    if (teacherClass && teacherSection && showStudents && activeTab === 'marks') {
      loadTestResults();
    }
  }, [activeTab, teacherClass, teacherSection, showStudents]);

  const loadData = async () => {
    await loadStudents();
    if (activeTab === 'attendance') {
      await loadTodayAttendance();
      await loadAllAttendance();
      await loadAttendanceStats();
    } else {
      await loadTestResults();
    }
  };

  const loadStudents = async () => {
    const result = await getStudentsByClass(teacherClass, teacherSection);
    if (result.success && result.students) {
      const initialAttendance = {};
      result.students.forEach(student => {
        initialAttendance[student._id] = {};
      });
      setAttendanceData(initialAttendance);
    }
  };

  const loadTodayAttendance = async () => {
    const result = await getAttendanceByDate(selectedDate, teacherClass, teacherSection);
    if (result.success && result.data) {
      const attendanceList = result.data.attendance || [];
      
      const newAttendanceData = { ...attendanceData };
      
      students.forEach(student => {
        if (newAttendanceData[student._id]) {
          delete newAttendanceData[student._id][selectedDate];
        }
      });
      
      attendanceList.forEach(record => {
        if (record.student && record.student._id) {
          if (!newAttendanceData[record.student._id]) {
            newAttendanceData[record.student._id] = {};
          }
          newAttendanceData[record.student._id][selectedDate] = record.status;
        }
      });
      
      setAttendanceData(newAttendanceData);
    }
  };

  const loadAllAttendance = async () => {
    const result = await getAllAttendanceByClass(teacherClass, teacherSection);
    if (result.success && result.studentStats) {
      setStudentPercentageData(result.studentStats);
    }
  };

  const loadAttendanceStats = async () => {
    const date = new Date(selectedDate);
    await getAttendanceStats(
      teacherClass, 
      teacherSection, 
      date.getMonth() + 1, 
      date.getFullYear()
    );
  };

  const loadTestResults = async () => {
    await getTestResultsByClass(teacherClass, teacherSection);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (teacherClass && teacherSection) {
      setShowStudents(true);
      loadData();
    }
  };

  // Handle reset
  const handleReset = () => {
    if (Object.keys(pendingChanges).length > 0) {
      if (window.confirm('You have unsaved attendance changes. Are you sure you want to reset?')) {
        setTeacherClass('');
        setTeacherSection('');
        setShowStudents(false);
        setAttendanceData({});
        setPendingChanges({});
        setStudentPercentageData({});
        setSearchTerm('');
      }
    } else {
      setTeacherClass('');
      setTeacherSection('');
      setShowStudents(false);
      setAttendanceData({});
      setPendingChanges({});
      setStudentPercentageData({});
      setSearchTerm('');
    }
  };

  // Copy ID to clipboard
  const copyToClipboard = (id) => {
    navigator.clipboard.writeText(id);
    setCopySuccess(id);
    setTimeout(() => setCopySuccess(''), 2000);
  };

  // View student details
  const viewStudentDetails = async (student) => {
    if (Object.keys(pendingChanges).length > 0) {
      if (!window.confirm('You have unsaved attendance changes. Save before viewing profile?')) {
        return;
      }
      await handleSaveAllAttendance();
    }
    
     navigate(`/student-details/${student._id}`);
  };

  // Handle attendance change - LOCAL ONLY
  const handleAttendanceChange = (studentId, status) => {
    setAttendanceData(prev => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        [selectedDate]: status
      }
    }));
    
    setPendingChanges(prev => ({
      ...prev,
      [studentId]: status
    }));
  };

  // Save all pending attendance
  const handleSaveAllAttendance = async () => {
    const pendingCount = Object.keys(pendingChanges).length;
    
    if (pendingCount === 0) {
      toast('No changes to save');
      return;
    }

    setIsSavingAttendance(true);
    
    const bulkData = Object.entries(pendingChanges).map(([studentId, status]) => ({
      studentId,
      status
    }));

    const result = await markBulkAttendance({
      attendanceData: bulkData,
      date: selectedDate,
      class: teacherClass,
      section: teacherSection
    });

    if (result.success) {
      setPendingChanges({});
      await loadAllAttendance();
      await loadAttendanceStats();
      
      if (result.data.errors) {
        console.log(`Saved ${result.data.count} attendance records, ${result.data.errors.length} failed`);
      } else {
        console.log(`Saved ${pendingCount} attendance records successfully`);
      }
    }
    
    setIsSavingAttendance(false);
  };

  // Handle bulk attendance
  const handleBulkAttendance = (status) => {
    if (!students || students.length === 0) return;

    const newAttendanceData = { ...attendanceData };
    const newPendingChanges = { ...pendingChanges };
    
    students.forEach(student => {
      if (!newAttendanceData[student._id]) {
        newAttendanceData[student._id] = {};
      }
      newAttendanceData[student._id][selectedDate] = status;
      newPendingChanges[student._id] = status;
    });
    
    setAttendanceData(newAttendanceData);
    setPendingChanges(newPendingChanges);
    
    toast.success(`All students marked as ${status} (not saved yet)`);
  };

  // Get attendance status
  const getStudentAttendanceStatus = (studentId) => {
    return attendanceData[studentId]?.[selectedDate] || '';
  };

  // Calculate attendance percentage
  const getAttendancePercentage = (studentId) => {
    const stats = studentPercentageData[studentId];
    if (!stats || stats.total === 0) {
      return '0%';
    }
    return `${stats.percentage}%`;
  };

  // Get total days
  const getStudentTotalDays = (studentId) => {
    const stats = studentPercentageData[studentId];
    return stats?.total || 0;
  };

  // Count pending changes
  const getPendingChangesCount = () => {
    return Object.keys(pendingChanges).length;
  };

  // Reset test form
  const resetTestForm = () => {
    setNewTest({
      subject: '',
      testName: '',
      totalMarks: '',
      obtainedMarks: '',
      testDate: new Date().toLocaleDateString('en-CA'),
      remarks: ''
    });
    setEditingTest(null);
  };

  // Handle add test marks
  const handleAddTest = (student) => {
    if (!student || !student._id) {
      toast.error('Invalid student data');
      return;
    }
    
    setSelectedStudent(student);
    setEditingTest(null);
    setNewTest({
      subject: '',
      testName: '',
      totalMarks: '',
      obtainedMarks: '',
      testDate: new Date().toLocaleDateString('en-CA'),
      remarks: ''
    });
    setShowMarksModal(true);
  };

  // Handle edit test
  const handleEditTest = (test) => {
    setEditingTest(test);
    setSelectedStudent({ _id: test.student._id, fullName: test.student.fullName });
    setNewTest({
      subject: test.subject,
      testName: test.testName,
      totalMarks: test.totalMarks,
      obtainedMarks: test.obtainedMarks,
      testDate: new Date(test.testDate).toISOString().split('T')[0],
      remarks: test.remarks || ''
    });
    setShowMarksModal(true);
  };

  // Validate test form
  const validateTestForm = () => {
    if (!editingTest) {
      if (!newTest.subject) {
        toast.error('Please select a subject');
        return false;
      }
      if (!newTest.testName.trim()) {
        toast.error('Please enter a test name');
        return false;
      }
    }
    if (!newTest.totalMarks || parseInt(newTest.totalMarks) <= 0) {
      toast.error('Please enter valid total marks');
      return false;
    }
    if (!newTest.obtainedMarks || parseInt(newTest.obtainedMarks) < 0) {
      toast.error('Please enter valid obtained marks');
      return false;
    }
    if (parseInt(newTest.obtainedMarks) > parseInt(newTest.totalMarks)) {
      toast.error('Obtained marks cannot exceed total marks');
      return false;
    }
    if (!newTest.testDate) {
      toast.error('Please select a test date');
      return false;
    }
    return true;
  };

  // Save test
  const handleSaveTest = async () => {
    if (!selectedStudent && !editingTest) {
      toast.error('Please select a student');
      return;
    }

    if (!validateTestForm()) return;

    let result;
    if (editingTest) {
      result = await updateTestResult(editingTest._id, {
        totalMarks: parseInt(newTest.totalMarks),
        obtainedMarks: parseInt(newTest.obtainedMarks),
        remarks: newTest.remarks
      });
    } else {
      result = await addTestResult({
        studentId: selectedStudent._id,
        subject: newTest.subject,
        testName: newTest.testName,
        totalMarks: parseInt(newTest.totalMarks),
        obtainedMarks: parseInt(newTest.obtainedMarks),
        testDate: newTest.testDate,
        remarks: newTest.remarks
      });
    }

    if (result && result.success) {
      setShowMarksModal(false);
      resetTestForm();
      setSelectedStudent(null);
      await loadTestResults();
      toast.success(editingTest ? 'Test updated successfully' : 'Test added successfully');
    }
  };

  // Handle delete test
  const handleDeleteTest = (test) => {
    setDeleteTarget({ type: 'test', data: test });
    setShowDeleteConfirm(true);
  };

  // Handle delete attendance
  const handleDeleteAttendance = (attendanceId) => {
    setDeleteTarget({ type: 'attendance', id: attendanceId });
    setShowDeleteConfirm(true);
  };

  // Confirm delete
  const confirmDelete = async () => {
    if (!deleteTarget) return;

    let result;
    if (deleteTarget.type === 'test') {
      result = await deleteTestResult(deleteTarget.data._id);
      if (result && result.success) {
        toast.success('Test deleted successfully');
        await loadTestResults();
      }
    } else if (deleteTarget.type === 'attendance') {
      result = await deleteAttendance(deleteTarget.id);
      if (result && result.success) {
        await loadTodayAttendance();
        await loadAllAttendance();
        await loadAttendanceStats();
      }
    }

    if (result && result.success) {
      setShowDeleteConfirm(false);
      setDeleteTarget(null);
    }
  };

  // Get student's tests and group by subject with better organization
  const getStudentTestsBySubject = (studentId) => {
    const tests = testResults.filter(test => test.student?._id === studentId);
    
    // Group tests by subject
    const groupedBySubject = {};
    tests.forEach(test => {
      if (!groupedBySubject[test.subject]) {
        groupedBySubject[test.subject] = [];
      }
      groupedBySubject[test.subject].push(test);
    });
    
    // Sort tests within each subject by date (newest first)
    Object.keys(groupedBySubject).forEach(subject => {
      groupedBySubject[subject].sort((a, b) => new Date(b.testDate) - new Date(a.testDate));
    });
    
    return groupedBySubject;
  };

  // Calculate average marks
  const getStudentAverage = (studentId) => {
    const tests = testResults.filter(test => test.student?._id === studentId);
    if (tests.length === 0) return 'N/A';
    
    const totalPercentage = tests.reduce((sum, test) => sum + (test.percentage || 0), 0);
    return `${(totalPercentage / tests.length).toFixed(2)}%`;
  };

  // Check if current teacher owns this test
  const isTeacherOwner = (test) => {
    if (!user || !test.teacher) return false;
    
    const teacherId = typeof test.teacher === 'object' ? test.teacher._id : test.teacher;
    return teacherId === user._id || teacherId === user.id;
  };

  // Filter students based on search term
  const filteredStudents = students?.filter(student => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      student.fullName?.toLowerCase().includes(term) ||
      student.fatherName?.toLowerCase().includes(term) ||
      student.rollNumber?.toLowerCase().includes(term)
    );
  });

  const pendingCount = getPendingChangesCount();

  return (
    <div className="min-h-screen text-black bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 py-4 sm:py-8 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with Back Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => navigate(-1)}
                className="p-2 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-lg 
                         transition-all duration-200 border border-gray-200/50 group"
                aria-label="Go back"
              >
                <svg className="w-5 h-5 sm:w-5 sm:h-5 text-gray-600 group-hover:text-indigo-600 transition-colors" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Teacher Dashboard
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 font-light mt-0.5 flex items-center gap-2">
                  <span>Welcome, {user?.name || 'Teacher'}</span>
                  {user && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full text-xs">
                      ID: {user?._id?.slice(-6) || user?.id?.slice(-6)}
                    </span>
                  )}
                </p>
              </div>
            </div>
            
            {/* Save Attendance Button */}
            {activeTab === 'attendance' && pendingCount > 0 && (
              <button
                onClick={handleSaveAllAttendance}
                disabled={isSavingAttendance}
                className={`w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg font-medium 
                         flex items-center justify-center gap-2 transition-all duration-300 
                         transform hover:scale-105 active:scale-95 text-sm sm:text-base
                         ${isSavingAttendance 
                           ? 'bg-gray-400 cursor-not-allowed' 
                           : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'}`}
              >
                {isSavingAttendance ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    <span>Saving...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                            d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                    </svg>
                    <span>Save {pendingCount} {pendingCount === 1 ? 'Change' : 'Changes'}</span>
                  </>
                )}
              </button>
            )}
          </div>

          {/* Class Selection Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-xl font-light text-gray-700">Select Your Class & Section</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Select Class <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={teacherClass}
                    onChange={(e) => {
                      setTeacherClass(e.target.value);
                      setTeacherSection(''); // Reset section when class changes
                      setShowStudents(false);
                    }}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl
                             focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
                             font-light text-gray-700 bg-white transition-all duration-200
                             appearance-none cursor-pointer"
                  >
                    <option value="">Choose a class</option>
                    {classOptions.map(cls => (
                      <option key={cls} value={cls}>Class {cls}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Select Section <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={teacherSection}
                    onChange={(e) => {
                      setTeacherSection(e.target.value);
                      setShowStudents(false);
                    }}
                    required
                    disabled={!teacherClass}
                    className={`w-full px-4 py-3 border-2 border-gray-200 rounded-xl
                             focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
                             font-light text-gray-700 bg-white transition-all duration-200
                             appearance-none cursor-pointer
                             ${!teacherClass ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <option value="">Choose a section</option>
                    {getSectionOptions().map(section => (
                      <option key={section} value={section}>{section}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  type="submit"
                  disabled={!teacherClass || !teacherSection || studentsLoading}
                  className={`w-full sm:flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 
                           text-white py-3 px-6 rounded-xl shadow-lg font-medium
                           transform hover:scale-105 active:scale-95
                           transition-all duration-300 text-sm sm:text-base
                           ${(!teacherClass || !teacherSection || studentsLoading) ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl'}`}
                >
                  {studentsLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Loading...</span>
                    </div>
                  ) : (
                    'View Students'
                  )}
                </button>
                
                {(teacherClass || teacherSection) && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl
                             hover:bg-gray-50 hover:border-gray-300 transform hover:scale-105 
                             transition-all duration-300 font-medium text-sm sm:text-base"
                  >
                    Reset
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Students Display Section */}
          {showStudents && (
            <div className="space-y-4 sm:space-y-6">
              {/* Class Info Header with Tabs */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div>
                    <h3 className="text-2xl font-light text-gray-800">
                      Class {teacherClass} - {teacherSection}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Total Students: <span className="font-semibold text-indigo-600">{students?.length || 0}</span>
                    </p>
                  </div>

                  {/* Date Selector */}
                  {activeTab === 'attendance' && (
                    <div className="flex items-center text-black gap-3">
                      <label className="text-sm text-gray-600">📅 Date:</label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="px-3 py-2 border-2 border-gray-200 rounded-lg text-sm
                                 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
                                 transition-all duration-200"
                      />
                    </div>
                  )}
                </div>

                {/* Search Bar */}
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search by name, father's name or roll number..."
                      className="w-full px-6 py-3 pl-14 border-2 border-gray-200 rounded-xl
                               focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
                               font-light text-gray-700 bg-white/80 backdrop-blur-sm 
                               transition-all duration-200 text-sm sm:text-base"
                    />
                    <svg className="w-5 h-5 text-gray-400 absolute left-5 top-3.5" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm('')}
                        className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab('attendance')}
                    className={`px-6 py-3 text-sm font-medium transition-all relative
                              ${activeTab === 'attendance' 
                                ? 'text-indigo-600' 
                                : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    Attendance Management
                    {activeTab === 'attendance' && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab('marks')}
                    className={`px-6 py-3 text-sm font-medium transition-all relative
                              ${activeTab === 'marks' 
                                ? 'text-indigo-600' 
                                : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    Test & Marks Management
                    {activeTab === 'marks' && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
                    )}
                  </button>
                </div>
              </div>

              {/* Loading State */}
              {(attendanceLoading || testLoading || studentsLoading) && (
                <div className="flex justify-center items-center py-12">
                  <div className="relative">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-200 border-t-indigo-600"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-3 w-3 bg-indigo-600 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Attendance Tab */}
              {activeTab === 'attendance' && !attendanceLoading && (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                  {/* Bulk Actions */}
                  <div className="p-4 bg-gradient-to-r from-gray-50 to-indigo-50/30 border-b">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-medium text-gray-600">Mark all as:</span>
                        <button
                          onClick={() => handleBulkAttendance('present')}
                          className="px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium
                                   hover:bg-green-200 transition-colors border border-green-200"
                        >
                          Present
                        </button>
                        <button
                          onClick={() => handleBulkAttendance('absent')}
                          className="px-4 py-2 bg-red-100 text-red-700 rounded-lg text-sm font-medium
                                   hover:bg-red-200 transition-colors border border-red-200"
                        >
                          Absent
                        </button>
                        <button
                          onClick={() => handleBulkAttendance('late')}
                          className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg text-sm font-medium
                                   hover:bg-yellow-200 transition-colors border border-yellow-200"
                        >
                          Late
                        </button>
                        <button
                          onClick={() => handleBulkAttendance('half-day')}
                          className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium
                                   hover:bg-purple-200 transition-colors border border-purple-200"
                        >
                          Half Day
                        </button>
                      </div>
                      
                      {/* Save Button */}
                      <button
                        onClick={handleSaveAllAttendance}
                        disabled={pendingCount === 0 || isSavingAttendance}
                        className={`px-6 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2
                                  transition-all duration-300
                                  ${pendingCount > 0 
                                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg' 
                                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                      >
                        {isSavingAttendance ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                            Saving...
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1-2l-4 4-4-4" />
                            </svg>
                            Save {pendingCount} {pendingCount === 1 ? 'Change' : 'Changes'}
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Pending Changes Indicator */}
                  {pendingCount > 0 && (
                    <div className="p-3 bg-amber-50 border-b border-amber-200">
                      <p className="text-sm text-amber-700 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span>You have {pendingCount} unsaved change{pendingCount > 1 ? 's' : ''}. Click save to persist changes.</span>
                      </p>
                    </div>
                  )}

                  {/* Mobile Attendance Cards */}
                  <div className="block sm:hidden">
                    {filteredStudents && filteredStudents.map((student) => {
                      const currentStatus = getStudentAttendanceStatus(student._id);
                      const isPending = pendingChanges.hasOwnProperty(student._id);
                      const totalDays = getStudentTotalDays(student._id);
                      return (
                        <div key={student._id} className={`p-4 border-b ${isPending ? 'bg-amber-50/50' : ''}`}>
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex-1">
                              <button
                                onClick={() => viewStudentDetails(student)}
                                className="text-base font-medium text-gray-900 hover:text-indigo-600 transition-colors"
                              >
                                {student.fullName}
                              </button>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">
                                  Roll: {student.rollNumber}
                                </span>
                                <button
                                  onClick={() => copyToClipboard(student._id)}
                                  className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono 
                                           text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-full"
                                >
                                  <span>ID: {student._id.slice(-6)}</span>
                                  {copySuccess === student._id && (
                                    <span className="text-green-600">✓</span>
                                  )}
                                </button>
                              </div>
                              <p className="text-xs text-gray-500 mt-1">Father: {student.fatherName}</p>
                            </div>
                            <div className="text-right">
                              <span className={`text-sm font-semibold ${
                                parseFloat(getAttendancePercentage(student._id)) >= 75 
                                  ? 'text-green-600' : 'text-red-600'
                              }`}>
                                {getAttendancePercentage(student._id)}
                              </span>
                              <p className="text-xs text-gray-400">({totalDays} days)</p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-4 gap-1 mt-3">
                            {['present', 'absent', 'late', 'half-day'].map((status) => (
                              <button
                                key={status}
                                onClick={() => handleAttendanceChange(student._id, status)}
                                className={`py-2 rounded-lg text-xs font-medium capitalize transition-all
                                          ${currentStatus === status 
                                            ? status === 'present' ? 'bg-green-500 text-white shadow-md' 
                                            : status === 'absent' ? 'bg-red-500 text-white shadow-md'
                                            : status === 'late' ? 'bg-yellow-500 text-white shadow-md'
                                            : 'bg-purple-500 text-white shadow-md'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                              >
                                {status}
                              </button>
                            ))}
                          </div>
                          
                          {attendanceData[student._id]?.[selectedDate] && !isPending && (
                            <div className="mt-3 flex justify-end">
                              <button
                                onClick={() => {
                                  const attendanceId = attendanceRecords.find(
                                    r => r.student?._id === student._id && 
                                    new Date(r.date).toISOString().split('T')[0] === selectedDate
                                  )?._id;
                                  if (attendanceId) {
                                    setDeleteTarget({ type: 'attendance', id: attendanceId });
                                    setShowDeleteConfirm(true);
                                  }
                                }}
                                className="text-xs text-red-600 hover:text-red-800 font-medium"
                              >
                                Delete
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Desktop Attendance Table */}
                  <div className="hidden sm:block overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-200">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Roll No</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Student Name</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Father's Name</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Attendance</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Overall %</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {filteredStudents && filteredStudents.map((student) => {
                          const currentStatus = getStudentAttendanceStatus(student._id);
                          const isPending = pendingChanges.hasOwnProperty(student._id);
                          const totalDays = getStudentTotalDays(student._id);
                          return (
                            <tr key={student._id} className={`hover:bg-indigo-50/30 transition-colors ${isPending ? 'bg-amber-50/50' : ''}`}>
                              <td className="px-6 py-4">
                                <div className="flex flex-col">
                                  <span className="text-sm font-medium text-gray-900">{student.rollNumber}</span>
                                  <button
                                    onClick={() => copyToClipboard(student._id)}
                                    className="inline-flex items-center gap-1 text-xs font-mono text-indigo-600 hover:text-indigo-800 mt-1"
                                  >
                                    <span>ID: {student._id.slice(-6)}</span>
                                    {copySuccess === student._id && (
                                      <span className="text-green-600">✓</span>
                                    )}
                                  </button>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <button
                                  onClick={() => viewStudentDetails(student)}
                                  className="text-sm font-medium text-gray-900 hover:text-indigo-600 hover:underline text-left"
                                >
                                  {student.fullName}
                                  {isPending && (
                                    <span className="ml-2 text-xs text-amber-600 font-normal">(unsaved)</span>
                                  )}
                                </button>
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-600">{student.fatherName}</td>
                              <td className="px-6 py-4">
                                <div className="flex gap-2">
                                  {['present', 'absent', 'late', 'half-day'].map((status) => (
                                    <button
                                      key={status}
                                      onClick={() => handleAttendanceChange(student._id, status)}
                                      className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all
                                                ${currentStatus === status 
                                                  ? status === 'present' ? 'bg-green-500 text-white shadow-sm' 
                                                  : status === 'absent' ? 'bg-red-500 text-white shadow-sm'
                                                  : status === 'late' ? 'bg-yellow-500 text-white shadow-sm'
                                                  : 'bg-purple-500 text-white shadow-sm'
                                                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                    >
                                      {status}
                                    </button>
                                  ))}
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex flex-col">
                                  <span className={`text-sm font-semibold ${
                                    parseFloat(getAttendancePercentage(student._id)) >= 75 
                                      ? 'text-green-600' : 'text-red-600'
                                  }`}>
                                    {getAttendancePercentage(student._id)}
                                  </span>
                                  <span className="text-xs text-gray-400">
                                    {totalDays} {totalDays === 1 ? 'day' : 'days'}
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                {attendanceData[student._id]?.[selectedDate] && !isPending && (
                                  <button
                                    onClick={() => {
                                      const attendanceId = attendanceRecords.find(
                                        r => r.student?._id === student._id && 
                                        new Date(r.date).toISOString().split('T')[0] === selectedDate
                                      )?._id;
                                      if (attendanceId) {
                                        setDeleteTarget({ type: 'attendance', id: attendanceId });
                                        setShowDeleteConfirm(true);
                                      }
                                    }}
                                    className="text-sm text-red-600 hover:text-red-800 font-medium"
                                  >
                                    Delete
                                  </button>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {(!filteredStudents || filteredStudents.length === 0) && (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <p className="text-gray-500 text-lg font-light">
                        {searchTerm ? 'No students match your search' : 'No students found in this class and section'}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Marks Tab */}
              {activeTab === 'marks' && !testLoading && (
                <div className="space-y-6">
                  {filteredStudents && filteredStudents.map((student) => {
                    const groupedTests = getStudentTestsBySubject(student._id);
                    const hasTests = Object.keys(groupedTests).length > 0;
                    
                    return (
                      <div key={student._id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                        {/* Student Header */}
                        <div className="bg-gradient-to-r from-indigo-200 to-purple-200 px-6 py-4 border-b">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                              <h4 className="text-lg font-medium text-gray-800">{student.fullName}</h4>
                              <div className="flex items-center gap-3 mt-1">
                                <span className="text-sm text-gray-500">Roll No: {student.rollNumber}</span>
                                <span className="text-gray-300">|</span>
                                <button
                                  onClick={() => copyToClipboard(student._id)}
                                  className="inline-flex items-center gap-1 text-sm font-mono text-indigo-600 hover:text-indigo-800"
                                >
                                  <span>ID: {student._id.slice(-6)}</span>
                                  {copySuccess === student._id && (
                                    <span className="text-green-600">✓</span>
                                  )}
                                </button>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="text-right">
                                <p className="text-sm text-gray-500">Average</p>
                                <p className={`text-xl font-semibold ${
                                  parseFloat(getStudentAverage(student._id)) >= 75 
                                    ? 'text-green-600' 
                                    : parseFloat(getStudentAverage(student._id)) >= 60 
                                      ? 'text-yellow-600' 
                                      : 'text-red-600'
                                }`}>
                                  {getStudentAverage(student._id)}
                                </p>
                              </div>
                              <button
                                onClick={() => handleAddTest(student)}
                                className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 
                                         text-white rounded-lg text-sm font-medium
                                         hover:shadow-lg transform hover:scale-105 
                                         transition-all duration-300 flex items-center gap-2"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                                Add Test
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Tests by Subject */}
                        {hasTests ? (
                          <div className="p-6 space-y-6">
                            {Object.entries(groupedTests).map(([subject, tests]) => (
                              <div key={subject} className="border rounded-xl overflow-hidden">
                                <div className="bg-gray-600 px-4 py-3 border-b">
                                  <h5 className="font-medium text-white">{subject}</h5>
                                </div>
                                
                                {/* Mobile Test Cards */}
                                <div className="block sm:hidden p-3 space-y-1">
                                  {tests.map((test) => {
                                    const canEditDelete = isTeacherOwner(test);
                                    return (
                                      <div key={test._id} className="bg-gray-200 rounded-lg p-3 border border-gray-200">
                                        <div className="flex justify-between items-start mb-2">
                                          <div>
                                            <p className="font-medium text-gray-800">{test.testName}</p>
                                            <p className="text-xs text-gray-500">
                                              {new Date(test.testDate).toLocaleDateString('en-US', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric'
                                              })}
                                            </p>
                                          </div>
                                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            test.grade === 'A+' || test.grade === 'A' ? 'bg-green-100 text-green-800' :
                                            test.grade === 'B+' || test.grade === 'B' ? 'bg-blue-100 text-blue-800' :
                                            test.grade === 'C+' || test.grade === 'C' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                          }`}>
                                            {test.grade}
                                          </span>
                                        </div>
                                        
                                        <div className="flex items-center justify-between">
                                          <div className="flex items-center gap-4">
                                            <div>
                                              <p className="text-xs text-gray-500">Marks</p>
                                              <p className="text-sm text-black font-medium">
                                                {test.obtainedMarks}/{test.totalMarks}
                                              </p>
                                            </div>
                                            <div className="h-8 w-px bg-gray-200"></div>
                                            <div>
                                              <p className="text-xs text-gray-500">Percentage</p>
                                              <p className={`text-sm font-semibold ${
                                                test.percentage >= 75 ? 'text-green-600' :
                                                test.percentage >= 60 ? 'text-yellow-600' : 'text-red-600'
                                              }`}>
                                                {test.percentage?.toFixed(1)}%
                                              </p>
                                            </div>
                                          </div>
                                          
                                          {canEditDelete && (
                                            <div className="flex items-center gap-1">
                                              <button
                                                onClick={() => handleEditTest(test)}
                                                className="p-1.5 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                              >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                              </button>
                                              <button
                                                onClick={() => handleDeleteTest(test)}
                                                className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                              >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                              </button>
                                            </div>
                                          )}
                                        </div>
                                        
                                        {test.remarks && (
                                          <p className="text-xs text-gray-500 italic border-t border-gray-100 pt-2 mt-2">
                                            Note: {test.remarks}
                                          </p>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                                
                                {/* Desktop Test Table */}
                                <div className="hidden sm:block overflow-x-auto">
                                  <table className="w-full">
                                    <thead className="bg-gray-50">
                                      <tr>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Date</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Test Name</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Marks</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Percentage</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Grade</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Actions</th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                      {tests.map((test) => {
                                        const canEditDelete = isTeacherOwner(test);
                                        return (
                                          <tr key={test._id} className="hover:bg-gray-50">
                                            <td className="px-4 py-3 text-sm">
                                              {new Date(test.testDate).toLocaleDateString('en-US', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric'
                                              })}
                                            </td>
                                            <td className="px-4 py-3 text-sm font-medium text-gray-900">{test.testName}</td>
                                            <td className="px-4 py-3 text-sm">
                                              {test.obtainedMarks}/{test.totalMarks}
                                            </td>
                                            <td className="px-4 py-3">
                                              <span className={`text-sm font-semibold ${
                                                test.percentage >= 75 ? 'text-green-600' :
                                                test.percentage >= 60 ? 'text-yellow-600' : 'text-red-600'
                                              }`}>
                                                {test.percentage?.toFixed(1)}%
                                              </span>
                                            </td>
                                            <td className="px-4 py-3">
                                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                test.grade === 'A+' || test.grade === 'A' ? 'bg-green-100 text-green-800' :
                                                test.grade === 'B+' || test.grade === 'B' ? 'bg-blue-100 text-blue-800' :
                                                test.grade === 'C+' || test.grade === 'C' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-red-100 text-red-800'
                                              }`}>
                                                {test.grade}
                                              </span>
                                            </td>
                                            <td className="px-4 py-3">
                                              {canEditDelete ? (
                                                <div className="flex items-center gap-2">
                                                  <button
                                                    onClick={() => handleEditTest(test)}
                                                    className="p-1.5 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                                    title="Edit"
                                                  >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                  </button>
                                                  <button
                                                    onClick={() => handleDeleteTest(test)}
                                                    className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                    title="Delete"
                                                  >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                  </button>
                                                </div>
                                              ) : (
                                                <span className="text-xs text-gray-400 italic">Read only</span>
                                              )}
                                            </td>
                                          </tr>
                                        );
                                      })}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="p-8 text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                              </svg>
                            </div>
                            <p className="text-gray-500">No tests added yet. Click "Add Test" to add marks.</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Initial State */}
          {!showStudents && (
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-12 text-center border-2 border-dashed border-gray-300">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full mx-auto mb-4 
                            flex items-center justify-center">
                <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-gray-700 mb-2">Select Your Class & Section</h3>
              <p className="text-sm text-gray-500">Choose your class and section above to manage attendance and marks</p>
            </div>
          )}

          {/* Add/Edit Test Modal */}
          {showMarksModal && (selectedStudent || editingTest) && (
            <div className="fixed inset-0 text-black bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
              <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl">
                <div className="flex justify-between items-center mb-4 sticky top-0 bg-white">
                  <h3 className="text-xl font-light text-gray-800">
                    {editingTest ? 'Edit Test Marks' : 'Add Test Marks'}
                  </h3>
                  <button
                    onClick={() => {
                      setShowMarksModal(false);
                      resetTestForm();
                      setSelectedStudent(null);
                    }}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  Student: <span className="font-semibold text-indigo-600">
                    {editingTest 
                      ? editingTest.student?.fullName 
                      : selectedStudent?.fullName}
                  </span>
                </p>

                <div className="space-y-4">
                  {!editingTest && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Subject</label>
                        <select
                          value={newTest.subject}
                          onChange={(e) => setNewTest({...newTest, subject: e.target.value})}
                          className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg 
                                   focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
                                   transition-all duration-200"
                          required
                        >
                          <option value="">Select Subject</option>
                          {getSubjectOptions().map(sub => (
                            <option key={sub} value={sub}>{sub}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Test Name</label>
                        <input
                          type="text"
                          value={newTest.testName}
                          onChange={(e) => setNewTest({...newTest, testName: e.target.value})}
                          placeholder="e.g., Unit Test 1, Half Yearly"
                          className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg 
                                   focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
                                   transition-all duration-200"
                          required
                        />
                      </div>
                    </>
                  )}

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Total Marks</label>
                      <input
                        type="number"
                        value={newTest.totalMarks}
                        onChange={(e) => setNewTest({...newTest, totalMarks: e.target.value})}
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg 
                                 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
                                 transition-all duration-200"
                        min="1"
                        max="100"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Obtained Marks</label>
                      <input
                        type="number"
                        value={newTest.obtainedMarks}
                        onChange={(e) => setNewTest({...newTest, obtainedMarks: e.target.value})}
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg 
                                 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
                                 transition-all duration-200"
                        min="0"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Test Date</label>
                    <input
                      type="date"
                      value={newTest.testDate}
                      onChange={(e) => setNewTest({...newTest, testDate: e.target.value})}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg 
                               focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
                               transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Remarks (Optional)</label>
                    <textarea
                      value={newTest.remarks}
                      onChange={(e) => setNewTest({...newTest, remarks: e.target.value})}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg 
                               focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
                               transition-all duration-200 resize-none"
                      rows="2"
                      placeholder="Any remarks about the test..."
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={handleSaveTest}
                      disabled={testLoading}
                      className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 
                               text-white py-2.5 px-4 rounded-lg font-medium
                               hover:shadow-lg transform hover:scale-105 
                               transition-all duration-300 disabled:opacity-50
                               flex items-center justify-center gap-2"
                    >
                      {testLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                          Saving...
                        </>
                      ) : (
                        editingTest ? 'Update Test' : 'Save Test'
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setShowMarksModal(false);
                        resetTestForm();
                        setSelectedStudent(null);
                      }}
                      className="flex-1 bg-gray-200 text-gray-700 py-2.5 px-4 rounded-lg font-medium
                               hover:bg-gray-300 transform hover:scale-105 
                               transition-all duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Delete Confirmation Modal */}
          {showDeleteConfirm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
              <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
                <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-light text-gray-800 mb-2 text-center">Confirm Delete</h3>
                
                <p className="text-sm text-gray-600 mb-6 text-center">
                  {deleteTarget?.type === 'test' 
                    ? `Are you sure you want to delete this test record? This action cannot be undone.`
                    : `Are you sure you want to delete this attendance record? This action cannot be undone.`}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={confirmDelete}
                    className="flex-1 bg-gradient-to-r from-red-500 to-red-600 
                             text-white py-3 px-4 rounded-xl font-medium
                             hover:shadow-lg transform hover:scale-105 
                             transition-all duration-300"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setShowDeleteConfirm(false);
                      setDeleteTarget(null);
                    }}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium
                             hover:bg-gray-300 transform hover:scale-105 
                             transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
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