 'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Calendar as CalendarIcon, User, Scissors } from 'lucide-react';
import { cn } from '@/lib/utils';
import CustomCalendar from './CustomCalendar';

type Step = 'service' | 'date' | 'details' | 'success';

const SERVICES = [
  { id: 'balayage', name: 'Balayage Luxury', price: '350 RON', duration: '3h' },
  { id: 'styling', name: 'Styling Haute Couture', price: '120 RON', duration: '1h' },
  { id: 'cut', name: 'Tuns Premium', price: '150 RON', duration: '1.5h' },
  { id: 'treatment', name: 'Tratament Revitalizare', price: '200 RON', duration: '2h' },
];

export default function BookingWizard() {
  const [step, setStep] = useState<Step>('service');
  const [selection, setSelection] = useState({
    service: null as typeof SERVICES[0] | null,
    date: '',
    client: { name: '', email: '', phone: '' },
  });

  const nextStep = () => {
    if (step === 'service') setStep('date');
    else if (step === 'date') setStep('details');
    else if (step === 'details') setStep('success');
  };

  const prevStep = () => {
    if (step === 'date') setStep('service');
    else if (step === 'details') setStep('date');
    else if (step === 'success') setStep('details');
  };

  const steps = [
    { id: 'service', label: 'Serviciu', icon: Scissors },
    { id: 'date', label: 'Data', icon: CalendarIcon },
    { id: 'details', label: 'Date Personale', icon: User },
    { id: 'success', label: 'Confirmare', icon: CheckCircle2 },
  ];

  return (
    <div className='fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8'>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='absolute inset-0 bg-slate-900/20 backdrop-blur-sm'
        onClick={() => setStep('service')} // Simple close for now
      />
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className='relative w-full max-w-3xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]'
      >
        {/* Header / Progress */}
        <div className='px-8 py-6 border-b border-slate-100 flex items-center justify-between'>
          <span className='font-serif text-lg text-slate-800'>Programare</span>
          <div className='flex gap-2'>
            {steps.map((s, i) => (
              <div 
                key={s.id} 
                className={cn(
                  'h-1 w-8 rounded-full transition-all duration-500',
                  (step === 'service' && i === 0) || (step === 'date' && i === 1) || (step === 'details' && i === 2) || (step === 'success' && i === 3) 
                    ? 'bg-amber-600 w-12' 
                    : 'bg-slate-200'
                )}
              />
            ))}
          </div>
        </div>

        <div className='flex-grow overflow-y-auto p-8'>
          <AnimatePresence mode='wait'>
            {step === 'service' && (
              <motion.div 
                key='service'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className='space-y-6'
              >
                <div className='text-center mb-8'>
                  <h2 className='font-serif text-3xl text-slate-900 mb-2'>Alege?i Serviciul</h2>
                  <p className='text-slate-500 text-sm'>Selecta?i experien?a pe care dori?i sa o experimenta?i.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {SERVICES.map((service) => (
                    <button 
                      key={service.id}
                      onClick={() => setSelection({ ...selection, service })}
                      className={cn(
                        'p-6 rounded-2xl text-left transition-all border-2 group',
                        selection.service?.id === service.id 
                          ? 'border-amber-600 bg-amber-50/30' 
                          : 'border-slate-100 hover:border-amber-200 hover:bg-slate-50'
                      )}
                    >
                      <div className='flex justify-between items-start mb-2'>
                        <span className='font-serif text-lg text-slate-800'>{service.name}</span>
                        <span className='text-xs font-medium text-amber-600'>{service.price}</span>
                      </div>
                      <p className='text-xs text-slate-400 group-hover:text-slate-500 transition-colors'>
                        Durata estimata: {service.duration}
                      </p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 'date' && (
              <motion.div 
                key='date'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className='h-full'
              >
                <div className='text-center mb-8'>
                  <h2 className='font-serif text-3xl text-slate-900 mb-2'>Alege?i Data</h2>
                  <p className='text-slate-500 text-sm'>Va rugam sa selecta?i un interval orar disponibil.</p>
                </div>
                <CustomCalendar 
                  onDateSelect={(date) => setSelection({ ...selection, date })}
                  onNext={nextStep}
                  onBack={prevStep}
                />
              </motion.div>
            )}

            {step === 'details' && (
              <motion.div 
                key='details'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className='max-w-md mx-auto space-y-8'
              >
                <div className='text-center mb-8'>
                  <h2 className='font-serif text-3xl text-slate-900 mb-2'>Datele Voastre</h2>
                  <p className='text-slate-500 text-sm'>Pentru a finaliza programarea, avem nevoie de câteva detalii.</p>
                </div>
                <div className='space-y-4'>
                  <div className='space-y-2'>
                    <label className='text-xs uppercase tracking-widest text-slate-500 font-medium ml-1'>Nume Complet</label>
                    <input 
                      type='text' 
                      placeholder='Ex: Maria Popescu'
                      className='w-full px-6 py-4 bg-slate-50 border-transparent focus:border-amber-600 focus:ring-0 rounded-2xl text-sm transition-all outline-none border-2 border-transparent hover:border-slate-200'
                      value={selection.client.name}
                      onChange={(e) => setSelection({ ...selection, client: { ...selection.client, name: e.target.value } })}
                    />
                  </div>
                  <div className='space-y-2'>
                    <label className='text-xs uppercase tracking-widest text-slate-500 font-medium ml-1'>Email</label>
                    <input 
                      type='email' 
                      placeholder='email@exemplu.ro'
                      className='w-full px-6 py-4 bg-slate-50 border-transparent focus:border-amber-600 focus:ring-0 rounded-2xl text-sm transition-all outline-none border-2 border-transparent hover:border-slate-200'
                      value={selection.client.email}
                      onChange={(e) => setSelection({ ...selection, client: { ...selection.client, email: e.target.value } })}
                    />
                  </div>
                  <div className='space-y-2'>
                    <label className='text-xs uppercase tracking-widest text-slate-500 font-medium ml-1'>Telefon</label>
                    <input 
                      type='tel' 
                      placeholder='07xx xxx xxx'
                      className='w-full px-6 py-4 bg-slate-50 border-transparent focus:border-amber-600 focus:ring-0 rounded-2xl text-sm transition-all outline-none border-2 border-transparent hover:border-slate-200'
                      value={selection.client.phone}
                      onChange={(e) => setSelection({ ...selection, client: { ...selection.client, phone: e.target.value } })}
                    />
                  </div>
                </div>
                <div className='flex gap-4 pt-4'>
                  <button 
                    onClick={prevStep}
                    className='flex-1 px-6 py-4 text-slate-500 hover:text-slate-800 transition-colors text-xs uppercase tracking-widest font-medium'
                  >
                    Înapoi
                  </button>
                  <button 
                    onClick={nextStep}
                    className='flex-[2] px-6 py-4 bg-slate-900 text-white rounded-full text-xs uppercase tracking-widest font-medium hover:bg-slate-800 transition-all shadow-lg'
                  >
                    Confirma Programarea
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'success' && (
              <motion.div 
                key='success'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className='text-center py-12 space-y-6'
              >
                <div className='w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-8'>
                  <CheckCircle2 className='w-10 h-10 text-amber-600' />
                </div>
                <h2 className='font-serif text-4xl text-slate-900 mb-4'>Programare Confirmata!</h2>
                <p className='text-slate-500 max-w-sm mx-auto text-sm leading-relaxed'>
                  Va a?teptam cu drag la salon. Ve?i primi un mesaj de confirmare pe email în curând.
                </p>
                <button 
                  onClick={() => setStep('service')}
                  className='px-8 py-4 bg-slate-900 text-white rounded-full text-xs uppercase tracking-widest font-medium hover:bg-slate-800 transition-all'
                >
                  Închide
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

