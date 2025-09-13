import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-blue-600">Startup Mitr</h1>
        <nav className="space-x-6">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/mission" className="hover:text-blue-600">Mission</a>
          <a href="/vision" className="hover:text-blue-600">Vision</a>
          <a href="/team" className="hover:text-blue-600">Team</a>
          <a href="/mentors" className="hover:text-blue-600">Mentors</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
          <a href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Login</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
