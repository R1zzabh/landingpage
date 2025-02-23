import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavItem = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  let timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => setIsOpen(true), 30);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => setIsOpen(false), 30);
  };

  return (
    <div className="relative flex justify-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="px-4 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center gap-1">
        {title}
        <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && items?.length > 0 && (
        <div className="absolute left-0 mt-8 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
          {items.map((item, index) => (
            <a key={index} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-200 rounded-md">
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = {
    'Marketing': ['Digital Marketing Agency', 'Digital Marketing', 'Email Marketing Services', 'SEO Agency', 'SEO Services', 'SMM Instagram', 'SMM Services', 'Creative Agency'],
    'Digital': ['Web Development Agency', 'Content Writing Agency', 'Mobile App Landing', 'Online Course Landing', 'Saas Services', 'Software Landing'],
    'Business Consulting': ['Financial Consultant', 'IT Consultant', 'Business Consultant Services'],
    'Events': ['Conferences', 'Workshops', 'Webinars', 'Meetups'],
    'Law': ['Legal Advice', 'Corporate Law', 'Tax Law', 'Family Law'],
    'Sell Online': ['E-commerce', 'Dropshipping', 'Affiliate Marketing'],
    'Blog': ['Tech Blog', 'Business Insights', 'Marketing Tips'],
    'Contact Us': ['Customer Support', 'Feedback', 'Careers']
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/50 backdrop-blur-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <div className="hidden md:flex items-center space-x-4">
            {Object.entries(navItems).map(([title, items]) => (
              <NavItem key={title} title={title} items={items} />
            ))}
          </div>
          <button className="md:hidden p-2 text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {mobileMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-white md:hidden">
              {Object.entries(navItems).map(([title, items]) => (
                <div key={title} className="border-b border-gray-200">
                  <button className="w-full text-left px-4 py-3 font-medium text-gray-700 hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                    {title}
                  </button>
                  {items.length > 0 && (
                    <div className="pl-6">
                      {items.map((item, index) => (
                        <a key={index} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          <button className="px-6 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors duration-200">
            Buy Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
