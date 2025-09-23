import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/logo.png"; 

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-100 to-gray-300">
      <div className="container mx-auto px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Logo & About */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="MonkClick Logo" className="h-20 w-auto mb-6" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm">
            Our mission is to elevate your brand's presence, drive measurable
            results, and build sustainable growth through innovative and
            data-driven strategies.
          </p>
          
        </div>

        {/* Quick Links */}
       <div className="text-center">
  <h2 className="text-xl font-semibold text-indigo-900 mb-6">
    Quick Links
  </h2>
  <ul className="flex flex-wrap justify-center gap-4 text-gray-700 text-sm sm:text-base">
    <li>
      <a href="/" className="text-indigo-900 hover:text-sky-700 hover:scale-105 transition-colors duration-300 font-semibold">
        Home
      </a>
    </li>
    <li>
      <a href="/categories" className="text-indigo-900 hover:text-sky-700 transition-colors duration-300 font-semibold">
        Category
      </a>
    </li>
    <li>
      <a href="/about" className="text-indigo-900 hover:text-sky-700 transition-colors duration-300 font-semibold">
        About Us
      </a>
    </li>
    <li>
      <a href="/services" className="text-indigo-900 hover:text-sky-700 transition-colors duration-300 font-semibold">
        Services
      </a>
    </li>
    <li>
      <a href="/contact" className="text-indigo-900 hover:text-sky-700 transition-colors duration-300 font-semibold">
        Contact Us
      </a>
    </li>
  </ul>
  <div className="flex justify-center space-x-6 mt-10">
    <a
      href=""
      className="bg-indigo-100 text-sky-700 hover:bg-indigo-200 p-3 rounded-full transition-colors duration-300"
    >
      <FaFacebookF />
    </a>
    <a
      href=""
      className="bg-indigo-100 text-sky-700  hover:bg-indigo-300 p-3 rounded-full transition-colors duration-300"
    >
      <FaInstagram />
    </a>
    <a
      href=""
      className="bg-indigo-100 text-sky-700 hover:bg-indigo-200 p-3 rounded-full transition-colors duration-300"
    >
      <FaLinkedinIn />
    </a>
    <a
      href=""
      className="bg-indigo-100 text-sky-700 hover:bg-indigo-200 p-3 rounded-full transition-colors duration-300"
    >
      <FaWhatsapp />
    </a>
  </div>
</div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-indigo-900 mb-6">
            Get in touch
          </h2>
          <ul className="space-y-4 text-gray-700 text-sm sm:text-base">
            <li className="flex items-center gap-3">
              <span className="bg-indigo-100 text-sky-700 p-3 rounded-full flex items-center justify-center">
                <FaEnvelope />
              </span>
              <a
                href="mailto:info@monkclick.in"
                className="hover:text-indigo-600 transition-colors duration-300"
              >
                itsupport@startupmitr.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-indigo-100 text-sky-700 p-3 rounded-full flex items-center justify-center">
                <FaMapMarkerAlt />
              </span>
              <span>C-171 Sector 63, Noida, Uttar Pradesh – 201301</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-indigo-100 text-sky-700 p-3 rounded-full flex items-center justify-center">
                <FaPhoneAlt />
              </span>
              <a
                href="tel:+919335817497"
                className="hover:text-indigo-600 transition-colors duration-300"
              >
                +91-9211603280
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className=" py-4 text-center text-sm text-white bg-indigo-900 px-6 md:px-20">
        <div>© {new Date().getFullYear()} Startup Mitr. All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
