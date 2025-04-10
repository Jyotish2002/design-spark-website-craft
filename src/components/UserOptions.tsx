
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, FileSpreadsheet, Brain, MessageCircle, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserOptions = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-[5%] w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDuration: '7s' }}></div>
        <div className="absolute bottom-1/4 right-[5%] w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDuration: '9s', animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-10 text-center text-purple-900 animate-fade-in">
          Choose Your <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Path</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <Card className="bg-white border-purple-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-slide-right" style={{ animationDuration: '0.8s', animationDelay: '0.2s' }}>
            <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-700"></div>
            <CardContent className="pt-8 px-6 pb-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6 animate-pulse" style={{ animationDuration: '3s' }}>
                  <GraduationCap className="w-8 h-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-4 text-purple-800">For Students</h3>
                <p className="text-gray-700 mb-6">
                  Discover your ideal career path based on your academic strengths and interests. Our platform offers:
                </p>
                
                <div className="grid grid-cols-2 gap-4 w-full mb-8">
                  <div className="flex flex-col items-center p-4 bg-purple-50 rounded-xl transform transition-all hover:scale-105 hover:shadow-md">
                    <Brain className="h-6 w-6 text-purple-600 mb-2" />
                    <span className="text-sm text-gray-700">AI Career Recommendations</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-blue-50 rounded-xl transform transition-all hover:scale-105 hover:shadow-md">
                    <FileSpreadsheet className="h-6 w-6 text-blue-600 mb-2" />
                    <span className="text-sm text-gray-700">Subject-Based Analysis</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-indigo-50 rounded-xl transform transition-all hover:scale-105 hover:shadow-md">
                    <MessageCircle className="h-6 w-6 text-indigo-600 mb-2" />
                    <span className="text-sm text-gray-700">Counsellor Chats</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-violet-50 rounded-xl transform transition-all hover:scale-105 hover:shadow-md">
                    <Award className="h-6 w-6 text-violet-600 mb-2" />
                    <span className="text-sm text-gray-700">Personalized Guidance</span>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-md hover:shadow-purple-200 hover:translate-y-[-2px] transition-all transform hover:scale-105">
                    <Link to="/student">
                      Explore Student Resources
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-blue-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-slide-left" style={{ animationDuration: '0.8s', animationDelay: '0.4s' }}>
            <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-700"></div>
            <CardContent className="pt-8 px-6 pb-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 animate-pulse" style={{ animationDuration: '3s', animationDelay: '1.5s' }}>
                  <Users className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-4 text-blue-800">For Counsellors</h3>
                <p className="text-gray-700 mb-6">
                  Join our community of career experts and help students find their perfect career path. Share your expertise and make a difference:
                </p>
                
                <div className="grid grid-cols-2 gap-4 w-full mb-8">
                  <div className="flex flex-col items-center p-4 bg-blue-50 rounded-xl transform transition-all hover:scale-105 hover:shadow-md">
                    <Users className="h-6 w-6 text-blue-600 mb-2" />
                    <span className="text-sm text-gray-700">Join Expert Network</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-purple-50 rounded-xl transform transition-all hover:scale-105 hover:shadow-md">
                    <MessageCircle className="h-6 w-6 text-purple-600 mb-2" />
                    <span className="text-sm text-gray-700">Connect with Students</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-cyan-50 rounded-xl transform transition-all hover:scale-105 hover:shadow-md">
                    <Award className="h-6 w-6 text-cyan-600 mb-2" />
                    <span className="text-sm text-gray-700">Share Expertise</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-teal-50 rounded-xl transform transition-all hover:scale-105 hover:shadow-md">
                    <GraduationCap className="h-6 w-6 text-teal-600 mb-2" />
                    <span className="text-sm text-gray-700">Guide Future Talent</span>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md hover:shadow-blue-200 hover:translate-y-[-2px] transition-all transform hover:scale-105">
                    <Link to="/counsellor">
                      Join as Counsellor
                    </Link>
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
