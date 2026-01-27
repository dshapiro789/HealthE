/**
 * Root Layout
 * ===========
 * Main application layout with fonts, metadata, and global components
 * 
 * DEVELOPER NOTES:
 * - Add GA4 ID to NEXT_PUBLIC_GA_ID environment variable
 * - Fonts are loaded via next/font for optimal performance
 * - Cookie consent banner controls analytics loading
 */

import type { Metadata, Viewport } from 'next';
import { Outfit, DM_Sans, JetBrains_Mono } from 'next/font/google';
import { Header, Footer } from '@/components/layout';
import { CookieConsent } from '@/components/common';
import './globals.css';

// Font configurations
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
});

/**
 * SITE METADATA
 * Update these values for SEO
 */
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://healthe.com'),
  title: {
    default: 'Health-E | Digital Wellness Solutions',
    template: '%s | Health-E',
  },
  description: 'Your trusted destination for premium health and wellness products. Discover curated supplements, peptides, wellness tech, and more from leading brands.',
  keywords: [
    'health products',
    'wellness',
    'supplements',
    'peptides',
    'fitness',
    'nutrition',
    'wellness tech',
    'health marketplace',
  ],
  authors: [{ name: 'Health-E' }],
  creator: 'Health-E Digital Wellness Solutions',
  publisher: 'Health-E',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Health-E',
    title: 'Health-E | Digital Wellness Solutions',
    description: 'Your trusted destination for premium health and wellness products.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Health-E Digital Wellness Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health-E | Digital Wellness Solutions',
    description: 'Your trusted destination for premium health and wellness products.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#4A9B6F',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${outfit.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Google Analytics - Only loads if GA_ID is provided */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                  // Default consent mode - denied until user accepts
                  gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-sans antialiased bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
