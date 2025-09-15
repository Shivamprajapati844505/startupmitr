import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-22">
        
        <h1 className="text-3xl font-bold text-indigo-950">Startup Mitr</h1>

        
        <nav className="hidden md:flex space-x-12 pb-0 pt-10">
          <a href="/" className="text-lg font-semibold text-indigo-950 hover:text-violet-600">HOME</a>
          <a href="/about" className="text-lg font-semibold text-indigo-950 hover:text-violet-600">ABOUT</a>
          <a href="/services" className="text-lg font-semibold text-indigo-950 hover:text-violet-600">SERVICES</a>
          <a href="/contact" className="text-lg font-semibold text-indigo-950 hover:text-violet-600">CONTACT</a>
        </nav>

        
    <div className="flex items-center gap-6">
      <button className="hidden md:flex items-center gap-2 bg-violet-700  group hover:bg-violet-950 text-white font-semibold text-lg px-6 py-3 rounded-full shadow">
        Get Started
        <div className=" p-2 bg-white rounded-full group-hover:bg-violet-950 ">
          <ArrowUpRightIcon className="w-5 h-5 text-violet-700 group-hover:text-white" />
        </div>
      </button>
      <FaSearch className="text-2xl text-indigo-950 cursor-pointer hidden md:block" />
          
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-indigo-950"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      
      {open && (
        <nav className="md:hidden bg-white shadow-lg flex flex-col items-center space-y-4 py-6">
          <a href="/" className="font-semibold text-indigo-950 hover:text-violet-600">HOME</a>
          <a href="/about" className="font-semibold text-indigo-950 hover:text-violet-600">ABOUT</a>
          <a href="/services" className="font-semibold text-indigo-950 hover:text-violet-600">SERVICES</a>
          <a href="/contact" className="font-semibold text-indigo-950 hover:text-violet-600">CONTACT</a>
        </nav>
      )}
    </header>
  );
}

export default Header;
