
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-16 px-8 md:px-12 flex flex-col items-center bg-gradient-to-br from-white via-purple-50 to-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-purple-900 leading-tight animate-fade-in">
            Find Your Ideal
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Career Path</span>
            <br />
            With Expert Guidance
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            AI-powered career recommendations based on your subjects and grades, or connect with professional counsellors for personalized advice.
          </p>
          
          <div className="mt-8 space-x-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 transition-all shadow-lg hover:shadow-purple-200 hover:translate-y-[-2px]">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 rounded-full px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto mt-16 px-4 py-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-100">
        <h2 className="text-2xl font-serif font-semibold mb-6 text-center text-purple-800">How Our Platform Works</h2>
        
        <div className="grid md:grid-cols-2 gap-6 text-center">
          <div className="p-4 hover:bg-purple-50 rounded-xl transition-colors">
            <h3 className="font-medium text-purple-700 mb-2">AI Career Recommendations</h3>
            <p className="text-sm text-gray-600">
              Enter your favorite subjects or grades and get AI-powered career path suggestions tailored to your academic strengths.
            </p>
          </div>
          
          <div className="p-4 hover:bg-blue-50 rounded-xl transition-colors">
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
