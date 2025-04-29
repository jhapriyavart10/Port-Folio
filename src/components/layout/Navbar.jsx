import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set navbar to sticky when scrolled
      setIsScrolled(window.scrollY > 10);
      
      // Find the current section in view
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop - 80
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-gray-900 shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          className="font-heading text-2xl font-bold text-primary-light dark:text-primary-dark"
          whileHover={{ scale: 1.05 }}
        >
          <a href="#home">Portfolio</a>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map(item => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className={`px-4 py-2 rounded-md text-sm font-medium hover:text-primary-light dark:hover:text-primary-dark transition-colors ${
                activeSection === item.id ? 
                'text-primary-light dark:text-primary-dark' : 
                'text-gray-700 dark:text-gray-300'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div 
                  className="h-1 bg-primary-light dark:bg-primary-dark rounded-full mt-1"
                  layoutId="activeSection"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-2 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="container mx-auto py-4 flex flex-col space-y-2">
              {navItems.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-4 py-3 rounded-md text-sm font-medium ${
                    activeSection === item.id ? 
                    'text-primary-light dark:text-primary-dark bg-gray-100 dark:bg-gray-800' : 
                    'text-gray-700 dark:text-gray-300'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
