'use client';
import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { Logo } from './Logo';

const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
};

const navLinks = [
  { title: 'Home.', href: '#home' },
  { title: 'About.', href: '#about' },
  { title: 'Projects.', href: '#projects' },
  { title: 'Contact.', href: '#contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > 20);
    }, 100); 

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1); 
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
    setIsOpen(false); 
  };

  if (!mounted) return null;

  return ( 
       <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 70, damping: 20 }}
      className={`sticky top-2 z-50 w-full backdrop-blur-lg ${
        scrolled 
          ? 'bg-gray-900/90 shadow-lg dark:shadow-primary/20 border-b border-primary/20' 
          : 'bg-gray-900/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center">
            <Logo />
          </a>

          <div className="hidden md:flex items-center  space-x-8">
            {navLinks.map((link) => (   
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)} 
                 className="text-base font-medium text-gray-200 hover:text-primary transition-all duration-300 relative group px-3 py-2"
              >
                {link.title}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-primary to-blue-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4"> 
               <Button
              as="link"
              href="/ZEESHAN CV Mern L.pdf"
              variant="outline"
              size="md"
              target="_blank"
              className="relative px-6 py-2  font-medium text-gray-700 dark:text-gray-200 border border-primary/20 hover:border-blue-primary dark:hover:border-blue-secondary group overflow-hidden rounded-full transition-all duration-300"
            >
              <span className="relative z-10">Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-primary to-blue-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Button>
          </div>

          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:text-blue-primary transition-colors"
          >
            {isOpen ? (
              <IoCloseOutline className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="fixed top-0 right-0 h-screen w-[280px] md:hidden bg-white/95 dark:bg-gray-900/95 shadow-lg z-50 overflow-y-auto border-l border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col h-full">
               
                <div className="flex items-center justify-between px-4 pt-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <Logo />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-700 dark:text-gray-200 hover:text-blue-primary transition-colors"
                  >
                    <IoCloseOutline className="h-6 w-6" />
                  </button>
                </div>
                <div className="flex flex-col flex-grow px-4 py-6">
                  <nav>
                    <ul className="space-y-2">
                      {navLinks.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="block py-3 px-4 text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-primary hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                          >
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  <div className="mt-6">
                    <Button
                      as="link"
                      href="/AQIB_software engineer.pdf"
                      variant="nav"
                      size="md"
                      className="w-full rounded-full relative overflow-hidden"
                      target="_blank"
                    >
                      <span className="relative z-10 text-white font-medium block py-2.5">
                        Resume
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-primary to-blue-secondary"></div>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;