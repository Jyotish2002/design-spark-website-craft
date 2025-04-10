
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Career Navigator</h3>
            <p className="text-purple-200 text-sm">
              Guiding you towards a fulfilling professional journey with data-driven insights and personalized career recommendations.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-purple-100">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-purple-200 hover:text-white text-sm transition-colors">
                  Career Assessment
                </Link>
              </li>
              <li>
                <Link to="/" className="text-purple-200 hover:text-white text-sm transition-colors">
                  Personalized Recommendations
                </Link>
              </li>
              <li>
                <Link to="/" className="text-purple-200 hover:text-white text-sm transition-colors">
                  Career Counselling
                </Link>
              </li>
              <li>
                <Link to="/" className="text-purple-200 hover:text-white text-sm transition-colors">
                  Educational Guidance
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-purple-100">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-purple-200 hover:text-white text-sm transition-colors">
                  Career Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="text-purple-200 hover:text-white text-sm transition-colors">
                  Industry Insights
                </Link>
              </li>
              <li>
                <Link to="/" className="text-purple-200 hover:text-white text-sm transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/" className="text-purple-200 hover:text-white text-sm transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-purple-100">Contact</h4>
            <ul className="space-y-2 text-sm text-purple-200">
              <li>Email: info@careernavigator.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Career Street, Future City, 10001</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-purple-700 text-center text-sm text-purple-300">
          <p>© {new Date().getFullYear()} Career Navigator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
