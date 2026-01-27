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

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green-600 via-brand-green-500 to-brand-blue-500">
          {/* Animated mesh pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          {/* Dot pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-brand-blue-200" />
              <span className="text-sm text-white/90">Curated Wellness Products</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your Journey to
              <span className="block mt-2 bg-gradient-to-r from-white via-brand-blue-200 to-white bg-clip-text text-transparent">
                Optimal Wellness
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
              Discover premium health products handpicked from the most trusted brands. 
              From cutting-edge peptides to essential supplements, we bring you the best 
              in wellness innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="xl" className="bg-white text-brand-green-600 hover:bg-white/90 shadow-lg w-full sm:w-auto">
                  Explore Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button 
                  size="xl" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2 text-white/80">
                <Shield className="w-5 h-5 text-brand-blue-200" />
                <span className="text-sm">Verified Partners</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Zap className="w-5 h-5 text-brand-blue-200" />
                <span className="text-sm">Fast Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Heart className="w-5 h-5 text-brand-blue-200" />
                <span className="text-sm">Expert Curated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
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
                variant={index === 0 ? 'featured' : 'default'}
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
