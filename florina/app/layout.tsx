import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import { Metadata } from 'next';
import Navbar from '@/components/navigation/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Florina Scurtu | Beauty Salon & Academy',
  description: 'Experience the pinnacle of hair and beauty care in a sanctuary of white luxury at Florina Scurtu Beauty Salon & Academy.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ro' className='scroll-smooth'>
      <body className={${inter.variable}  font-sans bg-white text-slate-900 antialiased}>
        <div className='relative min-h-screen flex flex-col'>
          <Navbar />
          <main className='flex-grow'>{children}</main>
        </div>
      </body>
    </html>
  );
}

