
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for reaching out. We will get back to you soon.",
    });
  };
  
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-purple-300/20 via-blue-300/20 to-purple-300/20 blur-2xl transform -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-[15%] w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/3 left-[10%] w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in" style={{ animationDuration: '1s' }}>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-purple-900">
            Need <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">More Help?</span>
          </h2>
          <p className="text-gray-600 mt-3">
            We're here to answer your questions and provide personalized guidance.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-100 animate-scale" style={{ animationDuration: '0.8s', animationDelay: '0.3s' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 animate-slide-right" style={{ animationDuration: '0.6s', animationDelay: '0.4s' }}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <Input 
                  id="name" 
                  type="text" 
                  required
                  placeholder="Enter your name"
                  className="border-purple-200 focus:border-purple-400 rounded-lg h-10 transition-all focus:ring-2 focus:ring-purple-300 focus:scale-[1.01]"
                />
              </div>
              
              <div className="space-y-2 animate-slide-left" style={{ animationDuration: '0.6s', animationDelay: '0.4s' }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <Input 
                  id="email" 
                  type="email" 
                  required
                  placeholder="Enter your email"
                  className="border-purple-200 focus:border-purple-400 rounded-lg h-10 transition-all focus:ring-2 focus:ring-purple-300 focus:scale-[1.01]"
                />
              </div>
            </div>
            
            <div className="space-y-2 animate-slide-up" style={{ animationDuration: '0.6s', animationDelay: '0.6s' }}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
              <Textarea 
                id="message" 
                required
                rows={5}
                placeholder="How can we help you?"
                className="border-purple-200 focus:border-purple-400 rounded-lg resize-none transition-all focus:ring-2 focus:ring-purple-300 focus:scale-[1.01]"
              />
            </div>
            
            <div className="flex justify-center mt-8 animate-fade-in" style={{ animationDuration: '1s', animationDelay: '0.8s' }}>
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-10 py-6 shadow-lg hover:shadow-purple-200 transition-all hover:scale-105"
              >
                Send Message 
                <Send className="ml-2 h-4 w-4 animate-bounce-x" style={{ animationDuration: '1.5s' }} />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
