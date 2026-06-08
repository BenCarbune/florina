 'use client';
import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id='contact' className='bg-slate-50 py-20 px-6 md:px-12 border-t border-slate-200'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-16'>
          <div className='space-y-6'>
            <div className='flex items-center gap-2 mb-6'>
              <div className='w-2 h-2 bg-amber-600 rounded-full' />
              <span className='font-serif text-xl tracking-widest uppercase font-medium'>Florina Scurtu</span>
            </div>
            <p className='text-slate-500 text-sm leading-relaxed max-w-xs'>
              O destina?ie de lux pentru frumuse?e ?i educa?ie, unde pasiunea pentru arta se împlete?te cu precizia tehnica.
            </p>
            <div className='flex gap-4'>
              <a href='#' className='p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-amber-600 transition-all hover:scale-110 shadow-sm'>
                <Instagram className='w-5 h-5' />
              </a>
              <a href='#' className='p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-amber-600 transition-all hover:scale-110 shadow-sm'>
                <Facebook className='w-5 h-5' />
              </a>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-12'>
            <div className='space-y-6'>
              <h4 className='text-xs uppercase tracking-widest font-bold text-slate-900 mb-6'>Navigare</h4>
              <ul className='space-y-4'>
                <li><a href='#services' className='text-sm text-slate-500 hover:text-amber-600 transition-colors'>Servicii</a></li>
                <li><a href='#gallery' className='text-sm text-slate-500 hover:text-amber-600 transition-colors'>Galerie</a></li>
                <li><a href='#about' className='text-sm text-slate-500 hover:text-amber-600 transition-colors'>Despre</a></li>
              </ul>
            </div>
            <div className='space-y-6'>
              <h4 className='text-xs uppercase tracking-widest font-bold text-slate-900 mb-6'>Legal</h4>
              <ul className='space-y-4'>
                <li><a href='#' className='text-sm text-slate-500 hover:text-amber-600 transition-colors'>Politica Confiden?ialitate</a></li>
                <li><a href='#' className='text-sm text-slate-500 hover:text-amber-600 transition-colors'>Termeni & Condi?ii</a></li>
              </ul>
            </div>
          </div>

          <div className='space-y-8'>
            <h4 className='text-xs uppercase tracking-widest font-bold text-slate-900 mb-6'>Contact</h4>
            <div className='space-y-4'>
              <div className='flex items-center gap-4 text-slate-600'>
                <MapPin className='w-5 h-5 text-amber-600' />
                <span className='text-sm'>Strada Avram Iancu 456B, Flore?ti</span>
              </div>
              <div className='flex items-center gap-4 text-slate-600'>
                <Phone className='w-5 h-5 text-amber-600' />
                <span className='text-sm'>0749 364 124</span>
              </div>
              <div className='flex items-center gap-4 text-slate-600'>
                <Mail className='w-5 h-5 text-amber-600' />
                <span className='text-sm'>contact@florinascurtu.ro</span>
              </div>
            </div>
          </div>
        </div>

        <div className='pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6'>
          <p className='text-xs text-slate-400'>© 2026 Florina Scurtu Beauty Salon & Academy. Toate drepturile rezervate.</p>
          <div className='flex items-center gap-2 text-xs text-slate-400 uppercase tracking-widest'>
            Made with <Heart className='w-3 h-3 text-amber-600' /> for Excellence
          </div>
        </div>
      </div>
    </section>
  );
}

