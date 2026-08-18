import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  Loader2,
  Sparkles,
  ArrowRight,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import userStore from "../store/userStore";

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showId, setShowId] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    id:""
  });
  
  const handle = () => {
    navigate("/login");
  };

  const { registerUser, loading } = userStore();

  /* ---------------- VALIDATION ---------------- */
const validateForm = () => {
  if (!formData.name.trim()) return toast.error("Full name is required");
  if (!formData.email.trim()) return toast.error("Email is required");
  if (!/\S+@\S+\.\S+/.test(formData.email))
    return toast.error("Invalid email format");
  if (!formData.password) return toast.error("Password is required");
  if (formData.password.length < 5)
    return toast.error("Password must be at least 5 characters");
  
  return true;
};

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    const result = await registerUser(formData);
    if (result) navigate("/verify-email");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 grid lg:grid-cols-1 relative overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* left side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12 relative z-10">
        <div className="w-full max-w-md">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
            
            {/* LOGO and Header */}
            <div className="text-center mb-8">
              <div className="flex flex-col items-center gap-3">
               
                
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Create Account
                  </h1>
            
                  <p className="text-gray-500 mt-2 flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    Verify you are Teacher
                    <Sparkles className="w-4 h-4 text-purple-400" />
                  </p>
                          <button 
                  onClick={() => navigate("/")} 
                  className="text-indigo-600 underline hover:text-indigo-700 font-semibold hover:underline transition-all"
                >
                  Parent ➔
                </button>
                </div>
              </div>
            </div>

          

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name Field */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 ml-1">
                  Full Name
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                    <User className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all duration-200 outline-none text-gray-800 placeholder-gray-400"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 ml-1">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                    <Mail className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all duration-200 outline-none text-gray-800 placeholder-gray-400"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 ml-1">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                    <Lock className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="•••••"
                    className="w-full pl-10 pr-12 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all duration-200 outline-none text-gray-800 placeholder-gray-400"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center z-10"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5 text-gray-400 hover:text-indigo-600 transition-colors" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-400 hover:text-indigo-600 transition-colors" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1 ml-1">
                  Must be at least 5 characters
                </p>
              </div>
              {/* Password Field */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 ml-1">
                  Teacher ID
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                    <Lock className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                  </div>
                  <input
                    type={showId ? "text" : "password"}
                    placeholder="•••••"
                    className="w-full pl-10 pr-12 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all duration-200 outline-none text-gray-800 placeholder-gray-400"
                    value={formData.id}
                    onChange={(e) =>
                      setFormData({ ...formData, id: e.target.value })
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowId(!showId)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center z-10"
                  >
                    {showId ? (
                      <EyeOff className="w-5 h-5 text-gray-400 hover:text-indigo-600 transition-colors" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-400 hover:text-indigo-600 transition-colors" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1 ml-1">
                  Enter ID
                </p>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group mt-6"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/80 text-gray-500">or</span>
              </div>
            </div>

            {/* Sign In Link */}
            <div className="text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <button 
                  onClick={() => handle()} 
                  className="text-indigo-600 hover:text-indigo-700 font-semibold hover:underline transition-all"
                >
                  Sign in here
                </button>
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;