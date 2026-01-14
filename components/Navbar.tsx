
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Quem Somos', path: '/about' },
    { name: 'Nossa História', path: '/history' },
    { name: 'Arquitetura', path: '/platform' },
    { name: 'Funcionalidades', path: '/features' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm py-3 shadow-sm border-b border-slate-100' : 'bg-white py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/favicon.png" alt="TrustEng Logo" className="h-10 w-10 object-contain" />
            <span className="text-blue-700 text-3xl font-extrabold tracking-tighter">Trust Tecnologia</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-tight transition-colors hover:text-blue-600 ${location.pathname === link.path ? 'text-blue-700' : 'text-slate-500'}`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
            <Link
              to="/demo"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-sm text-sm font-bold transition-all shadow-sm uppercase tracking-widest"
            >
              VISÃO TÉCNICA
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 bg-white border-b border-slate-100 shadow-lg' : 'max-h-0'}`}>
        <div className="px-6 pt-4 pb-8 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-600 hover:text-blue-700 hover:bg-slate-50 rounded"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/demo"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-blue-700 text-white px-4 py-3.5 mt-4 rounded-sm font-bold text-sm uppercase tracking-widest"
          >
            VISÃO TÉCNICA
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
