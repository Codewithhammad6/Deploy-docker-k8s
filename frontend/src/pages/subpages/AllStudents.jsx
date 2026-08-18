import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStudentStore from '../../store/studentStore.js';
import useUserStore from '../../store/userStore.js';

export default function AllStudents() {
  const navigate = useNavigate();
  const { user, getAllUsers, allUsers } = useUserStore(); // Get current logged-in user
  
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // Search within class/section
  const [globalSearchTerm, setGlobalSearchTerm] = useState(''); // Global search state (now only searches by name)
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [copySuccess, setCopySuccess] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [showClassSection, setShowClassSection] = useState(false);
  const [creatorNames, setCreatorNames] = useState({}); // Cache for creator names
  const [classSectionCounts, setClassSectionCounts] = useState({}); // Store counts for each class-section
  const [globalSearchResults, setGlobalSearchResults] = useState([]); // Store global search results
  const [isGlobalSearching, setIsGlobalSearching] = useState(false); // Global search loading state
  const [sectionSearchResults, setSectionSearchResults] = useState([]); // Store search results within section
  const [isSectionSearching, setIsSectionSearching] = useState(false); // Section search loading state

  // Get store functions and state
  const { 
    students, 
    loading,  
    totalPages,
    getStudentsByClassAndSection,
    deleteStudent, 
    updateStudent,
    searchStudents,
    getTotalStudentsCount,
    totalStudents // Get total students count from store
  } = useStudentStore();

  // Dynamic sections based on class
  const sectionOptionsByClass = {
    // Classes 6-8 have 3 sections
    '6': ['Iqbal', 'Quaid', 'Liaqat'],
    '7': ['Iqbal', 'Quaid', 'Liaqat'],
    '8': ['Iqbal', 'Quaid', 'Liaqat'],
    
    // Classes 9-10 have 4 sections  
    '9': ['Iqbal', 'Liaqat', 'Tariq', 'Excellent'],
    '10': ['Iqbal', 'Liaqat', 'Tariq', 'Excellent']
  };

  // Component mount
  useEffect(() => {
    getTotalStudentsCount();
    getAllUsers();
  }, []);

  // Load students when class and section are selected
  useEffect(() => {
    if (selectedClass && selectedSection) {
      loadStudents();
      setShowClassSection(true);
      // Clear searches when changing section
      setSearchTerm('');
      setSectionSearchResults([]);
      setGlobalSearchTerm(''); 
      setGlobalSearchResults([]);
    } else {
      setShowClassSection(false);
    }
  }, [selectedClass, selectedSection, currentPage]);

  // Load creator names when students change
  useEffect(() => {
    if (students && students.length > 0) {
      loadCreatorNames(students);
    }
  }, [students]);

  // Load creator names for global search results
  useEffect(() => {
    if (globalSearchResults && globalSearchResults.length > 0) {
      loadCreatorNames(globalSearchResults);
    }
  }, [globalSearchResults]);

  // Load creator names for section search results
  useEffect(() => {
    if (sectionSearchResults && sectionSearchResults.length > 0) {
      loadCreatorNames(sectionSearchResults);
    }
  }, [sectionSearchResults]);

  // Load all students count
  useEffect(() => {
    loadAllStudentsCount();
  }, []);

  // Load students based on filters
  const loadStudents = async () => {
    if (!selectedClass || !selectedSection) return;
    
    const result = await getStudentsByClassAndSection(selectedClass, selectedSection, currentPage, 10);
    
    // Update section count for current class-section
    if (result.success) {
      setClassSectionCounts(prev => ({
        ...prev,
        [`${selectedClass}-${selectedSection}`]: result.data.total
      }));
    }
  };

  // Load all students count and section-wise counts
  const loadAllStudentsCount = async () => {
    try {
      const classOptions = ['6', '7', '8', '9', '10'];
      const counts = {};
      
      for (const cls of classOptions) {
        const sections = sectionOptionsByClass[cls] || [];
        for (const section of sections) {
          const key = `${cls}-${section}`;
          counts[key] = 0;
        }
      }
      
      setClassSectionCounts(counts);
    } catch (error) {
      console.error('Error loading counts:', error);
    }
  };

  // Load creator names for any student list
  const loadCreatorNames = async (studentList) => {
    const names = { ...creatorNames };
    
    for (const student of studentList) {
      if (student.createdBy && !names[student.createdBy]) {
        const foundUser = allUsers.find(u => 
          u._id === student.createdBy || u.id === student.createdBy
        );
        
        if (foundUser) {
          names[student.createdBy] = foundUser.name || foundUser.email || 'Unknown Teacher';
        } else {
          names[student.createdBy] = 'Unknown Teacher';
        }
      }
    }
    
    setCreatorNames(names);
  };

  // Handle global search - MODIFIED TO ONLY SEARCH BY NAME
  const handleGlobalSearch = async () => {
    if (globalSearchTerm.trim()) {
      setIsGlobalSearching(true);
      const result = await searchStudents(globalSearchTerm);
      if (result.success) {
        // Filter results client-side to only include name matches
        const nameOnlyResults = (result.students || []).filter(student => 
          student.fullName?.toLowerCase().includes(globalSearchTerm.toLowerCase().trim())
        );
        setGlobalSearchResults(nameOnlyResults);
      }
      setIsGlobalSearching(false);
    } else {
      setGlobalSearchResults([]);
    }
  };

  // Handle global search input change with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (globalSearchTerm) {
        handleGlobalSearch();
      } else {
        setGlobalSearchResults([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [globalSearchTerm]);

  // Handle search within selected class/section
  const handleSectionSearch = async () => {
    if (searchTerm.trim() && selectedClass && selectedSection) {
      setIsSectionSearching(true);
      
      try {
        // First get all students for this class/section (get a large limit to include all)
        const result = await getStudentsByClassAndSection(selectedClass, selectedSection, 1, 1000);
        
        if (result.success && result.data.students) {
          // Client-side filtering to search within this specific class/section
          const searchLower = searchTerm.toLowerCase().trim();
          const filtered = result.data.students.filter(student => 
            (student.fullName?.toLowerCase() || '').includes(searchLower) ||
            (student.fatherName?.toLowerCase() || '').includes(searchLower) ||
            (student.rollNumber?.toLowerCase() || '').includes(searchLower) ||
            (student.contactNumber?.toLowerCase() || '').includes(searchLower)
          );
          
          setSectionSearchResults(filtered);
        }
      } catch (error) {
        console.error('Error searching within section:', error);
        setSectionSearchResults([]);
      }
      
      setIsSectionSearching(false);
    } else {
      setSectionSearchResults([]);
    }
  };

  // Handle section search input change with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm) {
        handleSectionSearch();
      } else if (selectedClass && selectedSection) {
        setSectionSearchResults([]);
        loadStudents(); // Reload original students when search is cleared
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedClass, selectedSection]);

  // Handle add new student
  const handleAddNew = () => {
    navigate('/add-students');
  };

  // Handle view details
  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    setShowDetailModal(true);
    setIsEditing(false);
  };

  // Handle edit
  const handleEdit = (student) => {
    setSelectedStudent(student);
    setEditFormData({
      fullName: student.fullName,
      rollNumber: student.rollNumber,
      class: student.class,
      section: student.section,
      fatherName: student.fatherName,
      contactNumber: student.contactNumber,
      address: student.address,
      status: student.status
    });
    setIsEditing(true);
    setShowDetailModal(true);
  };

  // Handle edit form change
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Save edit
  const handleSaveEdit = async () => {
    if (!selectedStudent?._id) return;
    
    const result = await updateStudent(selectedStudent._id, editFormData);
    
    if (result.success) {
      setIsEditing(false);
      setSelectedStudent(result.data.student);
      
      // Reload appropriate data
      if (globalSearchTerm) {
        handleGlobalSearch();
      } else if (selectedClass && selectedSection) {
        if (searchTerm) {
          handleSectionSearch(); // Reload section search results
        } else {
          loadStudents(); // Reload regular students
        }
      }
    }
  };

  // Handle delete
  const handleDelete = (student) => {
    setSelectedStudent(student);
    setShowDeleteModal(true);
    setShowDetailModal(false);
  };

  // Confirm delete
  const confirmDelete = async () => {
    if (!selectedStudent?._id) return;
    
    const result = await deleteStudent(selectedStudent._id);
    
    if (result.success) {
      setShowDeleteModal(false);
      setSelectedStudent(null);
      
      // Reload appropriate data
      if (globalSearchTerm) {
        handleGlobalSearch();
      } else if (selectedClass && selectedSection) {
        if (searchTerm) {
          handleSectionSearch(); // Reload section search results
        } else {
          loadStudents(); // Reload regular students
        }
      }
    }
  };

  // Copy ID to clipboard
  const copyToClipboard = (id) => {
    navigator.clipboard.writeText(id);
    setCopySuccess(id);
    setTimeout(() => setCopySuccess(''), 2000);
  };

  // Check if current user is the creator of this student
  const isCreator = (student) => {
    if (!user || !student?.createdBy) return false;
    
    const creatorId = typeof student.createdBy === 'object' 
      ? student.createdBy._id 
      : student.createdBy;
    
    const currentUserId = user._id || user.id;
    
    return creatorId === currentUserId;
  };

  // Get creator name from cache
  const getCreatorName = (student) => {
    if (!student?.createdBy) return 'Unknown';
    
    const creatorId = typeof student.createdBy === 'object' 
      ? student.createdBy
      : student.createdBy;
    
    return creatorNames[creatorId] || 'Loading...';
  };

  // Get current sections based on selected class
  const getCurrentSections = () => {
    if (!selectedClass) return [];
    return sectionOptionsByClass[selectedClass] || [];
  };

  // Class options
  const classOptions = ['6', '7', '8', '9', '10'];

  // Determine which students to display with proper priority:
  // 1. Global search results (if global search active)
  // 2. Section search results (if searching within section)
  // 3. Regular students (if viewing section)
  const displayStudents = globalSearchTerm 
    ? globalSearchResults 
    : (searchTerm && selectedClass && selectedSection && sectionSearchResults.length > 0)
      ? sectionSearchResults
      : (searchTerm && selectedClass && selectedSection && sectionSearchResults.length === 0 && !isSectionSearching)
        ? [] // No results found in section search
        : students;

  const isLoading = loading || isGlobalSearching || isSectionSearching;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-4 sm:py-8 px-3 sm:px-6 lg:px-8">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Add Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-lg 
                       transition-all duration-200 border border-gray-200/50 group"
              aria-label="Go back"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-indigo-600 transition-colors" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                All Students Record
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 font-light mt-0.5">
                {user?.name ? `Welcome, ${user.name}` : 'Manage and view all students'}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Total Students Badge */}
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl px-4 py-2.5 
                          shadow-sm flex items-center justify-between sm:justify-start gap-3">
              <span className="text-xs sm:text-sm font-light text-gray-600">Total Students</span>
              <span className="text-xl sm:text-2xl font-bold text-indigo-600">{totalStudents}</span>
            </div>

            {/* Add New Student Button */}
            <button
              onClick={handleAddNew}
              className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 
                       text-white px-5 sm:px-6 py-3 rounded-xl shadow-lg hover:shadow-xl
                       transform hover:scale-105 active:scale-95
                       transition-all duration-300 flex items-center justify-center gap-2
                       font-medium text-sm sm:text-base overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-300" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                </svg>
                <span>Add New Student</span>
              </span>
            </button>
          </div>
        </div>

        {/* GLOBAL SEARCH BAR - Always visible at the top - MODIFIED PLACEHOLDER */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 mb-6 border border-gray-100">
          <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-2 sm:mb-3">
            🔍 Global Search - Search Students By Name Only (Across All Classes & Sections)
          </label>
          <div className="relative group">
            <input
              type="text"
              value={globalSearchTerm}
              onChange={(e) => {
                setGlobalSearchTerm(e.target.value);
                // Clear section search when using global search
                setSearchTerm('');
                setSectionSearchResults([]);
              }}
              placeholder="Search by student name only..."
              className="w-full px-4 sm:px-6 py-3 sm:py-4 pl-12 sm:pl-14 pr-12 sm:pr-14 
                       border-2 border-indigo-200 rounded-lg sm:rounded-xl 
                       focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
                       font-light text-sm sm:text-base text-gray-800 bg-white 
                       placeholder-gray-400 transition-all duration-200 shadow-sm"
            />
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 absolute left-4 sm:left-5 top-3.5 sm:top-4 
                          group-focus-within:text-indigo-500 transition-colors" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            
            {globalSearchTerm && (
              <button
                onClick={() => setGlobalSearchTerm('')}
                className="absolute right-4 sm:right-5 top-3.5 sm:top-4 text-gray-400 
                         hover:text-gray-600 transition-colors bg-white rounded-full p-1"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {globalSearchTerm && (
            <p className="text-xs text-gray-500 mt-2">
              {isGlobalSearching ? 'Searching...' : `Found ${globalSearchResults.length} students with matching names`}
            </p>
          )}
        </div>

        {/* Class and Section Selection */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 mb-6 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Class Filter */}
            <div className="flex-1">
              <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-2 sm:mb-3">
                📚 Select Class
              </label>
              <div className="flex flex-wrap gap-2">
                {classOptions.map(cls => (
                  <button
                    key={cls}
                    onClick={() => {
                      setSelectedClass(cls);
                      setSelectedSection(''); // Reset section when class changes
                      setCurrentPage(1);
                      setSearchTerm(''); // Clear section search
                      setSectionSearchResults([]);
                      setGlobalSearchTerm(''); // Clear global search when class selected
                      setGlobalSearchResults([]);
                    }}
                    className={`relative px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium 
                              transition-all duration-200 shadow-sm
                              ${selectedClass === cls 
                                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-200 scale-105' 
                                : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow border border-gray-200'}`}
                  >
                    Class {cls}
                  </button>
                ))}
              </div>
            </div>

            {/* Section Filter - Dynamic based on selected class */}
            <div className="flex-1">
              <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-2 sm:mb-3">
                📌 Select Section
              </label>
              <div className="flex flex-wrap gap-2">
                {selectedClass ? (
                  getCurrentSections().map(section => (
                    <button
                      key={section}
                      onClick={() => {
                        setSelectedSection(section);
                        setCurrentPage(1);
                        setSearchTerm(''); // Clear section search
                        setSectionSearchResults([]);
                        setGlobalSearchTerm(''); // Clear global search when section selected
                        setGlobalSearchResults([]);
                      }}
                      className={`relative px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium 
                                transition-all duration-200 shadow-sm
                                ${selectedSection === section 
                                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-200 scale-105' 
                                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow border border-gray-200'}`}
                    >
                      {section}
                    </button>
                  ))
                ) : (
                  <div className="text-sm text-gray-400 italic py-2">Please select a class first</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Selected Section Stats Card - Only show when class/section selected and no global search */}
        {selectedClass && selectedSection && !globalSearchTerm && (
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 mb-6 text-white">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-sm opacity-90">Currently Viewing</p>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Class {selectedClass} - {selectedSection}
                </h3>
              </div>
              <div className="text-center">
                <p className="text-sm opacity-90">
                  {searchTerm ? 'Search Results' : 'Students in this section'}
                </p>
                <p className="text-3xl sm:text-4xl font-bold">
                  {searchTerm ? sectionSearchResults.length : students.length}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Global Search Results Stats */}
        {globalSearchTerm && globalSearchResults.length > 0 && (
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 mb-6 text-white">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-sm opacity-90">Global Name Search Results for</p>
                <h3 className="text-xl sm:text-2xl font-bold">"{globalSearchTerm}"</h3>
              </div>
              <div className="text-center">
                <p className="text-sm opacity-90">Students Found</p>
                <p className="text-3xl sm:text-4xl font-bold">{globalSearchResults.length}</p>
              </div>
            </div>
          </div>
        )}

        {/* Search Bar within Class/Section - Only show when class/section selected and no global search */}
        {showClassSection && !globalSearchTerm && (
          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 mb-6 border border-gray-100">
            <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-2 sm:mb-3">
              🔎 Search in Class {selectedClass} - {selectedSection} (Filter within this section only)
            </label>
            <div className="relative group">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, roll no, father's name, contact..."
                className="w-full px-4 sm:px-6 py-2.5 sm:py-3 pl-10 sm:pl-12 pr-10 sm:pr-12 
                         border-2 border-gray-200 rounded-lg sm:rounded-xl 
                         focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
                         font-light text-sm sm:text-base text-gray-800 bg-white/80 
                         placeholder-gray-400 transition-all duration-200"
              />
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-3 sm:left-4 top-3 sm:top-3.5 
                            group-focus-within:text-indigo-500 transition-colors" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 sm:right-4 top-3 sm:top-3.5 text-gray-400 
                           hover:text-gray-600 transition-colors"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            {searchTerm && (
              <p className="text-xs text-gray-500 mt-2">
                {isSectionSearching ? 'Searching...' : `Found ${sectionSearchResults.length} students in this section`}
              </p>
            )}
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-12 sm:py-20">
            <div className="relative">
              <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-4 border-indigo-200 border-t-indigo-600"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-3 w-3 sm:h-4 sm:w-4 bg-indigo-600 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        )}

        {/* Students Table/Cards */}
        {!isLoading && (globalSearchTerm || showClassSection) && (
          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Student Name</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Roll No</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Class</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Section</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Father's Name</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Added By</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {displayStudents.map((student) => {
                    const canEditDelete = isCreator(student);
                    const creatorName = getCreatorName(student);
                    
                    return (
                      <tr key={student._id} className="hover:bg-indigo-50/30 transition-colors duration-150 group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-mono text-gray-600 bg-gray-100 px-2 py-1 rounded-lg group-hover:bg-white">
                              {student._id.slice(-6)}
                            </span>
                            <button
                              onClick={() => copyToClipboard(student._id)}
                              className="text-indigo-500 hover:text-indigo-700 hover:scale-110 transition-transform"
                              title="Copy ID"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                              </svg>
                            </button>
                            {copySuccess === student._id && (
                              <span className="text-xs text-green-600 animate-pulse">Copied!</span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <button 
                            onClick={() => handleViewDetails(student)}
                            className="text-sm font-medium text-gray-900 hover:text-indigo-600 
                                     hover:underline transition-colors text-left"
                          >
                            {student.fullName}
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600 font-mono">{student.rollNumber}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600">{student.class}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600">{student.section}</span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{student.fatherName}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{student.contactNumber}</td>
                        <td className="px-6 py-4">
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                            canEditDelete 
                              ? 'bg-green-100 text-green-800 border border-green-200' 
                              : 'bg-blue-100 text-blue-800 border border-blue-200'
                          }`}>
                            {creatorName}
                            {canEditDelete && ' (You)'}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                            student.status === 'active' ? 'bg-green-100 text-green-800 border border-green-200' :
                            student.status === 'inactive' ? 'bg-gray-100 text-gray-800 border border-gray-200' :
                            student.status === 'transferred' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' :
                            'bg-blue-100 text-blue-800 border border-blue-200'
                          }`}>
                            {student.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {canEditDelete ? (
                              <>
                                <button
                                  onClick={() => handleEdit(student)}
                                  className="p-2 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 
                                           rounded-lg transition-all duration-200 hover:scale-110"
                                  title="Edit"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                  </svg>
                                </button>
                                <button
                                  onClick={() => handleDelete(student)}
                                  className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 
                                           rounded-lg transition-all duration-200 hover:scale-110"
                                  title="Delete"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                </button>
                              </>
                            ) : (
                              <span className="text-xs text-gray-400 italic px-2 py-1 bg-gray-50 rounded-lg" title="Read only - You didn't create this student">
                                Read only
                              </span>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden space-y-3 p-3">
              {displayStudents.map((student) => {
                const canEditDelete = isCreator(student);
                const creatorName = getCreatorName(student);
                
                return (
                  <div 
                    key={student._id} 
                    className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm 
                             hover:shadow-md transition-all active:scale-[0.99]"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono bg-indigo-100 text-indigo-800 px-2 py-1 rounded-lg">
                          {student._id.slice(-6)}
                        </span>
                        <button
                          onClick={() => copyToClipboard(student._id)}
                          className="text-indigo-500 hover:text-indigo-700"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                          </svg>
                        </button>
                        {copySuccess === student._id && (
                          <span className="text-xs text-green-600 animate-pulse">Copied!</span>
                        )}
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        student.status === 'active' ? 'bg-green-100 text-green-800' :
                        student.status === 'inactive' ? 'bg-gray-100 text-gray-800' :
                        student.status === 'transferred' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {student.status}
                      </span>
                    </div>

                    <button 
                      onClick={() => handleViewDetails(student)}
                      className="w-full text-left"
                    >
                      <h3 className="text-base font-semibold text-gray-900 mb-2">
                        {student.fullName}
                      </h3>
                      
                      <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                        <div>
                          <span className="text-gray-500 text-xs">Roll No: </span>
                          <span className="font-medium text-gray-800">{student.rollNumber}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 text-xs">Class: </span>
                          <span className="font-medium text-gray-800">{student.class}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 text-xs">Section: </span>
                          <span className="font-medium text-gray-800">{student.section}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-1 text-sm">
                        <p className="flex items-center gap-2 text-gray-600">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          {student.fatherName}
                        </p>
                        <p className="flex items-center gap-2 text-gray-600">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {student.contactNumber}
                        </p>
                        <p className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                          <span className="font-medium">Added by:</span>
                          <span className={`px-2 py-0.5 rounded-full ${
                            canEditDelete ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                          }`}>
                            {creatorName}
                            {canEditDelete && ' (You)'}
                          </span>
                        </p>
                      </div>
                    </button>

                    <div className="flex gap-2 mt-4 pt-3 border-t border-gray-100">
                      {canEditDelete ? (
                        <>
                          <button
                            onClick={() => handleEdit(student)}
                            className="flex-1 py-2.5 text-indigo-600 hover:bg-indigo-50 rounded-lg 
                                     text-sm font-medium transition-colors flex items-center justify-center gap-1"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(student)}
                            className="flex-1 py-2.5 text-red-600 hover:bg-red-50 rounded-lg 
                                     text-sm font-medium transition-colors flex items-center justify-center gap-1"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Delete
                          </button>
                        </>
                      ) : (
                        <div className="w-full text-center py-2 text-xs text-gray-400 italic bg-gray-50 rounded-lg">
                          Read only - Added by {creatorName}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* No Data Message */}
            {displayStudents.length === 0 && !isLoading && (
              <div className="text-center py-12 sm:py-20">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-indigo-100 rounded-full mx-auto mb-4 
                              flex items-center justify-center">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-base sm:text-lg font-light mb-3">
                  {globalSearchTerm 
                    ? `No students found with name matching "${globalSearchTerm}"` 
                    : searchTerm 
                      ? `No students match "${searchTerm}" in Class ${selectedClass} - ${selectedSection}`
                      : `No students found in Class ${selectedClass} - ${selectedSection}`}
                </p>
                <button
                  onClick={handleAddNew}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 
                           text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 
                           transition-all duration-200 text-sm sm:text-base"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Add your first student
                </button>
              </div>
            )}
          </div>
        )}

        {/* No Data Message when neither search nor class/section selected */}
        {!globalSearchTerm && !showClassSection && !isLoading && (
          <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-12 text-center border-2 border-dashed border-gray-300">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full mx-auto mb-4 
                          flex items-center justify-center">
              <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-light text-gray-700 mb-2">Search or Select Class & Section</h3>
            <p className="text-sm text-gray-500">Use the global search bar above to find students by name across all classes, or select class and section to browse</p>
          </div>
        )}

        {/* Pagination - Only show when viewing class/section and no searches active */}
        {totalPages > 1 && showClassSection && !globalSearchTerm && !searchTerm && (
          <div className="flex justify-center items-center gap-2 sm:gap-3 mt-6">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white rounded-xl shadow-sm border border-gray-200
                       disabled:opacity-50 disabled:cursor-not-allowed
                       hover:bg-gray-50 hover:shadow transition-all text-sm sm:text-base
                       flex items-center gap-1 sm:gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>
            <span className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 
                           text-white rounded-xl shadow-md font-medium text-sm sm:text-base">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white rounded-xl shadow-sm border border-gray-200
                       disabled:opacity-50 disabled:cursor-not-allowed
                       hover:bg-gray-50 hover:shadow transition-all text-sm sm:text-base
                       flex items-center gap-1 sm:gap-2"
            >
              Next
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Detail/Edit Modal */}
      {showDetailModal && selectedStudent && (
        <div className="fixed inset-0 text-black bg-black/60 flex items-center justify-center p-4 z-50 
                      animate-fadeIn backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto
                        transform animate-slideUp shadow-2xl">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 
                          flex items-center justify-between text-white">
              <h2 className="text-xl font-light">
                {isEditing ? 'Edit Student' : 'Student Details'}
              </h2>
              <div className="flex items-center gap-2">
                {!isEditing && isCreator(selectedStudent) && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="p-2 text-white/90 hover:text-white hover:bg-white/10 
                             rounded-lg transition-all"
                    title="Edit"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                )}
                <button
                  onClick={() => {
                    setShowDetailModal(false);
                    setIsEditing(false);
                    setSelectedStudent(null);
                  }}
                  className="p-2 text-white/90 hover:text-white hover:bg-white/10 
                           rounded-lg transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {isEditing ? (
                // Edit Form
                <form onSubmit={(e) => { e.preventDefault(); handleSaveEdit(); }} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={editFormData.fullName || ''}
                        onChange={handleEditChange}
                        required
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg 
                                 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
                                 transition-all font-light"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Roll Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="rollNumber"
                        value={editFormData.rollNumber || ''}
                        onChange={handleEditChange}
                        required
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg 
                                 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
                                 transition-all font-light"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Class <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="class"
                        value={editFormData.class || ''}
                        onChange={handleEditChange}
                        required
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg 
                                 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
                                 transition-all font-light"
                      >
                        <option value="">Select Class</option>
                        {classOptions.map(cls => (
                          <option key={cls} value={cls}>Class {cls}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Section <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="section"
                        value={editFormData.section || ''}
                        onChange={handleEditChange}
                        required
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg 
                                 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
                                 transition-all font-light"
                      >
                        <option value="">Select Section</option>
                        {selectedClass && sectionOptionsByClass[selectedClass]?.map(section => (
                          <option key={section} value={section}>{section}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Father's Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fatherName"
                        value={editFormData.fatherName || ''}
                        onChange={handleEditChange}
                        required
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg 
                                 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
                                 transition-all font-light"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Contact Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="contactNumber"
                        value={editFormData.contactNumber || ''}
                        onChange={handleEditChange}
                        
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg 
                                 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
                                 transition-all font-light"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="address"
                        value={editFormData.address || ''}
                        onChange={handleEditChange}
                        
                        rows="2"
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg 
                                 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
                                 transition-all font-light resize-none"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 
                               text-white py-2.5 px-4 rounded-xl
                               hover:shadow-lg transform hover:scale-105 
                               transition-all duration-200 font-medium"
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditing(false);
                        setEditFormData({
                          fullName: selectedStudent.fullName,
                          rollNumber: selectedStudent.rollNumber,
                          class: selectedStudent.class,
                          section: selectedStudent.section,
                          fatherName: selectedStudent.fatherName,
                          contactNumber: selectedStudent.contactNumber,
                          address: selectedStudent.address
                        });
                      }}
                      className="flex-1 bg-gray-200 text-gray-700 py-2.5 px-4 rounded-xl
                               hover:bg-gray-300 transform hover:scale-105 
                               transition-all duration-200 font-medium"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                // View Details
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-indigo-50 p-4 rounded-xl">
                    <span className="text-sm font-medium text-indigo-600">Student ID</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-indigo-800 font-semibold">{selectedStudent._id.slice(-6)}</span>
                      <button
                        onClick={() => copyToClipboard(selectedStudent._id)}
                        className="text-indigo-600 hover:text-indigo-800"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                      </button>
                      {copySuccess === selectedStudent._id && (
                        <span className="text-xs text-green-600 animate-pulse">Copied!</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Full Name</p>
                      <p className="text-gray-800 font-medium">{selectedStudent.fullName}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Roll Number</p>
                      <p className="text-gray-800">{selectedStudent.rollNumber}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Class & Section</p>
                      <p className="text-gray-800">Class {selectedStudent.class} - {selectedStudent.section}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Father's Name</p>
                      <p className="text-gray-800">{selectedStudent.fatherName}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Contact Number</p>
                      <p className="text-gray-800">{selectedStudent.contactNumber}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Added By</p>
                      <p className={`text-sm font-medium ${isCreator(selectedStudent) ? 'text-green-600' : 'text-blue-600'}`}>
                        {getCreatorName(selectedStudent)}
                        {isCreator(selectedStudent) && ' (You)'}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Status</p>
                      <span className={`px-3 py-1.5 text-xs font-medium rounded-full ${
                        selectedStudent.status === 'active' ? 'bg-green-100 text-green-800' :
                        selectedStudent.status === 'inactive' ? 'bg-gray-100 text-gray-800' :
                        selectedStudent.status === 'transferred' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {selectedStudent.status}
                      </span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Added On</p>
                      <p className="text-gray-800">{new Date(selectedStudent.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div className="md:col-span-2 bg-gray-50 p-4 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Address</p>
                      <p className="text-gray-800">{selectedStudent.address}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    {isCreator(selectedStudent) ? (
                      <button
                        onClick={() => {
                          setShowDetailModal(false);
                          handleDelete(selectedStudent);
                        }}
                        className="flex-1 bg-gradient-to-r from-red-500 to-red-600 
                                 text-white py-2.5 px-4 rounded-xl
                                 hover:shadow-lg transform hover:scale-105 
                                 transition-all duration-200 font-medium"
                      >
                        Delete Student
                      </button>
                    ) : (
                      <div className="flex-1 bg-gray-100 text-gray-500 py-2.5 px-4 rounded-xl text-center text-sm">
                        Read only - Added by {getCreatorName(selectedStudent)}
                      </div>
                    )}
                    <button
                      onClick={() => {
                        setShowDetailModal(false);
                        setSelectedStudent(null);
                      }}
                      className="flex-1 bg-gray-200 text-gray-700 py-2.5 px-4 rounded-xl
                               hover:bg-gray-300 transform hover:scale-105 
                               transition-all duration-200 font-medium"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 
                      animate-fadeIn backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 transform animate-slideUp shadow-2xl">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full mx-auto mb-4 
                          flex items-center justify-center">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-light text-gray-800 mb-2 text-center">
              Confirm Delete
            </h3>
            
            <p className="text-sm sm:text-base text-gray-600 mb-6 text-center">
              Are you sure you want to delete <span className="font-semibold text-gray-900">{selectedStudent?.fullName}</span>? 
              This action cannot be undone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={confirmDelete}
                className="flex-1 bg-gradient-to-r from-red-500 to-red-600 
                         text-white py-3 px-4 rounded-xl
                         hover:from-red-600 hover:to-red-700
                         transform hover:scale-105 active:scale-95
                         transition-all duration-200 shadow-lg hover:shadow-xl
                         font-medium text-sm sm:text-base"
              >
                Delete
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-xl
                         hover:bg-gray-300 transform hover:scale-105 active:scale-95
                         transition-all duration-200 font-medium text-sm sm:text-base"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

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
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}