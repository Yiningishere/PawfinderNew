import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PawPrint, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <PawPrint className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold">Pawfinder</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-blue-600' : 'text-gray-600'
              } hover:text-blue-600 transition px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              Home
            </Link>
            <Link
              to="/dogs"
              className={`${
                isActive('/dogs') ? 'text-blue-600' : 'text-gray-600'
              } hover:text-blue-600 transition px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              Find a Dog
            </Link>
            <Link
              to="/report"
              className={`${
                isActive('/report') ? 'text-blue-600' : 'text-gray-600'
              } hover:text-blue-600 transition px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              Report Sighting
            </Link>
            <Link
              to="/donate"
              className={`${
                isActive('/donate') ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
              } px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden py-4 absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg transition-transform transform duration-300 ease-in-out"
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col gap-4">
                <Link
                  to="/"
                  className={`${
                    isActive('/') ? 'text-blue-600' : 'text-gray-600'
                  } hover:text-blue-600 transition px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/dogs"
                  className={`${
                    isActive('/dogs') ? 'text-blue-600' : 'text-gray-600'
                  } hover:text-blue-600 transition px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  onClick={() => setIsOpen(false)}
                >
                  Find a Dog
                </Link>
                <Link
                  to="/report"
                  className={`${
                    isActive('/report') ? 'text-blue-600' : 'text-gray-600'
                  } hover:text-blue-600 transition px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  onClick={() => setIsOpen(false)}
                >
                  Report Sighting
                </Link>
                <Link
                  to="/donate"
                  className={`${
                    isActive('/donate') ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
                  } px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  onClick={() => setIsOpen(false)}
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
