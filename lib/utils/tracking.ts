/**
 * HEALTH-E MARKETPLACE - ANALYTICS TRACKING
 * ==========================================
 * 
 * This module handles all analytics tracking for the marketplace.
 * Currently supports Google Analytics 4 (GA4).
 * 
 * DEVELOPER NOTES:
 * ================
 * 
 * SETUP:
 * 1. Add your GA4 Measurement ID to .env.local as NEXT_PUBLIC_GA_ID
 * 2. The tracking script is loaded in app/layout.tsx
 * 
 * KEY EVENTS TO TRACK:
 * - page_view (automatic with GA4)
 * - view_item (product detail view)
 * - click (affiliate link clicks - CRITICAL for attribution)
 * - search (search queries)
 * - newsletter_signup
 * 
 * TESTING:
 * - Use GA4 DebugView to verify events are firing
 * - Check Real-time reports during development
 * 
 * EXTENDING:
 * To add new tracking events:
 * 1. Create a new tracking function below
 * 2. Add TypeScript interface in lib/types/product.ts
 * 3. Call the function from appropriate component
 */

import { Product, ProductViewEvent, AffiliateClickEvent } from '@/lib/types/product';

/**
 * Declare gtag on window for TypeScript
 */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Check if analytics is available
 * Returns false during SSR or if gtag not loaded
 */
function isAnalyticsAvailable(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

/**
 * Track a custom event
 * Base function used by all specific tracking functions
 * 
 * @param eventName - The GA4 event name
 * @param eventParams - Event parameters object
 */
export function trackEvent(eventName: string, eventParams: Record<string, unknown> = {}): void {
  if (!isAnalyticsAvailable()) {
    // Log for development debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics]', eventName, eventParams);
    }
    return;
  }
  
  window.gtag?.('event', eventName, eventParams);
}

/**
 * PRODUCT VIEW TRACKING
 * =====================
 * Track when a user views a product detail page
 * This is the GA4 'view_item' event
 * 
 * @param product - The product being viewed
 */
export function trackProductView(product: Product): void {
  const eventData: ProductViewEvent = {
    productId: product.id,
    productName: product.name,
    category: product.category,
    brand: product.brand.name,
    price: product.price.amount,
  };
  
  trackEvent('view_item', {
    currency: 'USD',
    value: product.price.amount || 0,
    items: [{
      item_id: eventData.productId,
      item_name: eventData.productName,
      item_category: eventData.category,
      item_brand: eventData.brand,
      price: eventData.price,
    }],
  });
}

/**
 * AFFILIATE CLICK TRACKING
 * ========================
 * CRITICAL: This tracks clicks on affiliate links
 * Essential for measuring conversion funnel performance
 * 
 * @param product - The product whose affiliate link was clicked
 * @param destinationUrl - The final URL the user is being sent to
 */
export function trackAffiliateClick(product: Product, destinationUrl: string): void {
  const eventData: AffiliateClickEvent = {
    productId: product.id,
    productName: product.name,
    partner: product.affiliateLink.partner,
    destinationUrl,
    price: product.price.amount,
  };
  
  // Track as a 'click' event with affiliate category
  trackEvent('click', {
    event_category: 'affiliate',
    event_label: eventData.partner,
    product_id: eventData.productId,
    product_name: eventData.productName,
    destination_url: eventData.destinationUrl,
    value: eventData.price || 0,
  });
  
  // Also push to dataLayer for GTM if needed
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'affiliate_click',
      ...eventData,
    });
  }
}

/**
 * SEARCH TRACKING
 * ===============
 * Track search queries and result counts
 * Useful for understanding what users are looking for
 * 
 * @param searchTerm - The search query
 * @param resultCount - Number of results returned
 */
export function trackSearch(searchTerm: string, resultCount: number): void {
  trackEvent('search', {
    search_term: searchTerm,
    result_count: resultCount,
  });
}

/**
 * CATEGORY VIEW TRACKING
 * ======================
 * Track when a user views a category page
 * 
 * @param categoryName - The category name
 * @param productCount - Number of products in category
 */
export function trackCategoryView(categoryName: string, productCount: number): void {
  trackEvent('view_category', {
    category_name: categoryName,
    product_count: productCount,
  });
}

/**
 * NEWSLETTER SIGNUP TRACKING
 * ==========================
 * Track newsletter subscription events
 * 
 * @param source - Where the signup occurred (e.g., 'homepage', 'footer')
 */
export function trackNewsletterSignup(source: string): void {
  trackEvent('newsletter_signup', {
    source,
  });
}

/**
 * FILTER USAGE TRACKING
 * =====================
 * Track when users apply filters
 * Helps understand how users browse products
 * 
 * @param filterType - Type of filter (e.g., 'category', 'price', 'brand')
 * @param filterValue - The value selected
 */
export function trackFilterUsage(filterType: string, filterValue: string): void {
  trackEvent('filter_applied', {
    filter_type: filterType,
    filter_value: filterValue,
  });
}

/**
 * PRODUCT IMPRESSION TRACKING
 * ===========================
 * Track when products are displayed in a list
 * Useful for understanding product visibility
 * 
 * @param products - Array of products displayed
 * @param listName - Name of the list (e.g., 'featured', 'search_results', 'category')
 */
export function trackProductImpressions(products: Product[], listName: string): void {
  const items = products.map((product, index) => ({
    item_id: product.id,
    item_name: product.name,
    item_category: product.category,
    item_brand: product.brand.name,
    price: product.price.amount || 0,
    index,
  }));
  
  trackEvent('view_item_list', {
    item_list_name: listName,
    items,
  });
}

/**
 * OUTBOUND LINK TRACKING
 * ======================
 * Generic outbound link tracking for non-affiliate external links
 * 
 * @param url - The external URL clicked
 * @param linkText - The text of the link (for identification)
 */
export function trackOutboundLink(url: string, linkText: string): void {
  trackEvent('click', {
    event_category: 'outbound',
    event_label: linkText,
    destination_url: url,
  });
}

/**
 * PAGE SCROLL DEPTH TRACKING
 * ==========================
 * Track how far users scroll on important pages
 * Call this at scroll milestones (25%, 50%, 75%, 100%)
 * 
 * @param pagePath - The page path
 * @param percentage - Scroll depth percentage
 */
export function trackScrollDepth(pagePath: string, percentage: number): void {
  trackEvent('scroll', {
    page_path: pagePath,
    scroll_depth: percentage,
  });
}

/**
 * ERROR TRACKING
 * ==============
 * Track JavaScript errors for debugging
 * 
 * @param errorMessage - Error message
 * @param errorSource - Where the error occurred
 */
export function trackError(errorMessage: string, errorSource: string): void {
  trackEvent('exception', {
    description: errorMessage,
    source: errorSource,
    fatal: false,
  });
}
