
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import UserOptions from '@/components/UserOptions';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col max-w-4xl mx-auto border-x border-gray-200">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <UserOptions />
        <ContactForm />
      </main>
    </div>
  );
};

export default Index;
