import React from 'react';
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-black border-t border-gray-800 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Brand */}
        <div className="text-3xl font-bold text-red-600 mb-3">
          NaekWatch
        </div>
        
        {/* Social media */}
        <div className="flex items-center gap-4 text-s text-white mb-4">
          <span>Follow NaekWatch on:</span>
          <div className="flex items-center gap-3">
            <FaFacebook className="w-4 h-4 text-white hover:text-blue-600 cursor-pointer transition-colors" />
            <FaInstagram className="w-4 h-4 text-white hover:text-pink-600 cursor-pointer transition-colors" />
            <FaXTwitter className="w-4 h-4 text-white hover:text-blue-400 cursor-pointer transition-colors" />
          </div>
        </div>
        
        {/* Links */}
        <div className="flex items-center gap-4 text-s text-white mb-4">
          <a href="/contact" className="hover:text-gray-400 transition-colors">
            Contact Us
          </a>
          <span className="text-gray-600">|</span>
          <a href="/about" className="hover:text-gray-400 transition-colors">
            About us
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-s text-gray-400">
          ©{currentYear} NaekWatch. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;