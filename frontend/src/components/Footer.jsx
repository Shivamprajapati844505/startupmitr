// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Navigation Links */}
        <ul className="flex space-x-6 mb-4 md:mb-0">
          <li>
            <a href="#home" className="hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="#vision" className="hover:text-blue-400">
              Vision
            </a>
          </li>
          <li>
            <a href="#mission" className="hover:text-blue-400">
              Mission
            </a>
          </li>
          <li>
            <a href="#mentors" className="hover:text-blue-400">
              Mentors
            </a>
          </li>
        </ul>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            LinkedIn
          </a>
        </div>
      </div>


      <div className="text-center text-gray-400 mt-4 text-sm">
        &copy; {new Date().getFullYear()} My Dashboard. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
