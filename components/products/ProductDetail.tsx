/**
 * ProductDetail Component
 * =======================
 * Full product detail display for product pages
 * 
 * DEVELOPER NOTES:
 * - Tracks product views via trackProductView
 * - Tracks affiliate clicks via trackAffiliateClick
 * - Includes affiliate disclosure as required by FTC
 * - Uses buildAffiliateUrl for proper tracking
 */

'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  ChevronRight,
  Shield,
  Truck,
  CheckCircle,
  Share2,
  Info
} from 'lucide-react';
import { Product } from '@/lib/types/product';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { buildAffiliateUrl, formatPrice, getAffiliateDisclosure } from '@/lib/utils/affiliate-links';
import { trackProductView, trackAffiliateClick } from '@/lib/utils/tracking';
import { cn } from '@/lib/utils';

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'ingredients' | 'usage'>('overview');
  const affiliateUrl = buildAffiliateUrl(product);

  // Track product view on mount
  useEffect(() => {
    trackProductView(product);
  }, [product]);

  // Handle affiliate link click
  const handleAffiliateClick = () => {
    trackAffiliateClick(product, affiliateUrl);
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'usage', label: 'How to Use' },
  ] as const;

  return (
    <div className="min-h-screen bg-background">


      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/products">
            <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-brand-green-500 group">
              <ChevronRight className="w-5 h-5 mr-1 rotate-180 transition-transform group-hover:-translate-x-1" />
              Back to Products
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-background-secondary to-white shadow-lg">
              <Image
                src={product.images.primary}
                alt={product.images.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />

              {/* Badges */}
              <div className="absolute top-6 left-6 flex flex-col items-start gap-2">
                {product.metadata.isNew && (
                  <Badge variant="new" className="text-sm px-4 py-1.5">New</Badge>
                )}
                {product.metadata.featured && (
                  <Badge variant="brand" className="text-sm px-4 py-1.5">Featured</Badge>
                )}
              </div>
            </div>

            {/* Gallery thumbnails would go here */}
            {product.images.gallery && product.images.gallery.length > 0 && (
              <div className="flex gap-3 mt-4">
                {/* Gallery implementation */}
              </div>
            )}
          </motion.div>

          {/* Details Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            {/* Brand */}
            <Link
              href={`/products?brand=${encodeURIComponent(product.brand.name)}`}
              className="text-sm font-semibold text-brand-green-500 uppercase tracking-wider hover:text-brand-green-600 transition-colors"
            >
              {product.brand.name}
            </Link>

            {/* Title */}
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mt-2">
              {product.name}
            </h1>

            {/* Short Description */}
            <p className="text-foreground-muted mt-4 text-lg">
              {product.description.short}
            </p>

            {/* Price */}
            <div className="mt-6">
              <p className="text-3xl font-bold text-foreground">
                {formatPrice(product.price)}
              </p>
              <p className="text-sm text-foreground-muted mt-1">
                Available at {product.affiliateLink.partner}
              </p>
            </div>

            {/* Benefits */}
            {product.benefits && product.benefits.length > 0 && (
              <div className="mt-6">
                <h3 className="font-heading font-semibold text-foreground mb-3">Key Benefits</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green-500 shrink-0 mt-0.5" />
                      <span className="text-foreground-muted">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA Section */}
            <div className="mt-8 space-y-4">
              {/* Primary CTA - Affiliate Link */}
              <a
                href={affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={handleAffiliateClick}
                className="block"
              >
                <Button size="xl" className="w-full text-lg">
                  Buy on {product.affiliateLink.partner}
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </a>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-foreground-muted">
                  <Shield className="w-4 h-4 text-brand-green-500" />
                  <span>Verified Partner</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground-muted">
                  <Truck className="w-4 h-4 text-brand-green-500" />
                  <span>Fast Shipping</span>
                </div>
              </div>

              {/* Affiliate Disclosure */}
              <div className="flex items-start gap-2 p-4 bg-background-secondary rounded-xl">
                <Info className="w-4 h-4 text-foreground-muted shrink-0 mt-0.5" />
                <p className="text-xs text-foreground-muted">
                  {getAffiliateDisclosure(product.affiliateLink.partner)}
                </p>
              </div>
            </div>

            {/* Share Button */}
            <button className="flex items-center gap-2 text-sm text-foreground-muted hover:text-brand-green-500 transition-colors mt-6">
              <Share2 className="w-4 h-4" />
              Share this product
            </button>
          </motion.div>
        </div>

        {/* Tabbed Content Section */}
        <div className="mt-16">
          {/* Tab Navigation */}
          <div className="flex gap-1 p-1 bg-background-secondary rounded-xl w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'px-6 py-2.5 rounded-lg text-sm font-medium transition-all',
                  activeTab === tab.id
                    ? 'bg-white text-foreground shadow-sm'
                    : 'text-foreground-muted hover:text-foreground'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="prose prose-lg max-w-none"
              >
                <p className="text-foreground-muted leading-relaxed">
                  {product.description.full}
                </p>
              </motion.div>
            )}

            {activeTab === 'ingredients' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {product.ingredients && product.ingredients.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {product.ingredients.map((ingredient, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-white rounded-lg border border-border/50"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-green-500 to-brand-blue-500" />
                        <span className="text-sm text-foreground">{ingredient}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-foreground-muted">
                    Ingredient information is available on the product page.
                    Click the button above to view full details.
                  </p>
                )}
              </motion.div>
            )}

            {activeTab === 'usage' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {product.usage ? (
                  <div className="bg-white p-6 rounded-xl border border-border/50">
                    <h4 className="font-heading font-semibold text-foreground mb-3">
                      Recommended Usage
                    </h4>
                    <p className="text-foreground-muted">{product.usage}</p>
                  </div>
                ) : (
                  <p className="text-foreground-muted">
                    Usage instructions are available on the product page.
                    Click the button above to view full details.
                  </p>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
