
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 text-sm border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
      <div>
        <Link to="/" className="font-medium text-purple-800">Career Navigator</Link>
      </div>
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-purple-700 hover:underline transition-colors">Services</Link>
        <Link to="/" className="hover:text-purple-700 hover:underline transition-colors">Company Information</Link>
        <Link to="/" className="hover:text-purple-700 hover:underline transition-colors">FAQs</Link>
        <Link to="/" className="hover:text-purple-700 hover:underline transition-colors font-medium text-purple-700">Get Started</Link>
      </div>
    </nav>
  );
};

export default Navigation;
