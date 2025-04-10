
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import UserOptions from '@/components/UserOptions';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <UserOptions />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
