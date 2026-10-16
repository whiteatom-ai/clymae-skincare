import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
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
  title: 'CLYMAE — Climate-Personalized Skincare',
  description:
    'Four moisturizers, each made for the air you live in — humid, dry heat, cold or temperate. Take the 30-second quiz to find yours.',
  openGraph: {
    title: 'CLYMAE — Skin thrives in its climate',
    description: 'Four climate-personalized moisturizers. Find yours in 30 seconds.',
    images: ['/images/clymae-lineup.jpg'],
    siteName: 'CLYMAE',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans font-light">{children}</body>
    </html>
  );
}
