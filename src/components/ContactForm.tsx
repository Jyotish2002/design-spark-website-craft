
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
    <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-purple-900">
            Need <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">More Help?</span>
          </h2>
          <p className="text-gray-600 mt-3">
            We're here to answer your questions and provide personalized guidance.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <Input 
                  id="name" 
                  type="text" 
                  required
                  placeholder="Enter your name"
                  className="border-purple-200 focus:border-purple-400 rounded-lg h-10"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <Input 
                  id="email" 
                  type="email" 
                  required
                  placeholder="Enter your email"
                  className="border-purple-200 focus:border-purple-400 rounded-lg h-10"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
              <Textarea 
                id="message" 
                required
                rows={5}
                placeholder="How can we help you?"
                className="border-purple-200 focus:border-purple-400 rounded-lg resize-none"
              />
            </div>
            
            <div className="flex justify-center mt-8">
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-10 py-6 shadow-lg hover:shadow-purple-200 transition-all"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
