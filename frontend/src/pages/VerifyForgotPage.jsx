import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Loader2, Sparkles, ArrowRight, Shield, Clock, KeyRound } from "lucide-react";
import userStore from "../store/userStore";
import { useNavigate } from "react-router-dom";

function VerifyForgotPage() {
  const [code, setCode] = useState("");
  const { verifyForgotCode, loading } = userStore();
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = verifyForgotCode({ code });
    if(res){
      navigation("/new-password", { state: { code } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 grid lg:grid-cols-1 relative overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Left side - Verify Forgot Password form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12 relative z-10">
        <div className="w-full max-w-md">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
            
            {/* Header */}
            <div className="flex flex-col items-center gap-3 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-lg opacity-60"></div>
                <div className="relative size-16 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <KeyRound className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="text-center">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Verify Reset Code
                </h1>
                <p className="text-gray-500 mt-2 flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  Enter the code sent to your email
                  <Sparkles className="w-4 h-4 text-purple-400" />
                </p>
              </div>
            </div>

       

            {/* Instruction Box */}
            <div className="bg-indigo-50/50 rounded-xl p-4 mb-6 border border-indigo-100">
              <p className="text-sm text-gray-600 text-center">
                We've sent a password reset code to your email address. 
                Please check your inbox and enter the 5-digit code below.
              </p>
            </div>

            {/* Verify Code Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 ml-1">
                  Reset Code
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                    <Mail className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Enter 5-digit code"
                    maxLength="5"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all duration-200 outline-none text-gray-800 placeholder-gray-400 text-center text-lg tracking-widest font-mono"
                    value={code}
                    onChange={(e) => setCode(e.target.value.replace(/[^0-9]/g, ''))}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1 ml-1">
                  Enter the 5-digit code sent to your email
                </p>
              </div>

              {/* Code Preview with Visual Indicators */}
              {code.length > 0 && (
                <div className="space-y-3">
                  <div className="flex justify-center gap-1 py-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-8 h-10 rounded-lg border-2 flex items-center justify-center font-mono text-lg font-bold transition-all ${
                          i < code.length
                            ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                            : 'border-gray-200 bg-gray-50 text-gray-300'
                        }`}
                      >
                        {code[i] || '•'}
                      </div>
                    ))}
                  </div>
                  
                  {/* Code Complete Message */}
                  {code.length === 5 && (
                    <div className="flex items-center justify-center gap-1 text-xs text-green-600 bg-green-50 py-2 rounded-lg">
                      <Sparkles className="w-3 h-3" />
                      Code complete! Ready to verify.
                    </div>
                  )}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group mt-4"
                disabled={loading || code.length !== 5}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    Verify Code
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
                <span className="px-4 bg-white/80 text-gray-500">didn't receive code?</span>
              </div>
            </div>

      

            {/* Help Text */}
            <p className="text-xs text-center text-gray-400 mt-6">
              Didn't receive the email? Check your spam folder or{' '}
              <button className="text-indigo-500 hover:underline">contact support</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyForgotPage;