import React, { useState, useEffect } from 'react';
import { FaCode, FaTools, FaEnvelope, FaUser } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { id: 1, name: 'About', icon: <FaUser className="mr-2" />, href: '#about' },
    { id: 2, name: 'Skills', icon: <FaTools className="mr-2" />, href: '#skills' },
    { id: 3, name: 'Projects', icon: <FaCode className="mr-2" />, href: '#projects' },
    { id: 4, name: 'Contact', icon: <FaEnvelope className="mr-2" />, href: '#footer' }
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/10 backdrop-blur-lg shadow-lg py-2' : 'py-4 bg-white/5 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="container mx-auto px-6 lg:px-20"> {/* Added padding */}
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <a href="#home" className="flex items-center">
              <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 to-red-500 bg-clip-text text-transparent">
               <a href="#home"> Sidharth Giri</a> 
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <motion.div
                key={link.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href={link.href} 
                  className="text-white/80 hover:text-white flex items-center transition-colors duration-300 text-lg font-medium"
                >
                  <motion.span 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                    className="inline-block hover:rotate-180 mr-2 transition-transform duration-500"
                  >
                    {link.icon}
                  </motion.span>
                  {link.name}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              className="text-white focus:outline-none"
            >
              <GiHamburgerMenu size={26} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/10 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <motion.div
                  key={link.id}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * link.id }}
                  className="border-b border-white/10 last:border-0 pb-3"
                >
                  <a
                    href={link.href}
                    className="text-white hover:text-blue-300 flex items-center text-lg py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.span
                      whileHover={{ scale: 1.2 }}
                      className="mr-3 text-blue-300"
                    >
                      {link.icon}
                    </motion.span>
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
