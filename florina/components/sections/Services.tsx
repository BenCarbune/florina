 'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, Wand2, Heart } from 'lucide-react';

const SERVICES = [
  { 
    title: 'Balayage & Color', 
    description: 'Tehnici avansate de colorare pentru un aspect natural ?i luminos.', 
    icon: Scissors,
    details: ['Balayage Premium', 'Ombré', 'Colorare Totala', 'Retu? Radacini']
  },
  { 
    title: 'Styling & Tuns', 
    description: 'Forme moderne ?i tunsuri personalizate care pun în valoare trasaturile fe?ei.', 
    icon: Sparkles,
    details: ['Tuns Feminin', 'Blow-dry Haute Couture', 'Upscaling Volum', 'Tuns în Cadrat']
  },
  { 
    title: 'Tratamente Scalp', 
    description: 'Sanatatea parului începe de la radacina. Tratamente intensive de hidratare.', 
    icon: Wand2,
    details: ['Kérastase Ritual', 'Hidratare Profunda', 'Detox Scalp', 'Tratament Anti-Cadere']
  },
  { 
    title: 'Academy & Cursuri', 
    description: 'Formam viitoarea genera?ie de exper?i în frumuse?e prin cursuri riguroase.', 
    icon: Heart,
    details: ['Curs Baza Tuns', 'Masterclass Color', 'Management Salon', 'Tehnici Avansate']
  },
];

export default function Services() {
  return (
    <section id='services' className='py-24 px-6 md:px-12 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-20'>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className='mb-4 inline-block'
          >
            <span className='text-amber-600 uppercase tracking-[0.3em] text-xs font-semibold'>Expertiza</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
            className='text-4xl md:text-5xl font-serif text-slate-900 mb-6'
          >
            Serviciile Noastre
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
            className='text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed'
          >
            Fiecare detaliu este lucrat cu precizie pentru a crea un look care sa reflecte personalitatea ?i elegan?a ta naturala.
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className='p-8 rounded-3xl bg-slate-50 border border-slate-100 luxury-shadow group cursor-pointer transition-all hover:bg-white hover:border-amber-100'
            >
              <div className='w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-500'>
                <service.icon className='w-6 h-6 text-amber-600' />
              </div>
              <h3 className='font-serif text-2xl text-slate-900 mb-3'>{service.title}</h3>
              <p className='text-slate-500 text-sm mb-6 leading-relaxed'>
                {service.description}
              </p>
              <ul className='space-y-3'>
                {service.details.map((detail) => (
                  <li key={detail} className='text-xs text-slate-400 flex items-center gap-2 group-hover:text-slate-600 transition-colors'>
                    <div className='w-1 h-1 bg-amber-600 rounded-full' />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

