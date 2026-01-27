/**
 * ProductGrid Component
 * =====================
 * Responsive grid layout for displaying multiple products
 */

'use client';

import React from 'react';
import { Product } from '@/lib/types/product';
import { ProductCard, ProductCardSkeleton } from './ProductCard';
import { cn } from '@/lib/utils';

interface ProductGridProps {
  products: Product[];
  /** Number of columns on desktop */
  columns?: 2 | 3 | 4;
  /** Show loading skeletons */
  isLoading?: boolean;
  /** Number of skeleton items to show when loading */
  skeletonCount?: number;
  /** Card variant */
  variant?: 'default' | 'compact';
  /** Additional class names */
  className?: string;
}

export function ProductGrid({ 
  products, 
  columns = 4,
  isLoading = false,
  skeletonCount = 8,
  variant = 'default',
  className 
}: ProductGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  if (isLoading) {
    return (
      <div className={cn(
        'grid grid-cols-1 gap-6',
        gridCols[columns],
        className
      )}>
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <ProductCardSkeleton key={i} variant={variant} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-background-secondary flex items-center justify-center">
            <svg
              className="w-10 h-10 text-foreground-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
            No products found
          </h3>
          <p className="text-foreground-muted">
            Try adjusting your filters or search terms to find what you&apos;re looking for.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      'grid grid-cols-1 gap-6',
      gridCols[columns],
      className
    )}>
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          index={index}
          variant={variant}
        />
      ))}
    </div>
  );
}
