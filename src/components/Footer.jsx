// components/Footer.js
import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p>&copy; 2024 Ihr Unternehmen. Alle Rechte vorbehalten.</p>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Über uns</a>
          <a href="#" className="hover:text-gray-300">Kontakt</a>
          <a href="#" className="hover:text-gray-300">Social Media</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
