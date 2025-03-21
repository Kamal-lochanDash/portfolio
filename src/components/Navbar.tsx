import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen && 
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'py-3 bg-white shadow-sm' 
          : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="text-xl font-semibold cursor-pointer" 
            onClick={() => scrollToSection('hero')}
          >
          Kamal.dev
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('projects')} 
              className="nav-link font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="nav-link font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="nav-link font-medium"
            >
              Contact
            </button>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-primary text-white transition-all hover:bg-primary/90"
            >
              GitHub
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        ref={mobileMenuRef}
        className={cn(
          'fixed inset-0 bg-white pt-20 px-4 transform transition-all duration-300 ease-in-out',
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 z-40' 
            : 'opacity-0 -translate-y-full pointer-events-none -z-10'
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="flex flex-col space-y-6 text-center text-lg">
          <button 
            onClick={() => scrollToSection('projects')} 
            className="py-3 border-b border-gray-100 w-full transition-colors hover:bg-gray-50"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="py-3 border-b border-gray-100 w-full transition-colors hover:bg-gray-50"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="py-3 border-b border-gray-100 w-full transition-colors hover:bg-gray-50"
          >
            Contact
          </button>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 mx-auto px-6 py-3 rounded-lg bg-primary text-white transition-all hover:bg-primary/90"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
