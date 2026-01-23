
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-lg border-b border-slate-200' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <img src="/favicon.png" alt="TrustEng Logo" className="h-10 w-10 object-contain" />
            <span className="text-slate-900 text-2xl font-bold tracking-tight group-hover:text-blue-600 transition-colors">Trust Tecnologia</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold tracking-wide transition-colors hover:text-blue-800 ${location.pathname === link.path ? 'text-blue-800' : 'text-slate-800'}`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
            <Link
              to="/demo"
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-600/40 uppercase tracking-wider"
            >
              Visão Técnica
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 bg-white border-b border-slate-200 shadow-xl' : 'max-h-0'}`}>
        <div className="px-6 pt-4 pb-8 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-slate-800 hover:text-blue-800 hover:bg-slate-100 rounded-lg"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/demo"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 mt-4 rounded-lg font-bold text-sm uppercase tracking-wider"
          >
            Visão Técnica
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
