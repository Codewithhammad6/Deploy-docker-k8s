import React from 'react';
import { useNavigate } from 'react-router-dom';
import userStore from '../store/userStore';

export default function HomePage() {
  const navigate = useNavigate();
  const {logoutUser} = userStore()

  const handleTeacherClick = () => {
    navigate('/teacher-dashboard');
  };

  const handleAdminClick = () => {
    navigate('/admin-dashboard');
  };

  const handleLogout = async () => {
    await logoutUser();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8 sm:py-12">
        {/* Top Buttons - Properly Arranged */}
        <div className="absolute top-4 left-4 right-4 sm:left-6 sm:right-6 md:left-8 md:right-8 flex flex-row sm:flex-row items-center justify-between gap-3">
          {/* Developer Info Button - Left Side */}
          <button
            onClick={()=>navigate('/developer-info')}
            className="group relative bg-gradient-to-r from-purple-600 to-indigo-600 
                     text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 
                     rounded-full shadow-lg hover:shadow-xl 
                     transform hover:scale-105 active:scale-95
                     transition-all duration-300 flex items-center gap-2
                     border border-white/20 backdrop-blur-sm w-full sm:w-auto justify-center"
          >
            <span className="text-xs sm:text-sm md:text-base font-medium">
              Developer Info
            </span>
            
            {/* Simple static dot */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </button>

          {/* Logout Button - Right Side */}
          <button
            onClick={handleLogout}
            className="group flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 
                     bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl
                     border border-gray-200/50 hover:border-red-200
                     transform hover:scale-105 active:scale-95
                     transition-all duration-300 w-full sm:w-auto"
            aria-label="Logout"
          >
            <svg className="w-5 h-5 sm:w-5 sm:h-5 text-gray-600 group-hover:text-red-600 transition-colors" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="text-sm sm:text-base font-medium text-gray-600 group-hover:text-red-600 transition-colors">
              Logout
            </span>
          </button>
        </div>

        {/* Main Content - Added margin-top to prevent overlap with buttons */}
        <div className="w-full max-w-4xl mx-auto text-center px-4 mt-15 sm:mt-20 md:mt-16">


          {/* Icon/Logo */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <div className="inline-flex p-3 sm:p-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl shadow-xl">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 sm:mb-4">
            Choose Your Portal
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-500 font-light max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
            Select your role to access the appropriate dashboard and start managing your educational institution
          </p>

          {/* Decorative Line */}
          <div className="flex justify-center mb-8 sm:mb-12 md:mb-16">
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
          </div>

          {/* Role Cards */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 w-full max-w-2xl mx-auto">
            {/* Teacher Card */}
            <div 
              className="group relative flex-1 bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl 
                       shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 
                       transition-all duration-500 cursor-pointer border border-white/20
                       overflow-hidden"
              onClick={handleTeacherClick}
            >
              {/* Card Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className="relative p-6 sm:p-8 md:p-10 flex flex-col items-center">
                <div className="relative mb-4 sm:mb-6">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-0 
                                group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 
                                bg-gradient-to-br from-blue-500 to-indigo-600 
                                rounded-2xl sm:rounded-3xl flex items-center justify-center
                                shadow-lg group-hover:shadow-xl transform group-hover:rotate-3
                                transition-all duration-500">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2
                             group-hover:text-blue-600 transition-colors duration-300">
                  Teacher Portal
                </h2>
                <p className="text-sm sm:text-base text-gray-500 text-center font-light mb-4 sm:mb-6
                            group-hover:text-gray-600 transition-colors duration-300">
                  Access attendance management, marks entry, and student records
                </p>

                {/* Features List */}
                <div className="w-full space-y-2 mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Mark daily attendance</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Add and manage test results</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>View student progress reports</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="w-full">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2.5 sm:py-3 px-4 rounded-xl
                                font-medium text-sm sm:text-base shadow-md
                                group-hover:shadow-lg transform group-hover:scale-105
                                transition-all duration-300 flex items-center justify-center gap-2">
                    Enter Teacher Portal
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Admin Card */}
            <div 
              className="group relative flex-1 bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl 
                       shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 
                       transition-all duration-500 cursor-pointer border border-white/20
                       overflow-hidden"
              onClick={handleAdminClick}
            >
              {/* Card Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-600/5 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className="relative p-6 sm:p-8 md:p-10 flex flex-col items-center">
                <div className="relative mb-4 sm:mb-6">
                  <div className="absolute inset-0 bg-amber-500 rounded-full blur-xl opacity-0 
                                group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 
                                bg-gradient-to-br from-amber-500 to-orange-600 
                                rounded-2xl sm:rounded-3xl flex items-center justify-center
                                shadow-lg group-hover:shadow-xl transform group-hover:rotate-3
                                transition-all duration-500">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2
                             group-hover:text-amber-600 transition-colors duration-300">
                  Admin Portal
                </h2>
                <p className="text-sm sm:text-base text-gray-500 text-center font-light mb-4 sm:mb-6
                            group-hover:text-gray-600 transition-colors duration-300">
                  Manage teachers, students, and oversee all administrative tasks
                </p>

                {/* Features List */}
                <div className="w-full space-y-2 mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                    <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Manage teacher accounts</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                    <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Add and remove students</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                    <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>View system analytics</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="w-full">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-2.5 sm:py-3 px-4 rounded-xl
                                font-medium text-sm sm:text-base shadow-md
                                group-hover:shadow-lg transform group-hover:scale-105
                                transition-all duration-300 flex items-center justify-center gap-2">
                    Enter Admin Portal
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <p className="mt-8 sm:mt-12 text-xs sm:text-sm text-gray-400 text-center font-light">
            © 2026 Student Management System. All rights reserved. | Select your role to continue
          </p>
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