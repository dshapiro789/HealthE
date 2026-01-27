/**
 * CookieConsent Component
 * =======================
 * GDPR/CCPA compliant cookie consent banner
 * 
 * DEVELOPER NOTES:
 * - Stores consent in localStorage
 * - Only loads analytics after consent
 * - Respects 'decline' choice
 */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CONSENT_KEY = 'healthe-cookie-consent';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Small delay before showing banner for better UX
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setShowBanner(false);
    
    // Initialize analytics tracking
    // This is where you would enable GA4/GTM
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setShowBanner(false);
    
    // Disable analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
      });
    }
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto">
            <div className="relative bg-white rounded-2xl shadow-lg border border-border/50 p-6 md:flex md:items-center md:justify-between gap-6">
              {/* Close button for mobile */}
              <button
                onClick={handleDecline}
                className="absolute top-4 right-4 md:hidden text-foreground-muted hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-start gap-4 mb-4 md:mb-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-green-100 to-brand-blue-100 flex items-center justify-center shrink-0">
                  <Cookie className="w-5 h-5 text-brand-green-500" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    We value your privacy
                  </h3>
                  <p className="text-sm text-foreground-muted max-w-xl">
                    We use cookies to enhance your browsing experience, analyze site traffic, 
                    and personalize content. By clicking &quot;Accept&quot;, you consent to our use of cookies.{' '}
                    <Link href="/privacy" className="text-brand-green-500 hover:underline">
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  onClick={handleDecline}
                  className="text-foreground-muted"
                >
                  Decline
                </Button>
                <Button onClick={handleAccept}>
                  Accept Cookies
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Check if user has given cookie consent
 * Use this before initializing tracking scripts
 */
export function hasCookieConsent(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(CONSENT_KEY) === 'accepted';
}
