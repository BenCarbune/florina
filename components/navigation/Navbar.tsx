 'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Servicii', href: '#services' },
  { name: 'Galerie', href: '#gallery' },
  { name: 'Despre', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12',
        isScrolled ? 'py-3' : 'py-6'
      )}
    >
      <div className={cn(
        'max-w-7xl mx-auto rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500',
        isScrolled ? 'glass-white shadow-sm py-2' : 'bg-transparent'
      )}>
        <div className='flex items-center gap-2 group cursor-pointer'>
          <Sparkles className='w-5 h-5 text-amber-600 transition-transform group-hover:rotate-12' />
          <span className='font-serif text-lg md:text-xl tracking-widest uppercase font-medium'>
            Florina Scurtu
          </span>
        </div>

        <div className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className='text-sm uppercase tracking-wider text-slate-600 hover:text-amber-600 transition-colors duration-300 font-medium'
            >
              {link.name}
            </a>
          ))}
          <button className='bg-slate-900 text-white px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 font-medium shadow-lg shadow-slate-200'>
            Programare
          </button>
        </div>

        <button 
          className='md:hidden p-2 text-slate-900'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='absolute top-24 left-6 right-6 p-6 glass-white rounded-3xl shadow-xl md:hidden'
          >
            <div className='flex flex-col gap-6'>
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='text-lg font-serif text-slate-800 hover:text-amber-600 transition-colors'
                >
                  {link.name}
                </a>
              ))}
              <button className='w-full bg-slate-900 text-white py-4 rounded-2xl text-sm uppercase tracking-widest font-medium'>
                Programare
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

