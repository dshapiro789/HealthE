/**
 * Search Results Page
 * ===================
 * Display search results with query from URL params
 * 
 * DEVELOPER NOTES:
 * - Search query comes from ?q= parameter
 * - Tracks search via trackSearch
 * - Shows suggestions on empty results
 */

'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ProductGrid } from '@/components/products';
import { searchProducts, getCategoriesWithCounts } from '@/lib/data/products';
import { trackSearch } from '@/lib/utils/tracking';
import Link from 'next/link';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get('q') || '';
  const [searchInput, setSearchInput] = useState(initialQuery);
  
  const results = useMemo(() => {
    if (!initialQuery.trim()) return [];
    return searchProducts(initialQuery);
  }, [initialQuery]);

  const categories = getCategoriesWithCounts();

  // Track search when results load
  useEffect(() => {
    if (initialQuery.trim()) {
      trackSearch(initialQuery, results.length);
    }
  }, [initialQuery, results.length]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  const clearSearch = () => {
    setSearchInput('');
    router.push('/search');
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Search Header */}
      <div className="bg-gradient-to-br from-brand-green-500 to-brand-blue-500 py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Search Products
          </h1>
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted" />
              <Input
                type="text"
                placeholder="Search for supplements, peptides, wellness tech..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="pl-12 pr-24 h-14 text-lg bg-white border-0 shadow-lg"
              />
              {searchInput && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-20 top-1/2 -translate-y-1/2 text-foreground-muted hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
              <Button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                Search
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {initialQuery ? (
          <>
            {/* Results Header */}
            <div className="mb-8">
              <p className="text-lg">
                {results.length > 0 ? (
                  <>
                    Found <span className="font-semibold text-brand-green-500">{results.length}</span> results for{' '}
                    <span className="font-semibold">&quot;{initialQuery}&quot;</span>
                  </>
                ) : (
                  <>
                    No results found for <span className="font-semibold">&quot;{initialQuery}&quot;</span>
                  </>
                )}
              </p>
            </div>

            {results.length > 0 ? (
              <ProductGrid products={results} columns={4} />
            ) : (
              /* No Results State */
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-background-secondary flex items-center justify-center">
                    <Search className="w-10 h-10 text-foreground-muted" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    No products found
                  </h2>
                  <p className="text-foreground-muted mb-8">
                    Try adjusting your search terms or browse our categories below.
                  </p>
                  
                  {/* Category Suggestions */}
                  <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((cat) => (
                      <Link key={cat.id} href={`/products/category/${cat.slug}`}>
                        <Badge variant="secondary" className="cursor-pointer hover:bg-brand-green-100 hover:text-brand-green-600 transition-colors">
                          {cat.name}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16">
            <div className="max-w-lg mx-auto">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-green-100 to-brand-blue-100 flex items-center justify-center">
                <Search className="w-10 h-10 text-brand-green-500" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                What are you looking for?
              </h2>
              <p className="text-foreground-muted mb-8">
                Enter a search term above or browse by category below.
              </p>
              
              {/* Category Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((cat) => (
                  <Link 
                    key={cat.id} 
                    href={`/products/category/${cat.slug}`}
                    className="p-6 bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
                  >
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-foreground-muted">
                      {cat.productCount} products
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
