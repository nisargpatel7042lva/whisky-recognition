import React from 'react';
import { Github, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-display text-lg font-semibold">BAXUS Whisky Recognition</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              AI-powered whisky identification system
            </p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="#" 
              className="text-neutral-700 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors" 
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="text-neutral-700 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors" 
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="#" 
              className="text-neutral-700 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors" 
              aria-label="Website"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-sm text-neutral-600 dark:text-neutral-400 text-center">
          <p>&copy; {new Date().getFullYear()} BAXUS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;