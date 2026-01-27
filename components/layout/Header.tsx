/**
 * Header Component
 * ================
 * Main site header with navigation, search, and mobile menu
 * 
 * DEVELOPER NOTES:
 * - Navigation links are defined in the navLinks array
 * - Mobile menu uses Framer Motion for animations
 * - Search opens a modal (can be enhanced with actual search)
 */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Menu,
  X,
  ChevronDown,
  Pill,
  Dna,
  Activity,
  Dumbbell,
  Apple,
  Moon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/**
 * NAVIGATION LINKS
 * Add or modify navigation items here
 */
const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  {
    label: 'Categories',
    href: '/products',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Supplements', href: '/products/category/supplements', icon: Pill },
      { label: 'Peptides', href: '/products/category/peptides', icon: Dna },
      { label: 'Wellness Tech', href: '/products/category/wellness-tech', icon: Activity },
      { label: 'Fitness', href: '/products/category/fitness', icon: Dumbbell },
      { label: 'Nutrition', href: '/products/category/nutrition', icon: Apple },
      { label: 'Recovery', href: '/products/category/recovery', icon: Moon },
    ]
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force "scrolled" state on non-home pages to ensure visibility
  const isHome = pathname === '/';
  const showGlassHeader = isScrolled || !isHome;

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out',
        showGlassHeader
          ? 'top-4'
          : 'top-0'
      )}
    >
      <div className={cn(
        "container mx-auto px-4 transition-all duration-500",
        showGlassHeader ? "max-w-6xl" : "max-w-full"
      )}>
        <nav className={cn(
          "flex items-center justify-between transition-all duration-500 rounded-2xl",
          showGlassHeader
            ? "bg-white/80 backdrop-blur-xl shadow-2xl border border-white/40 py-3 px-6"
            : "bg-transparent py-8"
        )}>
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center group shrink-0">
            <div className={cn(
              "relative transition-all duration-500 ease-in-out shrink-0",
              showGlassHeader
                ? "w-[180px] h-[72px]"
                : "w-[280px] h-[112px] md:w-[320px] md:h-[128px]"
            )}>
              <Image
                src="/images/mainLogo.png"
                alt="Health-E - Digital Wellness Solutions"
                fill
                className="object-contain drop-shadow-md"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center gap-1 font-medium transition-colors hover:text-brand-green-500',
                    showGlassHeader ? 'text-base' : 'text-lg',
                    pathname === link.href
                      ? showGlassHeader
                        ? 'text-brand-green-600 font-bold'
                        : 'text-white font-bold underline underline-offset-8 decoration-2 decoration-brand-blue-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                      : showGlassHeader
                        ? 'text-slate-700'
                        : 'text-white/95 hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                  )}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className={cn(
                      'w-4 h-4 transition-transform',
                      activeDropdown === link.label && 'rotate-180'
                    )} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-4"
                      >
                        <div className="bg-white rounded-xl shadow-lg border border-border/50 py-2 min-w-[200px]">
                          {link.dropdownItems?.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-background-secondary hover:text-brand-green-500 transition-colors"
                              >
                                {Icon && <Icon className="w-4 h-4 text-brand-green-500" />}
                                {item.label}
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Search Button */}
            <Link href="/search">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  'transition-colors rounded-full',
                  showGlassHeader
                    ? 'text-slate-700 hover:bg-slate-100'
                    : 'text-white hover:bg-white/20 hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                )}
              >
                <Search className="w-5 h-5" />
              </Button>
            </Link>

            {/* CTA Button - Desktop */}
            <Link href="/products" className="hidden md:block">
              <Button
                variant={showGlassHeader ? "default" : "secondary"}
                className={cn(
                  "font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 border-0",
                  showGlassHeader
                    ? "bg-brand-green-600 hover:bg-brand-green-700" // Normal Green Button
                    : "bg-white text-brand-green-700 hover:bg-white/90" // White Button
                )}
              >
                Explore Products
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                'lg:hidden transition-colors rounded-full',
                showGlassHeader
                  ? 'text-slate-700 hover:bg-slate-100'
                  : 'text-white hover:bg-white/20 hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-4 pb-8 overflow-y-auto lg:hidden"
          >
            <div className="container mx-auto">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <div key={link.label} className="border-b border-border/50 pb-4 last:border-0">
                    <Link
                      href={link.href}
                      className={cn(
                        'block text-2xl font-heading font-bold mb-2 transition-colors',
                        pathname === link.href
                          ? 'text-brand-green-500'
                          : 'text-slate-800 hover:text-brand-green-500'
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.hasDropdown && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        {link.dropdownItems?.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="flex items-center gap-2 py-1.5 text-sm text-foreground-muted hover:text-brand-green-500 transition-colors"
                            >
                              {Icon && <Icon className="w-4 h-4" />}
                              {item.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-border/50">
                  <Link href="/products">
                    <Button className="w-full">
                      Explore Products
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
