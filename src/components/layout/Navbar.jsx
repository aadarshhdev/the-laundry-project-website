import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar({ onBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-secondary/5 border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/30 group-hover:shadow-primary-600/50 transition-shadow">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.5 10h-2v7h2v-7zm6 0h-2v7h2v-7zm8.5 9H2v2h19v-2zm-2.5-9h-2v7h2v-7zM11.5 1L2 6v2h19V6l-9.5-5z" />
              </svg>
            </div>
            <div>
              <span className={`font-display font-bold text-lg leading-tight ${scrolled || open ? 'text-secondary' : 'text-white'}`}>
                The Real<span className={scrolled || open ? 'text-primary-600' : 'text-primary-300'}> Project</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === to
                    ? scrolled ? 'text-primary-600 bg-primary-50' : 'text-white bg-white/15'
                    : scrolled
                      ? 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50/60'
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919999999999"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${scrolled ? 'text-secondary-700 hover:text-primary-600' : 'text-gray-200 hover:text-white'}`}
            >
              <FiPhone className="w-4 h-4" />
              +91 99999 99999
            </a>
            <button onClick={onBooking} className="btn-primary text-sm px-5 py-2.5">
              Book Pickup
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg text-secondary-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    pathname === to
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-secondary-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2 mt-1">
                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-secondary-700"
                >
                  <FiPhone className="w-4 h-4 text-primary-600" />
                  +91 99999 99999
                </a>
                <button onClick={onBooking} className="btn-primary w-full justify-center">
                  Book Pickup
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
