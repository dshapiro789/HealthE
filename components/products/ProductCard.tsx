/**
 * ProductCard Component
 * =====================
 * Display card for products in grids and carousels
 * 
 * DEVELOPER NOTES:
 * - Tracks affiliate clicks via trackAffiliateClick
 * - Uses buildAffiliateUrl for proper tracking parameters
 * - Shows "New" badge when product.metadata.isNew is true
 * - Images use Next.js Image for optimization
 */

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Product } from '@/lib/types/product';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils/affiliate-links';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  /** Index for staggered animations */
  index?: number;
  /** Display variant */
  variant?: 'default' | 'featured' | 'compact';
}

export function ProductCard({ product, index = 0, variant = 'default' }: ProductCardProps) {
  const isFeatured = variant === 'featured';
  const isCompact = variant === 'compact';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        'group relative bg-white rounded-2xl overflow-hidden transition-all duration-300',
        'shadow-card hover:shadow-card-hover',
        isFeatured && 'md:flex md:flex-row',
        !isCompact && 'hover:-translate-y-1'
      )}
    >
      {/* Image Container */}
      <Link
        href={`/products/${product.slug}`}
        className={cn(
          'block relative overflow-hidden bg-gradient-to-br from-background-secondary to-white',
          isFeatured ? 'md:w-2/5' : 'w-full',
          isCompact ? 'aspect-[4/3]' : 'aspect-square',
          'min-h-[180px]'
        )}
      >
        <Image
          src={product.images.primary}
          alt={product.images.alt}
          fill
          sizes={isFeatured ? '(max-width: 768px) 100vw, 40vw' : '(max-width: 768px) 100vw, 25vw'}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col items-start gap-2">
          {product.metadata.isNew && (
            <Badge variant="new">New</Badge>
          )}
          {product.metadata.featured && !isFeatured && (
            <Badge variant="brand">Featured</Badge>
          )}
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-white text-sm font-medium">View Details</span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className={cn(
        'p-5',
        isFeatured && 'md:flex-1 md:p-6 md:flex md:flex-col md:justify-between'
      )}>
        {/* Brand */}
        <p className="text-xs font-medium text-brand-green-500 uppercase tracking-wider mb-1">
          {product.brand.name}
        </p>

        {/* Title */}
        <Link href={`/products/${product.slug}`}>
          <h3 className={cn(
            'font-heading font-semibold text-foreground line-clamp-2 hover:text-brand-green-600 transition-colors',
            isFeatured ? 'text-xl md:text-2xl' : 'text-base'
          )}>
            {product.name}
          </h3>
        </Link>

        {/* Description - Featured only */}
        {isFeatured && (
          <p className="mt-2 text-sm text-foreground-muted line-clamp-2">
            {product.description.short}
          </p>
        )}

        {/* Category Tags - Non-compact */}
        {!isCompact && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            <Badge variant="outline" className="text-xs">
              {product.category.replace('-', ' ')}
            </Badge>
          </div>
        )}

        {/* Price & Actions */}
        <div className={cn(
          'flex items-center justify-between mt-4',
          isFeatured && 'md:mt-auto'
        )}>
          <div>
            <p className="text-lg font-bold text-foreground">
              {formatPrice(product.price)}
            </p>
            {product.affiliateLink.partner && (
              <p className="text-xs text-foreground-muted">
                via {product.affiliateLink.partner}
              </p>
            )}
          </div>

          <Link href={`/products/${product.slug}`}>
            <Button
              size={isFeatured ? 'default' : 'sm'}
              className="group/btn"
            >
              <span className="hidden sm:inline">View</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/**
 * Product Card Skeleton
 * Loading placeholder for product cards
 */
export function ProductCardSkeleton({ variant = 'default' }: { variant?: 'default' | 'featured' | 'compact' }) {
  const isFeatured = variant === 'featured';
  const isCompact = variant === 'compact';

  return (
    <div className={cn(
      'bg-white rounded-2xl overflow-hidden shadow-card',
      isFeatured && 'md:flex md:flex-row'
    )}>
      <div className={cn(
        'skeleton',
        isFeatured ? 'md:w-2/5 aspect-square' : 'w-full',
        isCompact ? 'aspect-[4/3]' : 'aspect-square'
      )} />
      <div className={cn('p-5 space-y-3', isFeatured && 'md:flex-1 md:p-6')}>
        <div className="skeleton h-3 w-16" />
        <div className="skeleton h-5 w-3/4" />
        {isFeatured && <div className="skeleton h-4 w-full" />}
        <div className="flex gap-2">
          <div className="skeleton h-5 w-20 rounded-full" />
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="skeleton h-6 w-20" />
          <div className="skeleton h-9 w-16 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
