
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users } from 'lucide-react';

const UserOptions = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-10 text-center text-purple-900">
          Who We <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Serve</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <Card className="bg-white border-purple-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-700"></div>
            <CardContent className="pt-8 px-6 pb-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-4 text-purple-800">For Students</h3>
                <p className="text-gray-700 mb-6">
                  Discover the perfect career path tailored specifically for you based on your skills, interests, personality traits, and values. Our comprehensive assessments will help you make informed decisions about your future.
                </p>
                <div className="mt-auto">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-md hover:shadow-purple-200 hover:translate-y-[-2px] transition-all">
                    Explore Student Resources
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-blue-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-700"></div>
            <CardContent className="pt-8 px-6 pb-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-4 text-blue-800">For Counsellors</h3>
                <p className="text-gray-700 mb-6">
                  Access powerful tools and resources to help your clients find better career opportunities. Our platform provides comprehensive assessments and insights to enhance your guidance capabilities and deliver more value to those you serve.
                </p>
                <div className="mt-auto">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md hover:shadow-blue-200 hover:translate-y-[-2px] transition-all">
                    Counsellor Resources
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UserOptions;
