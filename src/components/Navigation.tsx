
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 text-sm border-b border-gray-200">
      <div>
        <Link to="/" className="font-medium">Career Navigator</Link>
      </div>
      <div className="flex space-x-6">
        <Link to="/" className="hover:underline">Services</Link>
        <Link to="/" className="hover:underline">Company Information</Link>
        <Link to="/" className="hover:underline">FAQs</Link>
        <Link to="/" className="hover:underline">Get Started</Link>
      </div>
    </nav>
  );
};

export default Navigation;
