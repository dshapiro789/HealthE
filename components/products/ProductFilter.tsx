/**
 * ProductFilter Component
 * =======================
 * Sidebar filters for product listing pages
 * 
 * DEVELOPER NOTES:
 * - Filters update URL params for shareable filtered views
 * - Tracks filter usage via trackFilterUsage
 */

'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { X, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getCategoriesWithCounts, getAllBrands, getPriceRange } from '@/lib/data/products';
import { trackFilterUsage } from '@/lib/utils/tracking';
import { cn } from '@/lib/utils';

interface ProductFilterProps {
  /** Currently selected category (from route) */
  selectedCategory?: string;
  /** Callback when mobile filter sheet should close */
  onClose?: () => void;
  /** Whether this is displayed in mobile sheet */
  isMobile?: boolean;
}

export function ProductFilter({ selectedCategory, onClose, isMobile }: ProductFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const categories = getCategoriesWithCounts();
  const brands = getAllBrands();
  const priceRange = getPriceRange();
  
  // Get current filter values from URL
  const currentCategories = searchParams.get('categories')?.split(',').filter(Boolean) || [];
  const currentBrands = searchParams.get('brands')?.split(',').filter(Boolean) || [];
  const currentMinPrice = searchParams.get('minPrice');
  const currentMaxPrice = searchParams.get('maxPrice');

  // Update URL with new filter values
  const updateFilters = (key: string, value: string | string[] | null) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (value === null || (Array.isArray(value) && value.length === 0)) {
      params.delete(key);
    } else if (Array.isArray(value)) {
      params.set(key, value.join(','));
    } else {
      params.set(key, value);
    }
    
    // Reset to page 1 when filters change
    params.delete('page');
    
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Toggle a value in an array filter
  const toggleArrayFilter = (key: string, value: string, currentValues: string[]) => {
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    
    updateFilters(key, newValues);
    
    // Track filter usage
    trackFilterUsage(key, value);
  };

  // Clear all filters
  const clearAllFilters = () => {
    router.push(selectedCategory ? `/products/category/${selectedCategory}` : '/products');
  };

  // Check if any filters are active
  const hasActiveFilters = currentCategories.length > 0 || 
    currentBrands.length > 0 || 
    currentMinPrice || 
    currentMaxPrice;

  return (
    <div className={cn(
      'space-y-6',
      isMobile && 'pb-20'
    )}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-brand-green-500" />
          <h2 className="font-heading font-semibold text-lg">Filters</h2>
        </div>
        {isMobile && onClose && (
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        )}
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          variant="outline"
          size="sm"
          onClick={clearAllFilters}
          className="w-full"
        >
          Clear All Filters
        </Button>
      )}

      {/* Categories */}
      {!selectedCategory && (
        <div>
          <h3 className="font-medium text-foreground mb-3">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label
                key={category.id}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={currentCategories.includes(category.slug)}
                  onChange={() => toggleArrayFilter('categories', category.slug, currentCategories)}
                  className="w-4 h-4 rounded border-border text-brand-green-500 focus:ring-brand-green-500"
                />
                <span className="text-sm text-foreground-muted group-hover:text-foreground transition-colors flex-1 capitalize">
                  {category.name}
                </span>
                <Badge variant="secondary" className="text-xs">
                  {category.productCount}
                </Badge>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Brands */}
      <div>
        <h3 className="font-medium text-foreground mb-3">Brands</h3>
        <div className="space-y-2 max-h-60 overflow-y-auto scrollbar-custom">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={currentBrands.includes(brand)}
                onChange={() => toggleArrayFilter('brands', brand, currentBrands)}
                className="w-4 h-4 rounded border-border text-brand-green-500 focus:ring-brand-green-500"
              />
              <span className="text-sm text-foreground-muted group-hover:text-foreground transition-colors">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-medium text-foreground mb-3">Price Range</h3>
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <label className="text-xs text-foreground-muted mb-1 block">Min</label>
            <input
              type="number"
              placeholder={`$${priceRange.min}`}
              value={currentMinPrice || ''}
              onChange={(e) => updateFilters('minPrice', e.target.value || null)}
              className="w-full px-3 py-2 text-sm border border-border rounded-lg focus:border-brand-green-500 focus:outline-none"
            />
          </div>
          <span className="text-foreground-muted mt-5">–</span>
          <div className="flex-1">
            <label className="text-xs text-foreground-muted mb-1 block">Max</label>
            <input
              type="number"
              placeholder={`$${priceRange.max}`}
              value={currentMaxPrice || ''}
              onChange={(e) => updateFilters('maxPrice', e.target.value || null)}
              className="w-full px-3 py-2 text-sm border border-border rounded-lg focus:border-brand-green-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div>
          <h3 className="font-medium text-foreground mb-3">Active Filters</h3>
          <div className="flex flex-wrap gap-2">
            {currentCategories.map((cat) => (
              <Badge
                key={cat}
                variant="default"
                className="cursor-pointer hover:bg-brand-green-100"
                onClick={() => toggleArrayFilter('categories', cat, currentCategories)}
              >
                {cat.replace('-', ' ')}
                <X className="w-3 h-3 ml-1" />
              </Badge>
            ))}
            {currentBrands.map((brand) => (
              <Badge
                key={brand}
                variant="default"
                className="cursor-pointer hover:bg-brand-green-100"
                onClick={() => toggleArrayFilter('brands', brand, currentBrands)}
              >
                {brand}
                <X className="w-3 h-3 ml-1" />
              </Badge>
            ))}
            {(currentMinPrice || currentMaxPrice) && (
              <Badge
                variant="default"
                className="cursor-pointer hover:bg-brand-green-100"
                onClick={() => {
                  updateFilters('minPrice', null);
                  updateFilters('maxPrice', null);
                }}
              >
                ${currentMinPrice || '0'} - ${currentMaxPrice || '∞'}
                <X className="w-3 h-3 ml-1" />
              </Badge>
            )}
          </div>
        </div>
      )}

      {/* Mobile Apply Button */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-border">
          <Button onClick={onClose} className="w-full">
            Show Results
          </Button>
        </div>
      )}
    </div>
  );
}
