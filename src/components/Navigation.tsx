import React, { useState } from 'react'

interface NavigationProps {
  profileImage?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ profileImage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  return (
    <nav className="fixed top-0 w-full bg-slate-900 bg-opacity-95 backdrop-blur-md z-50 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Profile Image and Name */}
          <a 
            href="#home"
            className="flex items-center space-x-4 flex-shrink-0 hover:opacity-80 transition duration-300 cursor-pointer"
          >
            {profileImage ? (
              <img
                src={profileImage}
                alt="Gal Aviv"
                className="h-14 w-14 rounded-full border-2 border-blue-400 object-cover"
              />
            ) : (
              <div className="h-14 w-14 rounded-full border-2 border-blue-400 bg-slate-700 flex items-center justify-center">
                <span className="text-white font-bold">GA</span>
              </div>
            )}
            <div className="hidden sm:block">
              <h1 className="text-white font-bold text-lg">Gal Aviv</h1>
              <p className="text-blue-400 text-sm">Backend Developer</p>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-white hover:text-blue-400 transition duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-white hover:text-blue-400 transition duration-300 font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white hover:text-blue-400 transition duration-300 font-medium"
            >
              Contact
            </a>
            <a
              href="https://drive.google.com/file/d/1MzvyZOnjESnpifmsQLdVtDIP_wWAXoSF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 font-medium"
            >
              Download CV
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-400 transition duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700 py-4 px-4 space-y-3">
            <a
              href="#home"
              onClick={closeMenu}
              className="block text-white hover:text-blue-400 transition duration-300 font-medium py-2"
            >
              Home
            </a>
            <a
              href="#projects"
              onClick={closeMenu}
              className="block text-white hover:text-blue-400 transition duration-300 font-medium py-2"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block text-white hover:text-blue-400 transition duration-300 font-medium py-2"
            >
              Contact
            </a>
            <a
              href="https://drive.google.com/file/d/1MzvyZOnjESnpifmsQLdVtDIP_wWAXoSF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block w-full text-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 font-medium"
            >
              Download CV
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
