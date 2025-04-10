
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We will get back to you soon.",
    });
  };
  
  return (
    <section className="py-10 px-6 border-t border-gray-200 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-lg mx-auto">
        <h2 className="text-xl font-serif font-bold mb-6 text-purple-800">Need More Help</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-[120px_1fr] items-center gap-2">
            <label htmlFor="name" className="text-sm text-gray-700">Your Name:</label>
            <Input 
              id="name" 
              type="text" 
              required
              className="border-purple-200 focus:border-purple-400 rounded-md h-8"
            />
          </div>
          
          <div className="grid grid-cols-[120px_1fr] items-center gap-2">
            <label htmlFor="email" className="text-sm text-gray-700">Email-ID:</label>
            <Input 
              id="email" 
              type="email" 
              required
              className="border-purple-200 focus:border-purple-400 rounded-md h-8"
            />
          </div>
          
          <div className="grid grid-cols-[120px_1fr] items-start gap-2">
            <label htmlFor="message" className="text-sm text-gray-700 pt-2">Message:</label>
            <Textarea 
              id="message" 
              required
              rows={4}
              className="border-purple-200 focus:border-purple-400 rounded-md resize-none"
            />
          </div>
          
          <div className="flex justify-center mt-6">
            <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
