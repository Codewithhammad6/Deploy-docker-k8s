import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStudentStore from '../../store/studentStore.js';
import { getSectionsByClass, isValidClassSection } from '../../config/sections.js';
import toast from 'react-hot-toast';

export default function AddStudents() {
  const navigate = useNavigate();
  const { addStudent, checkRollNumber, loading } = useStudentStore();
  
  const [formData, setFormData] = useState({
    fullName: '',
    rollNumber: '',
    class: '',
    section: '',
    fatherName: '',
    contactNumber: '',
    address: '',
  });

  const [rollNumberError, setRollNumberError] = useState('');
  const [sectionError, setSectionError] = useState('');
  const [checkingRoll, setCheckingRoll] = useState(false);
  const [availableSections, setAvailableSections] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear errors when user changes relevant fields
    if (name === 'rollNumber' || name === 'class' || name === 'section') {
      setRollNumberError('');
      setSectionError('');
    }
  };

  // Update sections when class changes
  useEffect(() => {
    if (formData.class) {
      const sections = getSectionsByClass(formData.class);
      setAvailableSections(sections);
      setSectionError('');
      // Reset section if it's no longer valid for this class
      if (formData.section && !sections.includes(formData.section)) {
        setFormData(prev => ({ ...prev, section: '' }));
      }
    } else {
      setAvailableSections([]);
      setFormData(prev => ({ ...prev, section: '' }));
      setSectionError('');
    }
  }, [formData.class]);

  // Check roll number availability when user finishes typing
  const handleRollNumberBlur = async () => {
    if (!formData.rollNumber || !formData.class || !formData.section) return;

    if (!isValidClassSection(formData.class, formData.section)) {
      setRollNumberError('Invalid class-section combination');
      return;
    }

    setCheckingRoll(true);
    setRollNumberError('');
    
    const result = await checkRollNumber(
      formData.rollNumber, 
      formData.class, 
      formData.section
    );
    
    if (result?.exists) {
      setRollNumberError(`Roll #${formData.rollNumber} exists in Class ${formData.class}-${formData.section}`);
    }
    setCheckingRoll(false);
  };

  // Validation function
  const validateForm = () => {
    if (!formData.fullName.trim()) {
      toast.error('Full name required');
      return false;
    }
    if (!formData.rollNumber.trim()) {
      toast.error('Roll number required');
      return false;
    }
    if (!formData.class) {
      toast.error('Class required');
      return false;
    }
    if (!formData.section || !isValidClassSection(formData.class, formData.section)) {
      toast.error(`Invalid section for Class ${formData.class}. Select valid section.`);
      return false;
    }
    if (!formData.fatherName.trim()) {
      toast.error("Father's name required");
      return false;
    }
    if (rollNumberError) {
      toast.error(rollNumberError);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const result = await addStudent(formData);
    
    if (result && result.success) {
      console.log('Student added successfully!');
      setFormData({
        fullName: '',
        rollNumber: '',
        class: '',
        section: '',
        fatherName: '',
        contactNumber: '',
        address: '',
      });
      setRollNumberError('');
      setSectionError('');
    }
  };

  const handleCancel = () => {
    navigate('/admin-dashboard');
  };

  const classOptions = ['10', '9', '8', '7', '6'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-4 sm:py-8 px-3 sm:px-6 lg:px-8">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button 
              onClick={() => navigate(-1)}
              disabled={loading}
              className="p-2 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-lg 
                       transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                       border border-gray-200/50 group"
              aria-label="Go back"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-indigo-600 transition-colors" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Add New Student
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 font-light mt-0.5">
                Fill in the student details below
              </p>
            </div>
          </div>
          
          {/* Loading indicator */}
          {loading && (
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg border border-blue-200 w-full sm:w-auto">
              <svg className="animate-spin h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-sm text-blue-600 font-light">Saving student...</span>
            </div>
          )}
        </div>

        {/* Form Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          {/* Card Header Gradient */}
          <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          
          <div className="p-4 sm:p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Full Name & Roll Number Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 bg-gray-50/50 border-2 border-gray-200 
                               rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 
                               transition-all duration-200 outline-none text-sm sm:text-base text-gray-800 
                               placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Enter student's full name"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Roll Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l5 5a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-5-5A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="rollNumber"
                      value={formData.rollNumber}
                      onChange={handleChange}
                      onBlur={handleRollNumberBlur}
                      required
                      disabled={loading}
                      className={`w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 bg-gray-50/50 border-2 
                               ${rollNumberError ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-gray-200 focus:border-indigo-500 focus:ring-indigo-100'}
                               rounded-xl focus:bg-white focus:ring-4 
                               transition-all duration-200 outline-none text-sm sm:text-base text-gray-800 
                               placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed`}
                      placeholder="Enter roll number"
                    />
                    {checkingRoll && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <svg className="animate-spin h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                  {rollNumberError && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1 animate-pulse">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {rollNumberError}
                    </p>
                  )}
                </div>
              </div>

              {/* Class & Section Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Class <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <select
                      name="class"
                      value={formData.class}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 bg-gray-50/50 border-2 border-gray-200 
                               rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 
                               transition-all duration-200 outline-none text-sm sm:text-base text-gray-800 
                               appearance-none cursor-pointer disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                      <option value="" className="text-gray-400">Select Class</option>
                      {classOptions.map(cls => (
                        <option key={cls} value={cls} className="text-gray-800">Class {cls}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Section <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <select
                      name="section"
                      value={formData.section}
                      onChange={handleChange}
                      required
                      disabled={loading || availableSections.length === 0}
                      className={`w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 bg-gray-50/50 border-2 rounded-xl 
                               focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 
                               transition-all duration-200 outline-none text-sm sm:text-base text-gray-800 
                               appearance-none cursor-pointer disabled:bg-gray-100/50 disabled:cursor-not-allowed
                               \${sectionError ? 'border-red-400 ring-2 ring-red-100/50' : 'border-gray-200'}`}
                    >
                      <option value="" className="text-gray-400">
                        {availableSections.length === 0 
                          ? 'First select class' 
                          : 'Select section'
                        }
                      </option>
                      {availableSections.map(section => (
                        <option key={section} value={section}>{section}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {sectionError && (
                    <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1 animate-pulse">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {sectionError}
                    </p>
                  )}
                </div>
              </div>

              {/* Father's Name & Contact Number Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Father's Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 bg-gray-50/50 border-2 border-gray-200 
                               rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 
                               transition-all duration-200 outline-none text-sm sm:text-base text-gray-800 
                               placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Enter father's name"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Contact Number <span className="text-gray-400 text-xs">(Optional)</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 bg-gray-50/50 border-2 border-gray-200 
                               rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 
                               transition-all duration-200 outline-none text-sm sm:text-base text-gray-800 
                               placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Address Field */}
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">
                  Address <span className="text-gray-400 text-xs">(Optional)</span>
                </label>
                <div className="relative group">
                  <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    disabled={loading}
                    rows="3"
                    className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 bg-gray-50/50 border-2 border-gray-200 
                             rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 
                             transition-all duration-200 outline-none text-sm sm:text-base text-gray-800 
                             placeholder-gray-400 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Enter complete address (street, city, etc.)"
                  />
                </div>
              </div>

              {/* Form Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                <button
                  type="submit"
                  disabled={loading || !!rollNumberError || !!sectionError || availableSections.length === 0}
                  className="group relative flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 
                           text-white py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl font-medium
                           hover:from-indigo-700 hover:to-purple-700 active:from-indigo-800 active:to-purple-800
                           transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 
                           shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed 
                           disabled:hover:scale-100 disabled:shadow-lg
                           flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Adding Student...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                      <span>Add Student</span>
                    </>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={loading}
                  className="flex-1 bg-white border-2 border-gray-300 text-gray-700 py-3 sm:py-3.5 px-4 sm:px-6 
                           rounded-xl font-medium hover:bg-gray-50 hover:border-gray-400 
                           active:bg-gray-100 transform hover:scale-[1.02] active:scale-[0.98] 
                           transition-all duration-200 shadow-md hover:shadow-lg
                           disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                           flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Cancel</span>
                </button>
              </div>
            </form>

            {/* Additional Info */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-gray-500 text-center font-light">
                <span className="inline-flex items-center gap-1">
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Fields marked with <span className="text-red-500 font-medium">*</span> are required
                </span>
                <br />
                <span className="text-indigo-600 font-medium">Note: Sections are class-specific (6-8: Iqbal/Quaid/Liaqat, 9-10: Iqbal/Liaqat/Tariq/Excellent)</span>
              </p>
            </div>
          </div>
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

