 'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1562322140-8747066447c6?q=80&w=800&auto=format&fit=crop', size: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1592571808886-2570aed93373?q=80&w=800&auto=format&fit=crop', size: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1560868412-75a1d177a17c?q=80&w=800&auto=format&fit=crop', size: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1605039403191-94f083421406?q=80&w=800&auto=format&fit=crop', size: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1580618672532-29f8e475092d?q=80&w=800&auto=format&fit=crop', size: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1600334120701-7715357200f7?q=80&w=800&auto=format&fit=crop', size: 'col-span-2 row-span-1' },
];

export default function Gallery() {
  return (
    <section id='gallery' className='py-24 px-6 md:px-12 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className='mb-4 inline-block'
          >
            <span className='text-amber-600 uppercase tracking-[0.3em] text-xs font-semibold'>Portofoliu</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
            className='text-4xl md:text-5xl font-serif text-slate-900 mb-6'
          >
            Transformari Radicale
          </motion.h2>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4'>
          {IMAGES.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: index * 0.1 }}
              className={cn('relative overflow-hidden rounded-3xl group cursor-pointer', img.size)}
            >
              <Image 
                src={img.src} 
                alt='Hair Transformation' 
                fill 
                className='object-cover transition-transform duration-700 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(' ');
}

