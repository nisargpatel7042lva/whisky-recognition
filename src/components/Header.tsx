import React from 'react';
import { Asterisk as Whisky, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Whisky className="h-8 w-8 text-primary-500" />
          <div>
            <h1 className="text-lg md:text-xl font-display font-semibold">BAXUS</h1>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 -mt-1">Whisky Recognition</p>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-neutral-800 dark:text-neutral-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors ${
              location.pathname === '/' ? 'text-primary-500 dark:text-primary-400' : ''
            }`}
          >
            Home
          </Link>
          <Link 
            to="/history" 
            className={`text-neutral-800 dark:text-neutral-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors ${
              location.pathname === '/history' ? 'text-primary-500 dark:text-primary-400' : ''
            }`}
          >
            History
          </Link>
          <Link 
            to="/about" 
            className={`text-neutral-800 dark:text-neutral-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors ${
              location.pathname === '/about' ? 'text-primary-500 dark:text-primary-400' : ''
            }`}
          >
            About
          </Link>
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <AnimatePresence initial={false} mode="wait">
              {isDarkMode ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="h-5 w-5 text-neutral-200" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="h-5 w-5 text-neutral-800" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 mr-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-neutral-200" />
            ) : (
              <Moon className="h-5 w-5 text-neutral-800" />
            )}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-neutral-800 dark:text-neutral-200" />
            ) : (
              <Menu className="h-6 w-6 text-neutral-800 dark:text-neutral-200" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800"
          >
            <div className="container mx-auto px-4 py-2">
              <nav className="flex flex-col space-y-4 py-4">
                <Link 
                  to="/" 
                  className={`px-4 py-2 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors ${
                    location.pathname === '/' ? 'bg-neutral-100 dark:bg-neutral-800' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/history" 
                  className={`px-4 py-2 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors ${
                    location.pathname === '/history' ? 'bg-neutral-100 dark:bg-neutral-800' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  History
                </Link>
                <Link 
                  to="/about" 
                  className={`px-4 py-2 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors ${
                    location.pathname === '/about' ? 'bg-neutral-100 dark:bg-neutral-800' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;