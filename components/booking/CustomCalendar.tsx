'use client';
import React from 'react';

interface CustomCalendarProps {
  onDateSelect: (date: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function CustomCalendar({ onDateSelect, onNext, onBack }: CustomCalendarProps) {
  return (
    <div className='w-full h-full min-h-[400px] flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50/50 text-center'>
      <div className='max-w-sm'>
        <p className='font-serif text-xl text-slate-800 mb-4'>Calendar Integration</p>
        <p className='text-slate-500 text-sm leading-relaxed mb-8'>
          This is the placeholder for the calendar. Your custom logic will be injected here.
        </p>
        <div className='flex gap-4 justify-center'>
          <button 
            onClick={onBack} 
            className='px-6 py-2 text-xs uppercase tracking-widest text-slate-500 hover:text-slate-800 transition-colors'
          >
            Înapoi
          </button>
          <button 
            onClick={onNext} 
            className='px-6 py-2 bg-slate-900 text-white rounded-full text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-md'
          >
            Continua
          </button>
        </div>
      </div>
    </div>
  );
}

