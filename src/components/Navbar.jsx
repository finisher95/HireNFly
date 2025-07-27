import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);


  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="h-10" />
              <span className="text-xl font-bold text-gray-800">HireNFly</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex items-center gap-4 text-gray-700 text-sm font-medium">
              <li>
                <Link to="/" className="hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-500">
                  About
                </Link>
              </li>
              <li
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span className="cursor-pointer px-4 py-2 block text-gray-700 dark:text-gray-200 hover:text-blue-500">
                  Services
                </span>
                {isServicesOpen && (
                  <ul className="absolute z-20 top-full left-0 bg-white dark:bg-gray-800 shadow-md rounded-md mt-2 py-2 w-40">
                    <li>
                      <Link
                        to="/services/web-development"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/ui-ux"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        UI/UX Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/placement-training"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Placement Training
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/submit-cv" className="hover:text-blue-500">
                  Submit CV
                </Link>
              </li>
              <li>
                <Link to="/student-form" className="hover:text-blue-500">
                  Student Form
                </Link>
              </li>
            </ul>

            {/* Search Bar */}
            <div className="relative w-48">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 pl-10 rounded-md bg-gray-100 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                />
              </svg>
            </div>

            {/* Account Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAccountOpen(!accountOpen)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                aria-label="Account"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A10.97 10.97 0 0112 15c2.21 0 4.247.636 5.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>

              {accountOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 text-gray-700 text-sm font-medium">
            <li>
              <Link to="/" className="block hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block hover:text-blue-500">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/submit-cv" className="block hover:text-blue-500">
                Submit CV
              </Link>
            </li>
            <li>
              <Link to="/student-form" className="block hover:text-blue-500">
                Student Form
              </Link>
            </li>
            <li>
              <Link to="/login" className="block hover:text-blue-500">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="block hover:text-blue-500">
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
