import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & About */}
        <div>
          <h1 className="text-2xl font-bold text-indigo-900">
            Startup<span className="text-red-500">Mitr</span>
          </h1>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            We offer end-to-end business growth solutions from lead generation 
            to distributor module, from branding to strategic guidance all done 
            with transparency and trust.
          </p>
          <div className="flex space-x-4 mt-5">
            <a href="" className="text-gray-500 hover:text-indigo-600">
              <FaFacebookF />
            </a>
            <a href="" className="text-gray-500 hover:text-indigo-600">
              <FaInstagram />
            </a>
            <a href="" className="text-gray-500 hover:text-indigo-600">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">Quick Link</h2>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Service</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Contact Info</h2>
          <ul className="mt-4 text-gray-600 space-y-2 text-sm">
            <li><strong>Website:</strong> www.startupmitr.com</li>
            <li><strong>Email:</strong> itsupport@startupmitr.com</li>
            <li><strong>Phone:</strong> +91 9211603280</li>
          </ul>

          
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t py-4 text-center text-sm text-gray-500">
        © Copyright 2025. All Rights Reserved by <span className="font-semibold">Startupmitr</span>
      </div>
    </footer>
  );
};

export default Footer;
