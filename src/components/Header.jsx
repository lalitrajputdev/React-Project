import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-40"
      data-aos="fade-down"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* 🔻 Logo + Name */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/Logo.png"
            alt="Genius App Hub Logo"
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Genius App Hub
          </h1>
        </div>

        {/* 🔻 Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden focus:outline-none text-gray-800 dark:text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* 🔻 Navigation Links for Large Screens */}
        <nav className="hidden lg:flex space-x-6 items-center">
          <a href="/" className="hover:text-indigo-600">Home</a>
          <a href="#apps" className="hover:text-indigo-600">Apps</a>
          <a href="#blog" className="hover:text-indigo-600">Blog</a>
          <a href="#about" className="hover:text-indigo-600">About</a>
          <Link to="/privacy-policy" className="hover:text-indigo-600">
            Privacy Policy
          </Link>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>
      </div>

      {/* 🔻 Overlay - Click to close mobile menu */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        />
      )}

      {/* 🔻 Mobile Menu with Smooth Slide Animation */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-transform dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50
    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* <div className={`fixed top-16 left-0 h-[calc(100%-64px)] w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50
${isOpen ? "translate-x-0" : "-translate-x-full"}`}> */}

        <nav className="flex flex-col space-y-4 p-6 mt-16">
          <a href="/" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#apps" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>Apps</a>
          <a href="#blog" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>Blog</a>
          <a href="#about" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>About</a>
          <Link to="/privacy-policy" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>
            Privacy Policy
          </Link>
          <a href="#contact" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
      </div>



      {/* <div
        className={`lg:hidden bg-white dark:bg-gray-800 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 p-4 border-t border-gray-200 dark:border-gray-700">
          <a href="/" className="hover:text-indigo-600">Home</a>
          <a href="#apps" className="hover:text-indigo-600">Apps</a>
          <a href="#blog" className="hover:text-indigo-600">Blog</a>
          <a href="#about" className="hover:text-indigo-600">About</a>
          <Link to="/privacy-policy" className="hover:text-indigo-600">
            Privacy Policy
          </Link>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>
      </div> */}


    </header>
  );
};

export default Header;
