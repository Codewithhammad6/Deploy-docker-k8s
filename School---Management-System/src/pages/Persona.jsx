import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Persona() {
  const navigate = useNavigate();
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if app is already installed (standalone mode)
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    // Listen for beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    });

    // Listen for app installed event
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    });
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    }
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  const handleTeacherClick = () => {
    navigate('/signup');
  };

  const handleParentClick = () => {
    navigate('/student-details');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
     <div className='m-5'>
  <button
    onClick={()=>navigate('/developer-info')}
    className="group relative bg-gradient-to-r from-purple-600 to-indigo-600 
             text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 
             rounded-full shadow-lg hover:shadow-xl 
             transform hover:scale-105 active:scale-95
             transition-all duration-300 flex items-center gap-2
             border border-white/20 backdrop-blur-sm"
  >
    
    <span className="text-xs sm:text-sm md:text-base font-medium">
      Developer Info
    </span>
    
    {/* Simple static dot - pulses removed */}
    <span className="absolute -top-1 -right-1 flex h-3 w-3">
      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
    </span>
  </button>
</div>

      {/* 🎯 BEAUTIFUL DOWNLOAD BUTTON - TOP RIGHT CORNER */}
      {isInstallable && !isInstalled && (
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-20">
          <button
            onClick={handleInstallClick}
            className="group relative bg-gradient-to-r from-purple-600 to-indigo-600 
                     text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 
                     rounded-full shadow-lg hover:shadow-xl 
                     transform hover:scale-105 active:scale-95
                     transition-all duration-300 flex items-center gap-2
                     border border-white/20 backdrop-blur-sm
                     animate-pulse hover:animate-none"
          >
            {/* Download Icon with Animation */}
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 group-hover:animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
              />
            </svg>
            
            <span className="text-xs sm:text-sm md:text-base font-medium">
              Download App
            </span>
            
            {/* Sparkle Effect */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 
                           opacity-0 group-hover:opacity-30 blur transition-opacity duration-300">
            </span>
            
            {/* Notification Dot */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </button>
        </div>
      )}

      {/* 📱 INSTALLED BADGE - If already installed */}
      {isInstalled && (
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-20">
          <div className="bg-green-100 text-green-700 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 
                        rounded-full flex items-center gap-2 shadow-md border border-green-200
                        backdrop-blur-sm bg-opacity-90">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm font-medium">App Installed ✓</span>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8 sm:py-12">
        <div className="w-full max-w-4xl mx-auto text-center px-4">
          {/* Icon/Logo */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <div className="inline-flex p-3 sm:p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl sm:rounded-3xl shadow-xl">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 sm:mb-4">
            Choose Your Role
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-500 font-light max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
            Select your role to access the appropriate dashboard and features
          </p>

          {/* Decorative Line */}
          <div className="flex justify-center mb-8 sm:mb-12 md:mb-16">
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
          </div>

          {/* Persona Cards - Your existing cards */}
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
                  Teacher
                </h2>
                <p className="text-sm sm:text-base text-gray-500 text-center font-light
                            group-hover:text-gray-600 transition-colors duration-300">
                  Access attendance management, marks entry, and student records
                </p>

                {/* Features List */}
                <ul className="mt-4 sm:mt-6 space-y-2 text-left w-full">
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Mark daily attendance
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Add test results
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    View student progress
                  </li>
                </ul>

                {/* Action Button */}
                <div className="mt-6 sm:mt-8 w-full">
                  <div className="bg-blue-500 text-white py-2.5 sm:py-3 px-4 rounded-xl
                                font-medium text-sm sm:text-base shadow-md
                                group-hover:shadow-lg transform group-hover:scale-105
                                transition-all duration-300 flex items-center justify-center gap-2">
                    Continue as Teacher
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Parent Card */}
            <div 
              className="group relative flex-1 bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl 
                       shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 
                       transition-all duration-500 cursor-pointer border border-white/20
                       overflow-hidden"
              onClick={handleParentClick}
            >
              {/* Card Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-emerald-600/5 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className="relative p-6 sm:p-8 md:p-10 flex flex-col items-center">
                <div className="relative mb-4 sm:mb-6">
                  <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-0 
                                group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 
                                bg-gradient-to-br from-green-500 to-emerald-600 
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
                             group-hover:text-green-600 transition-colors duration-300">
                  Parent
                </h2>
                <p className="text-sm sm:text-base text-gray-500 text-center font-light
                            group-hover:text-gray-600 transition-colors duration-300">
                  Track your child's attendance, marks, and academic progress
                </p>

                {/* Features List */}
                <ul className="mt-4 sm:mt-6 space-y-2 text-left w-full">
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    View attendance records
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Check test results
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Monitor progress
                  </li>
                </ul>

                {/* Action Button */}
                <div className="mt-6 sm:mt-8 w-full">
                  <div className="bg-green-500 text-white py-2.5 sm:py-3 px-4 rounded-xl
                                font-medium text-sm sm:text-base shadow-md
                                group-hover:shadow-lg transform group-hover:scale-105
                                transition-all duration-300 flex items-center justify-center gap-2">
                    Continue as Parent
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
          <p className="mt-8 sm:mt-12 md:mt-16 text-xs sm:text-sm text-gray-400 text-center font-light">
            Select your role to continue. Both teachers and parents have personalized dashboards.
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