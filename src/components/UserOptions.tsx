
import React from 'react';
import { Button } from '@/components/ui/button';

const UserOptions = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="flex flex-col md:flex-row justify-center gap-12 px-4">
        <div className="relative">
          <div className="border-2 border-gray-300 rounded-full p-8 w-64 h-64 flex flex-col items-center justify-center mx-auto">
            <h3 className="text-xl font-serif font-medium mb-4 text-center">For Students</h3>
            <p className="text-sm text-center mb-4">
              Discover the perfect career path tailored specifically for you based on your skills, interests, personality traits, and values. Our comprehensive assessments and matched recommendations will help you make informed decisions.
            </p>
            <Button variant="outline" className="border-black text-black hover:bg-gray-100 rounded-none text-xs px-4 mt-2">
              Get Started
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="border-2 border-gray-300 rounded-full p-8 w-64 h-64 flex flex-col items-center justify-center mx-auto">
            <h3 className="text-xl font-serif font-medium mb-4 text-center">For Counsellors</h3>
            <p className="text-sm text-center mb-4">
              Discover the perfect system to help your clients find better career opportunities. Our platform provides comprehensive assessments and tools to help you provide the best guidance to your clients. Sign up today and explore our counselor resources.
            </p>
            <Button variant="outline" className="border-black text-black hover:bg-gray-100 rounded-none text-xs px-4 mt-2">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserOptions;
