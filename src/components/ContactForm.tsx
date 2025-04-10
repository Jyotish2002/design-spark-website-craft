
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
    <section className="py-10 px-6 border-t border-gray-200">
      <div className="max-w-lg mx-auto">
        <h2 className="text-xl font-serif font-bold mb-6">Need More Help</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-[120px_1fr] items-center gap-2">
            <label htmlFor="name" className="text-sm">Your Name:</label>
            <Input 
              id="name" 
              type="text" 
              required
              className="border-gray-300 rounded-none h-8"
            />
          </div>
          
          <div className="grid grid-cols-[120px_1fr] items-center gap-2">
            <label htmlFor="email" className="text-sm">Email-ID:</label>
            <Input 
              id="email" 
              type="email" 
              required
              className="border-gray-300 rounded-none h-8"
            />
          </div>
          
          <div className="grid grid-cols-[120px_1fr] items-start gap-2">
            <label htmlFor="message" className="text-sm pt-2">Message:</label>
            <Textarea 
              id="message" 
              required
              rows={4}
              className="border-gray-300 rounded-none resize-none"
            />
          </div>
          
          <div className="flex justify-center mt-6">
            <Button type="submit" variant="outline" className="border-black text-black hover:bg-gray-100 rounded-none px-6">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
