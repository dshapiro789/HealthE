/**
 * Category Page
 * =============
 * Products filtered by category with category-specific hero
 * 
 * DEVELOPER NOTES:
 * - Dynamic route [category] matches category slug
 * - Pre-filters products to show only matching category
 * - Inherits filter/sort functionality from products page
 */

'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams, notFound } from 'next/navigation';
import { SlidersHorizontal, Grid3X3, LayoutList, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProductGrid, ProductFilter } from '@/components/products';
import { getProductsByCategory, getCategoryBySlug, getCategoriesWithCounts } from '@/lib/data/products';
import { SortOption } from '@/lib/types/product';
import { cn } from '@/lib/utils';

interface CategoryPageProps {
  params: { category: string };
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'newest', label: 'Newest First' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'name-az', label: 'Name: A-Z' },
];

export default function CategoryPage({ params }: CategoryPageProps) {
  const searchParams = useSearchParams();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [isSortOpen, setIsSortOpen] = useState(false);

  const category = getCategoryBySlug(params.category);
  const categoryProducts = getProductsByCategory(params.category);

  // Get current filter values
  const currentBrands = searchParams.get('brands')?.split(',').filter(Boolean) || [];
  const currentMinPrice = searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined;
  const currentMaxPrice = searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined;

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...categoryProducts];

    // Apply brand filter
    if (currentBrands.length > 0) {
      result = result.filter(p => currentBrands.includes(p.brand.name));
    }

    // Apply price filter
    if (currentMinPrice !== undefined) {
      result = result.filter(p => (p.price.amount || 0) >= currentMinPrice);
    }
    if (currentMaxPrice !== undefined) {
      result = result.filter(p => (p.price.amount || Infinity) <= currentMaxPrice);
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.metadata.createdAt).getTime() - new Date(a.metadata.createdAt).getTime();
        case 'price-low':
          return (a.price.amount || 0) - (b.price.amount || 0);
        case 'price-high':
          return (b.price.amount || 0) - (a.price.amount || 0);
        case 'name-az':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return result;
  }, [categoryProducts, currentBrands, currentMinPrice, currentMaxPrice, sortBy]);

  if (!category) {
    notFound();
  }

  const hasActiveFilters = currentBrands.length > 0 || currentMinPrice || currentMaxPrice;

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Category Hero */}
      <div className="bg-gradient-to-br from-brand-green-500 to-brand-blue-500 py-16">
        <div className="container mx-auto px-4">
          <Badge className="bg-white/20 text-white mb-4">Category</Badge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 capitalize">
            {category.name}
          </h1>
          <p className="text-white/80 max-w-2xl text-lg">
            {category.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-28 bg-white rounded-2xl p-6 shadow-card">
              <ProductFilter selectedCategory={params.category} />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  className="lg:hidden"
                  onClick={() => setIsMobileFilterOpen(true)}
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                  {hasActiveFilters && (
                    <Badge variant="brand" className="ml-2">
                      {currentBrands.length + (currentMinPrice || currentMaxPrice ? 1 : 0)}
                    </Badge>
                  )}
                </Button>
                <p className="text-sm text-foreground-muted">
                  <span className="font-medium text-foreground">{filteredProducts.length}</span> products
                </p>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <Button
                  variant="outline"
                  className="min-w-[180px] justify-between"
                  onClick={() => setIsSortOpen(!isSortOpen)}
                >
                  {sortOptions.find(o => o.value === sortBy)?.label}
                  <ChevronDown className={cn(
                    'w-4 h-4 transition-transform',
                    isSortOpen && 'rotate-180'
                  )} />
                </Button>
                
                {isSortOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsSortOpen(false)} />
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-border/50 py-2 z-20">
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          className={cn(
                            'w-full text-left px-4 py-2 text-sm hover:bg-background-secondary transition-colors',
                            sortBy === option.value && 'text-brand-green-500 font-medium'
                          )}
                          onClick={() => {
                            setSortBy(option.value);
                            setIsSortOpen(false);
                          }}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Products Grid */}
            <ProductGrid products={filteredProducts} columns={4} />
          </div>
        </div>
      </div>

      {/* Mobile Filter Sheet */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileFilterOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white overflow-y-auto">
            <div className="p-6">
              <ProductFilter 
                selectedCategory={params.category}
                isMobile 
                onClose={() => setIsMobileFilterOpen(false)} 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
