/**
 * 404 Not Found Page
 * ==================
 * Custom 404 error page
 */

import React from 'react';
import Link from 'next/link';
import { Home, Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Large 404 */}
        <div className="mb-8">
          <span className="font-heading text-9xl font-bold bg-gradient-to-r from-brand-green-500 to-brand-blue-500 bg-clip-text text-transparent">
            404
          </span>
        </div>

        <h1 className="font-heading text-3xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-foreground-muted mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </Link>
          <Link href="/products">
            <Button size="lg" variant="outline">
              <Search className="w-4 h-4 mr-2" />
              Browse Products
            </Button>
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="mt-16 flex items-center justify-center gap-4 text-sm text-foreground-muted">
          <Link href="/about" className="hover:text-brand-green-500 transition-colors">
            About Us
          </Link>
          <span>•</span>
          <Link href="/contact" className="hover:text-brand-green-500 transition-colors">
            Contact
          </Link>
          <span>•</span>
          <Link href="/search" className="hover:text-brand-green-500 transition-colors">
            Search
          </Link>
        </div>
      </div>
    </div>
  );
}
