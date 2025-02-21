import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">
              <img src="/logo.jpeg" alt="Takbiir Enterprises" className="h-12" />
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="flex flex-col space-y-4">
              <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About Us</MobileNavLink>
              <MobileNavLink to="/services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
              <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-gray-800 hover:text-orange-500 transition-colors relative group"
    >
      {children}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
        initial={false}
      />
    </Link>
  );
}

function MobileNavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-gray-800 hover:text-orange-500 transition-colors block py-2"
    >
      {children}
    </Link>
  );
}