import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-white">
              Krystian Ostrowski
            </a>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#work" className="text-gray-300 hover:text-white transition-colors">
              Projekty
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              O mnie
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Kontakt
            </a>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <a href="#work" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                Projekty
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                O mnie
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                Kontakt
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;