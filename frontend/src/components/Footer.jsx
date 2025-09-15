import React from "react";
// import logo from "../assets/logo.png"; 

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        
        
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          {/* <img src={logo} alt="StartupMitr Logo" className="h-10 w-10" /> */}
          <span className="text-xl font-bold text-blue-400">StartupMitr</span>
        </div>

        
        <ul className="flex space-x-6 mb-4 md:mb-0">
          <li>
            <a href="/" className="hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="/vision" className="hover:text-blue-400">
              Vision
            </a>
          </li>
          <li>
            <a href="/mission" className="hover:text-blue-400">
              Mission
            </a>
          </li>
          <li>
            <a href="/mentors" className="hover:text-blue-400">
              Mentors
            </a>
          </li>
        </ul>

        
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

      
      <div className="text-center text-gray-400 mt-4 text-sm border-t border-gray-700 pt-3">
        &copy; {new Date().getFullYear()} StartupMitr. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
