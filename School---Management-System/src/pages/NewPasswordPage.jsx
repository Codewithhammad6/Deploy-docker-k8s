import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Sparkles, ArrowRight, Shield, CheckCircle } from "lucide-react";
import userStore from "../store/userStore";

function NewPasswordPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { code } = location.state || {};

  const { newPassword, loading } = userStore(); 

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    setPasswordStrength(strength);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setFormData({ ...formData, password: newPassword });
    checkPasswordStrength(newPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    // Call store action to set new password along with code
    newPassword({ code, password: formData.password })
      .then(() => navigate("/login")) // Redirect to login on success
      .catch((err) => console.log(err));
  };

  const getStrengthColor = () => {
    if (passwordStrength === 0) return "bg-gray-200";
    if (passwordStrength === 1) return "bg-red-500";
    if (passwordStrength === 2) return "bg-orange-500";
    if (passwordStrength === 3) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getStrengthText = () => {
    if (passwordStrength === 0) return "Very Weak";
    if (passwordStrength === 1) return "Weak";
    if (passwordStrength === 2) return "Fair";
    if (passwordStrength === 3) return "Good";
    return "Strong";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 grid lg:grid-cols-1 relative overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Left side - New Password Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12 relative z-10">
        <div className="w-full max-w-md">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
            
            {/* Header */}
            <div className="flex flex-col items-center gap-3 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-lg opacity-60"></div>
                <div className="relative size-16 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Lock className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="text-center">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Set New Password
                </h1>
                <p className="text-gray-500 mt-2 flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  Create a strong password for your account
                  <Sparkles className="w-4 h-4 text-purple-400" />
                </p>
              </div>
            </div>

            {/* Security Pills */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium flex items-center gap-1">
                <Shield className="w-3 h-3" /> 6+ characters
              </span>
              <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-medium flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> One uppercase
              </span>
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> One number
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Password */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 ml-1">
                  New Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                    <Lock className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full pl-10 pr-12 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all duration-200 outline-none text-gray-800 placeholder-gray-400"
                    placeholder="Enter new password"
                    value={formData.password}
                    onChange={handlePasswordChange}
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

                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="mt-2 space-y-1">
                    <div className="flex gap-1 h-1">
                      {[1, 2, 3, 4].map((level) => (
                        <div
                          key={level}
                          className={`flex-1 rounded-full transition-all duration-300 ${
                            level <= passwordStrength 
                              ? getStrengthColor() 
                              : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <p className={`text-xs font-medium ${
                      passwordStrength === 0 ? 'text-gray-500' :
                      passwordStrength === 1 ? 'text-red-500' :
                      passwordStrength === 2 ? 'text-orange-500' :
                      passwordStrength === 3 ? 'text-yellow-600' :
                      'text-green-600'
                    }`}>
                      Password Strength: {getStrengthText()}
                    </p>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 ml-1">
                  Confirm Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                    <Lock className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full pl-10 pr-12 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all duration-200 outline-none text-gray-800 placeholder-gray-400"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({ ...formData, confirmPassword: e.target.value })
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center z-10"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5 text-gray-400 hover:text-indigo-600 transition-colors" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-400 hover:text-indigo-600 transition-colors" />
                    )}
                  </button>
                </div>

                {/* Match Indicator */}
                {formData.confirmPassword && (
                  <p className={`text-xs mt-1 ml-1 ${
                    formData.password === formData.confirmPassword 
                      ? 'text-green-600' 
                      : 'text-red-500'
                  }`}>
                    {formData.password === formData.confirmPassword 
                      ? '✓ Passwords match' 
                      : '✗ Passwords do not match'}
                  </p>
                )}
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
                    Updating...
                  </>
                ) : (
                  <>
                    Set New Password
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Back to Login Link */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                <button
                  onClick={() => navigate("/login")}
                  className="text-indigo-600 hover:text-indigo-700 font-semibold hover:underline transition-all"
                >
                  Back to Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPasswordPage;