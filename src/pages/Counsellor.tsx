
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, BadgeCheck, BriefcaseBusiness, Calendar, MessageCircle, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Counsellor = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    specialization: '',
    about: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if any field is empty
    const emptyFields = Object.values(formData).some(value => !value.trim());
    if (emptyFields) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all fields to continue.",
        variant: "destructive",
      });
      return;
    }
    
    // This would normally send the data to a server
    toast({
      title: "Application Received!",
      description: "Thank you for your interest. Our team will review your application and contact you soon.",
    });
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      experience: '',
      specialization: '',
      about: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      <main className="flex-1 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-blue-900 text-center">
            Join Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Counsellor Network</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <Card className="bg-white border-blue-200 shadow-xl rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-medium text-blue-800 mb-6">Why Join Us?</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 p-2 bg-blue-100 rounded-full">
                        <Users className="h-5 w-5 text-blue-700" />
                      </div>
                      <div>
                        <h3 className="font-medium text-blue-700">Impact Student Lives</h3>
                        <p className="text-gray-600 text-sm">Guide students towards fulfilling career paths that match their skills and passions.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 p-2 bg-purple-100 rounded-full">
                        <BriefcaseBusiness className="h-5 w-5 text-purple-700" />
                      </div>
                      <div>
                        <h3 className="font-medium text-purple-700">Flexible Engagement</h3>
                        <p className="text-gray-600 text-sm">Choose when and how you provide guidance - chat online, schedule calls, or host group sessions.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 p-2 bg-cyan-100 rounded-full">
                        <Calendar className="h-5 w-5 text-cyan-700" />
                      </div>
                      <div>
                        <h3 className="font-medium text-cyan-700">On Your Schedule</h3>
                        <p className="text-gray-600 text-sm">Set your own availability and manage appointments on your terms.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 p-2 bg-indigo-100 rounded-full">
                        <BadgeCheck className="h-5 w-5 text-indigo-700" />
                      </div>
                      <div>
                        <h3 className="font-medium text-indigo-700">Professional Recognition</h3>
                        <p className="text-gray-600 text-sm">Build your profile as a verified career expert and expand your professional network.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-800 font-medium flex items-center">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Our counsellors report 92% satisfaction with their experience on our platform.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="bg-white border-purple-200 shadow-xl rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-medium text-purple-800 mb-6">Apply to Join</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border-purple-200 focus:border-purple-400"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-purple-200 focus:border-purple-400"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                        Years of Experience
                      </label>
                      <Input 
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="border-purple-200 focus:border-purple-400"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-1">
                        Career Specialization
                      </label>
                      <Input 
                        id="specialization"
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                        className="border-purple-200 focus:border-purple-400"
                        placeholder="e.g., Tech, Health Sciences, Business"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700 mb-1">
                        Tell Us About Yourself
                      </label>
                      <Textarea 
                        id="about"
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                        className="min-h-[120px] border-purple-200 focus:border-purple-400"
                        placeholder="Your experience, approach to career guidance, and why you want to join our platform."
                      />
                    </div>
                    
                    <div className="text-right">
                      <Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Submit Application <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-16 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-serif font-semibold text-center text-blue-800 mb-6">
              Our Counsellor Community
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-sm border border-blue-100">
                <div className="text-3xl font-bold text-blue-700 mb-2">50+</div>
                <p className="text-gray-700">Expert Counsellors</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-sm border border-purple-100">
                <div className="text-3xl font-bold text-purple-700 mb-2">15+</div>
                <p className="text-gray-700">Career Specializations</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-sm border border-indigo-100">
                <div className="text-3xl font-bold text-indigo-700 mb-2">10,000+</div>
                <p className="text-gray-700">Students Guided</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Counsellor;
