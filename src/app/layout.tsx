import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import { PREVIEW } from '@/data/site';
import './globals.css';

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

const sans = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F7F3EC',
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000',
  ),
  title: PREVIEW ? 'CLYMAE (Preview) — Climate-Personalized Skincare' : 'CLYMAE — Climate-Personalized Skincare',
  robots: PREVIEW ? { index: false, follow: false } : undefined,
  description:
    'Four moisturizers, each made for the air you live in — humid, dry heat, cold or temperate. Take the 30-second quiz to find yours.',
  openGraph: {
    title: 'CLYMAE — Skin thrives in its climate',
    description: 'Four climate-personalized moisturizers. Find yours in 30 seconds.',
    images: [{ url: '/images/og.jpg', width: 1200, height: 630, alt: 'The four CLYMAE climate-personalized moisturizers' }],
    siteName: 'CLYMAE',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CLYMAE — Skin thrives in its climate',
    description: 'Four climate-personalized moisturizers. Find yours in 30 seconds.',
    images: ['/images/og.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans font-light">{children}</body>
    </html>
  );
}
