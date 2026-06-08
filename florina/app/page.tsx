 'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Gallery from '@/components/sections/Gallery';
import Footer from '@/components/sections/Footer';
import Navbar from '@/components/navigation/Navbar';
import BookingWizard from '@/components/booking/BookingWizard';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Trigger for Booking Wizard - Typically handled by Navbar button, but for demo we use a global state here */}
      {/* Since Navbar is a separate component, we'd normally use a store or a prop. For this standalone page, we'll add a floating trigger or handle it in Navbar. */}
      
      <AnimatePresence>
        {isLoading ? (
          <motion.div 
            key='loader'
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className='fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center'
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: 'spring', 
                stiffness: 100, 
                damping: 20,
                delay: 0.2 
              }}
              className='flex flex-col items-center gap-4'
            >
              <Sparkles className='w-12 h-12 text-amber-600 animate-pulse' />
              <span className='font-serif text-2xl tracking-[0.3em] uppercase text-slate-900'>
                Florina Scurtu
              </span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key='content'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Hero />
            <Services />
            <Gallery />
            <Footer />
            
            {/* Booking Wizard Overlay */}
            <AnimatePresence>
              {isBookingOpen && <BookingWizard />}
            </AnimatePresence>
            
            {/* Fixed trigger for demo purposes since Navbar is isolated */}
            <button 
              onClick={() => setIsBookingOpen(true)}
              className='fixed bottom-8 right-8 z-40 bg-slate-900 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all'
            >
              <Sparkles className='w-6 h-6 text-amber-600' />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

