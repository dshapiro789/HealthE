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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-3">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/images/logo.png"
                alt="Health-E"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className={cn(
              'font-heading text-xl md:text-2xl font-bold transition-colors',
              isScrolled ? 'text-foreground' : 'text-white'
            )}>
              Health-E
            </span>
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
                    'flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-green-500',
                    pathname === link.href
                      ? 'text-brand-green-500'
                      : isScrolled
                        ? 'text-foreground'
                        : 'text-white'
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
                  'transition-colors',
                  isScrolled ? 'text-foreground' : 'text-white hover:bg-white/10'
                )}
              >
                <Search className="w-5 h-5" />
              </Button>
            </Link>

            {/* CTA Button - Desktop */}
            <Link href="/products" className="hidden md:block">
              <Button>
                Explore Products
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                'lg:hidden transition-colors',
                isScrolled ? 'text-foreground' : 'text-white hover:bg-white/10'
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-border/50"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      className={cn(
                        'block py-2 text-lg font-medium transition-colors',
                        pathname === link.href
                          ? 'text-brand-green-500'
                          : 'text-foreground hover:text-brand-green-500'
                      )}
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
