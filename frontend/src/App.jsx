import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";
import userStore from "./store/userStore";
import { axiosInstance } from "./lib/axios";

// Pages
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import ForgotEmailPage from "./pages/ForgotEmailPage";
import NewPasswordPage from "./pages/NewPasswordPage";
import VerifyForgotPage from "./pages/VerifyForgotPage";
import Persona from "./pages/Persona";
import AdminDashboard from "./pages/subpages/AdminDashboard";
import AllStudents from "./pages/subpages/AllStudents";
import AddStudents from "./pages/subpages/AddStudents";
import TeacherDashboard from "./pages/subpages/TeacherDashboard";
import StudentDetails from "./pages/subpages/StudentDetails";
import DeveloperProfile from "./pages/subpages/DeveloperProfile";


function App() {
  const { isAuth, checkAuth, isCheckingAuth} = userStore();

  useEffect(() => {
    // Initialize token from localStorage on app start
    const storedToken = localStorage.getItem('tokenSchool');
    if (storedToken) {
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
      console.log('Token initialized from localStorage');
    }
    
    // Then check auth status
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !isAuth)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  


  return (
    <div data-theme="retro">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={!isAuth ? <Persona /> : <HomePage />} />
        <Route path="/signup" element={!isAuth ? <SignUpPage /> : <HomePage />} />
        <Route path="/signup" element={!isAuth ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!isAuth ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/verify-email" element={!isAuth ? <VerifyEmailPage /> : <Navigate to="/" />} />
        <Route path="/forgot-password" element={!isAuth ? <ForgotEmailPage /> : <Navigate to="/" />} />
        <Route path="/verify-forgot" element={!isAuth ? <VerifyForgotPage /> : <Navigate to="/" />} />
        <Route path="/new-password" element={!isAuth ? <NewPasswordPage /> : <Navigate to="/" />} />
       


       <Route path="/admin-dashboard" element={isAuth ? <AdminDashboard/> : <Navigate to="/login" />} />
       <Route path="/all-students" element={isAuth ? <AllStudents/> : <Navigate to="/login" />} />
       <Route path="/add-students" element={isAuth ? <AddStudents/> : <Navigate to="/login" />} />
       <Route path="/teacher-dashboard" element={isAuth ? <TeacherDashboard/> : <Navigate to="/login" />} />
      <Route path="/student-details/:id" element={<StudentDetails />} />
<Route path="/student-details" element={<StudentDetails />} />
<Route path="/developer-info" element={<DeveloperProfile />} />





        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
