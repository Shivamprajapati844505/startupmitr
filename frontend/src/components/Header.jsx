import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const navigate = useNavigate();
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
        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-900"
        >
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
                `relative text-sm lg:text-lg font-semibold transition duration-300 
                pb-1 transform ease-in-out
                after:content-[''] after:absolute after:left-0 after:-bottom-1 
                after:h-[2px] after:rounded-full after:transition-all after:duration-300
                ${
                  isActive
                    ? "text-sky-700 scale-105 after:w-full after:bg-sky-700"
                    : "text-indigo-900 hover:text-sky-700 hover:scale-105 after:w-0 hover:after:w-full "
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Get Started Button */}
          <button
            onClick={() => navigate("/contact")}
            className="hidden md:flex items-center gap-2 bg-sky-700 group hover:bg-indigo-900 text-white font-semibold 
            text-sm sm:text-base lg:text-lg px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-full shadow transition"
          >
            Get Started
            <div className="p-1.5 sm:p-2 bg-white rounded-full group-hover:bg-indigo-900">
              <ArrowUpRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-sky-700 group-hover:text-white" />
            </div>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-indigo-900"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden bg-white shadow-lg flex flex-col items-center space-y-4 py-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-base font-semibold transition duration-300 ${
                  isActive
                    ? "text-sky-950 underline"
                    : "text-indigo-950 hover:text-sky-950"
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
