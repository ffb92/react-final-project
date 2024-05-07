// components/Footer.js
import React from "react";
import { Link } from "react-router-dom"; // Importieren Sie Link

const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4">
          <Link to="/imprint" className="hover:text-gray-300">
            Impressum
          </Link>
          <Link to="/data-privacy" className="hover:text-gray-300">
            Datenschutz
          </Link>
        </div>
        <div className="m-5 border-t-2 opacity-50 "></div>
        <div className="text-center mb-4">
          <p>&copy; 2024 Ihr Unternehmen. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
