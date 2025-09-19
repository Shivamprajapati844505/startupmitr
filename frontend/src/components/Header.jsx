import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 sm:px-6 lg:px-12">
        
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-950">
          <img
            src={logo}
            alt="brand_logo"
            className="w-32 h-18 sm:w-40 md:w-48 lg:w-60 xl:w-60"
          />
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 pt-6 lg:space-x-12">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) =>
                `text-sm lg:text-lg font-semibold transition ${
                  isActive
                    ? "text-violet-600" // Active color
                    : "text-indigo-950 hover:text-violet-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4 lg:gap-6">
          
          <button onClick={()=>navigate('/contact')}
           className="hidden md:flex items-center gap-2 bg-violet-700 group hover:bg-violet-950 text-white font-semibold 
            text-sm sm:text-base lg:text-lg px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-full shadow transition">
            Get Started
            <div className="p-1.5 sm:p-2 bg-white rounded-full group-hover:bg-violet-950">
              <ArrowUpRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-violet-700 group-hover:text-white" />
            </div>
          </button>

         
          <FaSearch className="text-xl lg:text-2xl text-indigo-950 cursor-pointer hidden md:block" />

          {/* Hamburger */}
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
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-semibold transition ${
                  isActive
                    ? "text-violet-600"
                    : "text-indigo-950 hover:text-violet-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
