import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary/95 backdrop-blur-md shadow-sm border-b border-body/20 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-black text-heading tracking-tighter"
        >
          Prakhar<span className="text-accent">.</span>Portfolio
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-body">
          <a href="#about" className="hover:text-accent-hover transition-colors">About</a>
          <a href="#skills" className="hover:text-accent-hover transition-colors">Skills</a>
          <a href="#projects" className="hover:text-accent-hover transition-colors">Projects</a>
          <a href="#credentials" className="hover:text-accent-hover transition-colors">Credentials</a>
          <a href="#contact" className="hover:text-accent-hover transition-colors">Contact</a>
        </div>

        {/* Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-body/10 text-body transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun /> : <Moon />}
          </button>

          {/* Resume Button */}
          <Link
            to="/resume"
            className="px-5 py-2 text-sm font-medium text-primary bg-accent rounded-sm hover:bg-accent-hover transition-colors shadow-sm"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 text-body hover:bg-body/10 rounded"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-primary border-b border-body/20 shadow-xl flex flex-col p-4 gap-4 md:hidden animate-fade-in">
          <a href="#about" onClick={toggleMenu} className="text-heading font-medium hover:text-accent-hover">About</a>
          <a href="#skills" onClick={toggleMenu} className="text-heading font-medium hover:text-accent-hover">Skills</a>
          <a href="#projects" onClick={toggleMenu} className="text-heading font-medium hover:text-accent-hover">Projects</a>
          <a href="#credentials" onClick={toggleMenu} className="text-heading font-medium hover:text-accent-hover">Credentials</a>
          <a href="#contact" onClick={toggleMenu} className="text-heading font-medium hover:text-accent-hover">Contact</a>

          <div className="h-px w-full bg-body/20 my-2"></div>

          <div className="flex justify-between items-center text-heading">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-2xl hover:text-accent-hover">
              {isDarkMode ? <Sun /> : <Moon />}
            </button>
            <Link to="/resume" onClick={toggleMenu} className="px-5 py-2 text-sm font-medium text-primary bg-accent rounded-sm text-center shadow-sm hover:bg-accent-hover">
              Download Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;