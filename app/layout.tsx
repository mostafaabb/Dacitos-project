import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/theme-provider';
import { SmoothScrollProvider } from '@/lib/smooth-scroll';
import { Cursor } from '@/components/ui/Cursor';
import { ReadingProgress } from '@/components/layout/ReadingProgress';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Amaze PMS 2.0 — Autonomous Property Operating System',
  description:
    'Unify direct bookings, dynamic yield revenue AI, keyless guest check-in, and multi-channel operations into a single sub-second cloud platform built for modern hotel chains and rental portfolios.',
  keywords: [
    'Property Management System',
    'PMS 2.0',
    'Hotel Software',
    'Vacation Rental Software',
    'Revenue Management AI',
    'Keyless Guest Entry',
    'Channel Manager',
    'Amaze PMS',
  ],
  authors: [{ name: 'Amaze PMS Systems' }],
  creator: 'Amaze PMS 2.0 Inc.',
  metadataBase: new URL('https://www.amazepms.com'),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.amazepms.com',
    title: 'Amaze PMS 2.0 — Autonomous Property Operating System',
    description:
      'The Next-Generation PMS built for hotel chains and multi-property managers. Powered by Autonomous Yield AI & Keyless Guest Tech.',
    siteName: 'Amaze PMS 2.0',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'Amaze PMS 2.0 Command Hub Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amaze PMS 2.0 — Next-Gen Hospitality Operating System',
    description:
      'Sub-second channel sync, autonomous revenue AI, keyless guest check-in, and unified multi-calendar.',
    images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Amaze PMS 2.0',
    operatingSystem: 'All Web Browsers, iOS, Android',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '149.00',
      priceCurrency: 'USD',
    },
    description:
      'Autonomous property operating system unifying direct bookings, dynamic yield pricing, keyless check-in, and channel synchronization.',
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} suppressHydrationWarning`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-950 text-white font-sans antialiased selection:bg-cyan-500 selection:text-slate-950 bg-noise">
        <ThemeProvider>
          <SmoothScrollProvider>
            <ReadingProgress />
            <Cursor />
            {children}
            <Analytics />
            <SpeedInsights />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
