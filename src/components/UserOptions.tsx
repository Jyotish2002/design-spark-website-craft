
import React from 'react';
import { Button } from '@/components/ui/button';

const UserOptions = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="flex flex-col md:flex-row justify-center gap-12 px-4">
        <div className="relative transform hover:scale-105 transition-transform duration-300">
          <div className="border-2 border-purple-300 bg-white rounded-full p-8 w-64 h-64 flex flex-col items-center justify-center mx-auto shadow-lg">
            <h3 className="text-xl font-serif font-medium mb-4 text-center text-purple-800">For Students</h3>
            <p className="text-sm text-center mb-4 text-gray-700">
              Discover the perfect career path tailored specifically for you based on your skills, interests, personality traits, and values. Our comprehensive assessments and matched recommendations will help you make informed decisions.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full text-xs px-4 mt-2">
              Get Started
            </Button>
          </div>
        </div>
        
        <div className="relative transform hover:scale-105 transition-transform duration-300">
          <div className="border-2 border-blue-300 bg-white rounded-full p-8 w-64 h-64 flex flex-col items-center justify-center mx-auto shadow-lg">
            <h3 className="text-xl font-serif font-medium mb-4 text-center text-blue-800">For Counsellors</h3>
            <p className="text-sm text-center mb-4 text-gray-700">
              Discover the perfect system to help your clients find better career opportunities. Our platform provides comprehensive assessments and tools to help you provide the best guidance to your clients. Sign up today and explore our counselor resources.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs px-4 mt-2">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserOptions;
