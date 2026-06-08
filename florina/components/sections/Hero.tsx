 'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className='relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50'>
      <div className='absolute inset-0 z-0'>
        <Image 
          src='https://images.unsplash.com/photo-1560066975-6C14430f255b?q=80&w=2000&auto=format&fit=crop' 
          alt='Luxury Salon Interior' 
          fill 
          priority 
          className='object-cover opacity-40 grayscale-[0.2]'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white' />
      </div>

      <div className='relative z-10 max-w-5xl mx-auto px-6 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
          className='mb-6 inline-block'
        >
          <span className='text-amber-600 uppercase tracking-[0.3em] text-xs font-semibold'>
             la Florina Scurtu Beauty Salon & Academy
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.4 }}
          className='text-6xl md:text-8xl font-serif text-slate-900 leading-[1.1] mb-8'
        >
          Unde Frumuse?ea <br />
          <span className='italic font-light'>Întâlne?te Perfec?iunea</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.6 }}
          className='flex flex-col sm:flex-row items-center justify-center gap-6'
        >
          <button className='group relative px-8 py-4 bg-slate-900 text-white rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 font-medium uppercase tracking-widest text-xs flex items-center gap-3 shadow-xl shadow-slate-200'>
            <span className='relative z-10'>Programare Online</span>
            <ArrowRight className='w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform' />
            <div className='absolute inset-0 bg-amber-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500' />
          </button>
          
          <button className='px-8 py-4 text-slate-600 hover:text-amber-600 transition-colors duration-300 uppercase tracking-widest text-xs font-medium'>
            Vezi Servicii
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className='absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'
      >
        <span className='text-[10px] uppercase tracking-widest text-slate-400'>Scroll pentru a descoperi</span>
        <div className='w-px h-12 bg-gradient-to-b from-amber-600/50 to-transparent' />
      </motion.div>
    </section>
  );
}

