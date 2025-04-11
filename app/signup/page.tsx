'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { ArrowRight, Mail, Lock, User, GraduationCap, Briefcase, CheckCircle } from 'lucide-react';

export default function Signup() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userType = searchParams.get('type') || 'student';
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    userType: userType,
  });
  const [error, setError] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setShowOTP(true);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOTPVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          otp,
          password: formData.password,
          userType: formData.userType,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Show success message
        setError('');
        // Redirect to login page after successful verification
        router.push(`/login?type=${formData.userType}&verified=true`);
      } else {
        setError(data.error || 'Verification failed. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleUserType = () => {
    const newType = formData.userType === 'student' ? 'counselor' : 'student';
    setFormData({ ...formData, userType: newType });
  };

  if (showOTP) {
    return (
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left side - Image and text */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-900 to-purple-900 p-12 flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">Verify Your Email</h1>
            <p className="text-blue-100 text-lg">We've sent a verification code to your email address.</p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Email Verification</h3>
                <p className="text-blue-100 text-sm">Enter the code to complete your registration</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - OTP form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Check Your Email</h2>
              <p className="mt-2 text-gray-600">Enter the verification code sent to {formData.email}</p>
            </div>

            <form className="mt-8 space-y-6" onSubmit={handleOTPVerification}>
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md" role="alert">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}
              
              <div className="space-y-4">
                <div className="relative">
                  <input
                    id="otp"
                    name="otp"
                    type="text"
                    required
                    className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-center text-2xl tracking-widest"
                    placeholder="000000"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                  />
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${
                    formData.userType === 'student'
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-purple-600 hover:bg-purple-700'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verifying...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Verify Email <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
            
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Didn't receive the code?{' '}
                <button 
                  onClick={() => setShowOTP(false)} 
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Resend
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Image and text */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-900 to-purple-900 p-12 flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">Career Guidance Platform</h1>
          <p className="text-blue-100 text-lg">Join our community and discover your perfect career path.</p>
        </div>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-500/20 p-3 rounded-full">
              <GraduationCap className="h-6 w-6 text-blue-300" />
            </div>
            <div>
              <h3 className="text-white font-semibold">For Students</h3>
              <p className="text-blue-100 text-sm">Get personalized career guidance from experts</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-purple-500/20 p-3 rounded-full">
              <Briefcase className="h-6 w-6 text-purple-300" />
            </div>
            <div>
              <h3 className="text-white font-semibold">For Counselors</h3>
              <p className="text-blue-100 text-sm">Share your expertise and help guide students</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Signup form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Create Your Account</h2>
            <p className="mt-2 text-gray-600">Join our platform to start your career journey</p>
          </div>

          {/* User type toggle */}
          <div className="flex justify-center mb-6">
            <div className="bg-gray-100 p-1 rounded-full flex">
              <button
                onClick={toggleUserType}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  formData.userType === 'student'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Student
              </button>
              <button
                onClick={toggleUserType}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  formData.userType === 'counselor'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Counselor
              </button>
            </div>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSignup}>
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md" role="alert">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}
            
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${
                  formData.userType === 'student'
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-purple-600 hover:bg-purple-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating account...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Create Account <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </div>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link href={`/login?type=${formData.userType}`} className="font-medium text-blue-600 hover:text-blue-500">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 