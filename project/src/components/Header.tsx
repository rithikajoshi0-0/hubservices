import React, { useState } from 'react';
import { Menu, X, User, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">FreelanceHub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-600 hover:text-cyan-500 transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-cyan-500 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-cyan-500 transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-600 hover:text-cyan-500 transition-colors duration-200"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-gray-600 hover:text-cyan-500 transition-colors duration-200"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors duration-200"
            >
              Get Quote
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>hello@freelancehub.in</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-cyan-500"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-600 hover:text-cyan-500 transition-colors duration-200 py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-600 hover:text-cyan-500 transition-colors duration-200 py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-600 hover:text-cyan-500 transition-colors duration-200 py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-gray-600 hover:text-cyan-500 transition-colors duration-200 py-2"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="text-left text-gray-600 hover:text-cyan-500 transition-colors duration-200 py-2"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors duration-200 w-fit"
              >
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;