// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// export default function AdminDashboard() {
//   const navigate = useNavigate();

//   const handleAddStudentsClick = () => {
//     navigate('/add-students'); // Add students page par navigate karega
//   }
//   const handleAllStudentsClick = () => {
//     navigate('/all-students'); // Add students page par navigate karega
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin text-gray-800 mb-8 md:mb-12">
//         Admin Dashboard
//       </h1>
      
//       <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 w-full max-w-md sm:max-w-2xl mx-auto">
//         {/* Add Students Box */}
//         <div 
//           className="flex-1 bg-white rounded-xl shadow-lg hover:shadow-xl 
//                      transform hover:scale-105 transition-all duration-300 
//                      cursor-pointer border border-gray-200
//                      flex flex-col items-center justify-center p-8 md:p-10
//                      group"
//           onClick={handleAddStudentsClick}
//         >
//           <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-100 rounded-full 
//                         flex items-center justify-center mb-4
//                         group-hover:bg-blue-200 transition-colors duration-300">
//             <svg className="w-10 h-10 md:w-12 md:h-12 text-blue-600" 
//                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
//                     d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
//             </svg>
//           </div>
//           <h2 className="text-xl md:text-2xl font-light text-gray-800 mb-2">
//             Add Students
//           </h2>
//           <p className="text-sm md:text-base text-gray-500 text-center font-light">
//             Enroll new students to your classes
//           </p>
//         </div>
      
//         <div 
//           className="flex-1 bg-white rounded-xl shadow-lg hover:shadow-xl 
//                      transform hover:scale-105 transition-all duration-300 
//                      cursor-pointer border border-gray-200
//                      flex flex-col items-center justify-center p-8 md:p-10
//                      group"
//            onClick={handleAllStudentsClick}
//         >
//           <div className="w-20 h-20 md:w-24 md:h-24 bg-green-100 rounded-full 
//                         flex items-center justify-center mb-4
//                         group-hover:bg-green-200 transition-colors duration-300">
//             <svg className="w-10 h-10 md:w-12 md:h-12 text-green-600" 
//                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
//                     d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
//                     d="M17 21v-4H7v4M9 7h6M9 11h6" />
//             </svg>
//           </div>
//           <h2 className="text-xl md:text-2xl font-light text-gray-800 mb-2">
//             All Students
            
//           </h2>
//           <p className="text-sm md:text-base text-gray-500 text-center font-light">
//                         Enrolled students

//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }







import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleAddStudentsClick = () => {
    navigate('/add-students');
  };

  const handleAllStudentsClick = () => {
    navigate('/all-students');
  };

  const handleBackClick = () => {
    navigate(-1);
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
        {/* Back Button - Top Left */}
        <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8">
          <button
            onClick={handleBackClick}
            className="group flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 
                     bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl
                     border border-gray-200/50 hover:border-indigo-200
                     transform hover:scale-105 active:scale-95
                     transition-all duration-300"
            aria-label="Go back"
          >
            <svg className="w-5 h-5 sm:w-5 sm:h-5 text-gray-600 group-hover:text-indigo-600 transition-colors" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm sm:text-base font-medium text-gray-600 group-hover:text-indigo-600 transition-colors">
              Back
            </span>
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 mt-16 sm:mt-12 md:mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 sm:mb-4">
            Admin Dashboard
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 font-light max-w-2xl mx-auto px-4">
            Manage your educational institution with ease. Add new students or view existing records.
          </p>
          
          {/* Decorative Line */}
          <div className="flex justify-center mt-4 sm:mt-6">
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto px-4">
          {/* Add Students Card */}
          <div 
            className="group relative flex-1 bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl 
                     shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 
                     transition-all duration-500 cursor-pointer border border-white/20
                     flex flex-col items-center justify-center p-8 sm:p-10 md:p-12
                     overflow-hidden"
            onClick={handleAddStudentsClick}
          >
            {/* Card Background Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Icon Container with Glow Effect */}
            <div className="relative mb-6 sm:mb-8">
              <div className="absolute inset-0 bg-indigo-500 rounded-full blur-xl opacity-0 
                            group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 
                            bg-gradient-to-br from-indigo-500 to-indigo-600 
                            rounded-2xl sm:rounded-3xl flex items-center justify-center
                            shadow-lg group-hover:shadow-xl transform group-hover:rotate-3
                            transition-all duration-500">
                <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
            </div>

            {/* Card Content */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3
                         group-hover:text-indigo-600 transition-colors duration-300">
              Add Students
            </h2>
            <p className="text-sm sm:text-base text-gray-500 text-center font-light leading-relaxed
                        group-hover:text-gray-600 transition-colors duration-300">
              Enroll new students to your classes with complete details
            </p>

            {/* Floating Action Indicator */}
            <div className="absolute bottom-4 right-4 transform translate-y-10 opacity-0 
                          group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="bg-indigo-500 text-white p-2 rounded-full shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* All Students Card */}
          <div 
            className="group relative flex-1 bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl 
                     shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 
                     transition-all duration-500 cursor-pointer border border-white/20
                     flex flex-col items-center justify-center p-8 sm:p-10 md:p-12
                     overflow-hidden"
            onClick={handleAllStudentsClick}
          >
            {/* Card Background Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Icon Container with Glow Effect */}
            <div className="relative mb-6 sm:mb-8">
              <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-0 
                            group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 
                            bg-gradient-to-br from-purple-500 to-pink-500 
                            rounded-2xl sm:rounded-3xl flex items-center justify-center
                            shadow-lg group-hover:shadow-xl transform group-hover:rotate-3
                            transition-all duration-500">
                <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>

            {/* Card Content */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3
                         group-hover:text-purple-600 transition-colors duration-300">
              All Students
            </h2>
            <p className="text-sm sm:text-base text-gray-500 text-center font-light leading-relaxed
                        group-hover:text-gray-600 transition-colors duration-300">
              View and manage all enrolled students in one place
            </p>

            {/* Floating Action Indicator */}
            <div className="absolute bottom-4 right-4 transform translate-y-10 opacity-0 
                          group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="bg-purple-500 text-white p-2 rounded-full shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

       

        {/* Footer Note */}
        <p className="mt-8 sm:mt-12 text-xs sm:text-sm text-gray-400 text-center font-light">
          © 2026 Student Management System. All rights reserved.
        </p>
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