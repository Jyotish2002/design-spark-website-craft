
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-16 px-8 md:px-12 flex flex-col items-center bg-gradient-to-br from-white via-purple-50 to-blue-50 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-[15%] w-60 h-60 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-[25%] w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-ping" style={{ animationDuration: '10s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-purple-900 leading-tight animate-fade-in">
            <span className="animate-slide-up inline-block" style={{ animationDelay: '0.2s', animationDuration: '0.8s' }}>Find Your Ideal</span>
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent block animate-slide-up" style={{ animationDelay: '0.5s', animationDuration: '0.8s' }}> Career Path</span>
            <span className="animate-slide-up inline-block" style={{ animationDelay: '0.8s', animationDuration: '0.8s' }}>With Expert Guidance</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto animate-fade-in" style={{ animationDuration: '1s', animationDelay: '1s' }}>
            AI-powered career recommendations based on your subjects and grades, or connect with professional counsellors for personalized advice.
          </p>
          
          <div className="mt-8 space-x-4 animate-fade-in" style={{ animationDuration: '1s', animationDelay: '1.3s' }}>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 transition-all shadow-lg hover:shadow-purple-200 hover:translate-y-[-2px] transform hover:scale-105">
              Get Started <ArrowRight className="ml-2 h-5 w-5 animate-bounce-x" />
            </Button>
            <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 rounded-full px-8 py-6 transition-all hover:scale-105">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto mt-16 px-4 py-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-100 animate-fade-in transform hover:scale-[1.02] transition-all duration-300" style={{ animationDuration: '1s', animationDelay: '1.6s' }}>
        <h2 className="text-2xl font-serif font-semibold mb-6 text-center text-purple-800">How Our Platform Works</h2>
        
        <div className="grid md:grid-cols-2 gap-6 text-center">
          <div className="p-4 hover:bg-purple-50 rounded-xl transition-colors transform hover:scale-105 hover:shadow-md duration-300">
            <h3 className="font-medium text-purple-700 mb-2">AI Career Recommendations</h3>
            <p className="text-sm text-gray-600">
              Enter your favorite subjects or grades and get AI-powered career path suggestions tailored to your academic strengths.
            </p>
          </div>
          
          <div className="p-4 hover:bg-blue-50 rounded-xl transition-colors transform hover:scale-105 hover:shadow-md duration-300">
            <h3 className="font-medium text-blue-700 mb-2">Expert Counsellor Advice</h3>
            <p className="text-sm text-gray-600">
              Connect with experienced career counsellors who can provide personalized guidance and insights for your career journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
