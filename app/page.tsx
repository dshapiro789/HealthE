/**
 * Homepage
 * ========
 * Main landing page with hero, featured products, categories, and newsletter
 * 
 * DEVELOPER NOTES:
 * - Featured products are determined by metadata.featured flag
 * - Categories are dynamically loaded with product counts
 * - Hero gradient uses brand colors from the logo
 */

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronDown,
  Sparkles,
  Shield,
  Zap,
  Heart,
  Pill,
  Dna,
  Activity,
  Dumbbell,
  Apple,
  Moon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/products';
import { NewsletterSignup } from '@/components/common';
import { getFeaturedProducts, getNewProducts, getCategoriesWithCounts } from '@/lib/data/products';

// Category icons mapping
const categoryIcons: Record<string, React.ElementType> = {
  supplements: Pill,
  peptides: Dna,
  'wellness-tech': Activity,
  fitness: Dumbbell,
  nutrition: Apple,
  recovery: Moon,
};

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();
  const categories = getCategoriesWithCounts();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        {/* Deep Aurora Background */}
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-green-900/40 via-slate-900 to-slate-900 z-0" />

          {/* Animated Blobs */}
          <div className="absolute top-0 -left-4 w-96 h-96 bg-brand-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-0 -right-4 w-96 h-96 bg-brand-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-32 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* Grid Energy Beams */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Horizontal Beams */}
            <motion.div
              initial={{ left: '-10%' }}
              animate={{ left: '110%' }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 0 }}
              className="absolute top-[20%] h-[1px] w-[200px] bg-gradient-to-r from-transparent via-brand-green-500/50 to-transparent blur-[1px]"
            />
            <motion.div
              initial={{ left: '-10%' }}
              animate={{ left: '110%' }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 4 }}
              className="absolute top-[60%] h-[1px] w-[200px] bg-gradient-to-r from-transparent via-brand-blue-500/50 to-transparent blur-[1px]"
            />
            <motion.div
              initial={{ left: '-10%' }}
              animate={{ left: '110%' }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 2 }}
              className="absolute top-[80%] h-[1px] w-[300px] bg-gradient-to-r from-transparent via-brand-green-400/30 to-transparent blur-[1px]"
            />

            {/* Vertical Beams */}
            <motion.div
              initial={{ top: '-10%' }}
              animate={{ top: '110%' }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }}
              className="absolute left-[30%] w-[1px] h-[200px] bg-gradient-to-b from-transparent via-brand-blue-400/30 to-transparent blur-[1px]"
            />
            <motion.div
              initial={{ top: '-10%' }}
              animate={{ top: '110%' }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 3 }}
              className="absolute right-[20%] w-[1px] h-[200px] bg-gradient-to-b from-transparent via-brand-green-500/30 to-transparent blur-[1px]"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur-xl border border-brand-green-500/30 rounded-full px-6 py-2 mb-10 shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-shadow duration-300"
            >
              <span className="text-sm font-medium text-brand-green-100/90 tracking-wider uppercase">The Future of Personal Wellness</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Wellness,
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-green-300 via-white to-brand-blue-300 bg-[length:200%_auto] drop-shadow-[0_0_30px_rgba(74,222,128,0.3)]"
              >
                Elevated.
              </motion.span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Experience a curated collection of premium health products.
              Bio-optimized for your journey to peak performance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/products">
                <Button size="xl" className="h-14 px-8 text-lg bg-brand-green-500 hover:bg-brand-green-400 text-white border-0 shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:scale-105 transition-all duration-300 rounded-full font-bold">
                  Start Your Journey
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="xl"
                  variant="outline"
                  className="h-14 px-8 text-lg border-white/20 text-white hover:bg-white/10 hover:border-white/40 rounded-full font-medium backdrop-blur-sm"
                >
                  Our Philosophy
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating 3D Elements (Decorative) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Left Floating Card */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-12 md:left-10 w-64 h-64 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl opacity-30 transform -rotate-12 hidden lg:block"
          />
          {/* Right Floating Card */}
          <motion.div
            animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 -right-12 md:right-10 w-72 h-72 bg-gradient-to-bl from-brand-blue-500/10 to-transparent backdrop-blur-sm border border-white/10 rounded-full opacity-30 hidden lg:block"
          />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-white/30 text-sm font-medium tracking-widest uppercase animate-pulse">
            <span>Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <Badge variant="brand" className="mb-4">Featured</Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Top Picks for You
              </h2>
              <p className="text-foreground-muted mt-2 max-w-lg">
                Our most popular products, handpicked by wellness experts.
              </p>
            </div>
            <Link href="/products" className="shrink-0">
              <Button variant="outline">
                View All Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.slice(0, 6).map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                variant="default"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="brand" className="mb-4">Categories</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Shop by Category
            </h2>
            <p className="text-foreground-muted mt-2 max-w-lg mx-auto">
              Find exactly what you need in our organized wellness categories.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => {
              const Icon = categoryIcons[category.slug] || Pill;
              return (
                <Link
                  key={category.id}
                  href={`/products/category/${category.slug}`}
                  className="group relative bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-brand-green-100 to-brand-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-brand-green-500" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-foreground-muted">
                    {category.productCount} products
                  </p>

                  {/* Hover gradient border effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-brand-green-500/20 transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      {newProducts.length > 0 && (
        <section className="py-20 lg:py-28 bg-background-secondary">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div>
                <Badge variant="new" className="mb-4">Just Added</Badge>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  New Arrivals
                </h2>
                <p className="text-foreground-muted mt-2 max-w-lg">
                  The latest additions to our wellness collection.
                </p>
              </div>
              <Link href="/products?sort=newest" className="shrink-0">
                <Button variant="outline">
                  See All New
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {newProducts.slice(0, 4).map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trust Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Health-E?
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              We&apos;re committed to bringing you the highest quality wellness products
              from brands you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Verified Partners',
                description: 'Every product comes from vetted, trusted brands with proven track records in wellness.',
              },
              {
                icon: Sparkles,
                title: 'Expert Curation',
                description: 'Our team of wellness experts carefully selects each product for quality and effectiveness.',
              },
              {
                icon: Heart,
                title: 'Your Wellness First',
                description: 'We prioritize your health journey with transparent information and honest recommendations.',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brand-green-500 to-brand-blue-500 flex items-center justify-center shadow-brand">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-foreground-muted">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-green-500 to-brand-blue-500 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <NewsletterSignup
                source="homepage"
                title="Join Our Wellness Community"
                description="Get exclusive deals, health tips, and early access to new products delivered straight to your inbox."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
