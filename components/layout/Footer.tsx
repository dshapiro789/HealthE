/**
 * Footer Component
 * ================
 * Site footer with navigation, social links, and legal information
 * 
 * DEVELOPER NOTES:
 * - Update social links in the socialLinks array
 * - Legal links point to /privacy, /terms, /affiliate-disclosure
 * - Newsletter form can be connected to email service
 */

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

/**
 * FOOTER NAVIGATION
 * Modify these arrays to update footer links
 */
const footerLinks = {
  products: [
    { label: 'All Products', href: '/products' },
    { label: 'Supplements', href: '/products/category/supplements' },
    { label: 'Peptides', href: '/products/category/peptides' },
    { label: 'Wellness Tech', href: '/products/category/wellness-tech' },
    { label: 'Fitness', href: '/products/category/fitness' },
    { label: 'Nutrition', href: '/products/category/nutrition' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Affiliate Program', href: '/affiliate-disclosure' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
  ],
};

/**
 * SOCIAL MEDIA LINKS
 * Update URLs when social accounts are created
 */
const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'YouTube', href: 'https://youtube.com', icon: Youtube },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup
    // Connect to email service (Mailchimp, ConvertKit, etc.)
    console.log('Newsletter signup submitted');
  };

  return (
    <footer className="bg-background-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.png"
                  alt="Health-E"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-heading text-2xl font-bold">Health-E</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted destination for premium health and wellness products. 
              We curate the best products from leading brands to help you achieve 
              your wellness goals.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-heading font-semibold mb-3">Stay Updated</h4>
              <p className="text-sm text-gray-400 mb-4">
                Get wellness tips and exclusive deals delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  required
                />
                <Button type="submit" className="shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green-500 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Contact */}
            <div className="mt-6">
              <h4 className="font-heading font-semibold mb-3">Contact</h4>
              <a
                href="mailto:hello@healthe.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                hello@healthe.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Health-E Digital Wellness Solutions. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 text-center md:text-right max-w-md">
              Health-E is an affiliate marketplace. We may earn commissions from 
              purchases made through links on this site at no extra cost to you.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
