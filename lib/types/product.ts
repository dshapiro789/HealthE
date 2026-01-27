/**
 * HEALTH-E MARKETPLACE - TYPE DEFINITIONS
 * ========================================
 * 
 * This file contains all TypeScript interfaces and types used throughout the application.
 * 
 * DEVELOPER NOTES:
 * - Update these interfaces when adding new product fields
 * - Affiliate link types are critical for tracking - do not modify without updating tracking code
 * - All product data should conform to the Product interface
 */

/**
 * PRODUCT TYPES
 * =============
 */

/**
 * Brand information for a product
 */
export interface Brand {
  name: string;
  logo?: string;
  website?: string;
}

/**
 * Product description with short and full versions
 */
export interface ProductDescription {
  short: string;  // Used in product cards (1-2 sentences)
  full: string;   // Used on product detail page
}

/**
 * Pricing information
 * Note: Price may be undefined if product is "check partner site for pricing"
 */
export interface ProductPrice {
  amount?: number;
  currency?: string;
  displayText?: string;  // e.g., "From $49.99" or "Check site for pricing"
}

/**
 * Product images
 */
export interface ProductImages {
  primary: string;       // Main product image URL
  gallery?: string[];    // Additional images for detail page
  alt: string;          // Alt text for accessibility
}

/**
 * AFFILIATE LINK CONFIGURATION
 * ============================
 * CRITICAL: These fields are used for tracking and commission attribution
 * 
 * @param url - The affiliate link URL (may include partner's tracking params)
 * @param partner - Partner/vendor name (e.g., "REGENMD", "Amazon")
 * @param partnerId - Our affiliate ID with this partner
 * @param commission - Commission percentage (for internal reference only)
 */
export interface AffiliateLink {
  url: string;
  partner: string;
  partnerId?: string;
  commission?: number;
}

/**
 * Product metadata for internal tracking
 */
export interface ProductMetadata {
  createdAt: string;    // ISO date string
  updatedAt: string;    // ISO date string
  featured?: boolean;   // Show on homepage featured section
  isNew?: boolean;      // Show "New" badge
  sortOrder?: number;   // Custom sort ordering
}

/**
 * SEO metadata for product pages
 */
export interface ProductSEO {
  title: string;
  description: string;
  keywords: string[];
}

/**
 * Main Product Interface
 * ======================
 * This is the primary data structure for all products in the marketplace.
 * 
 * DEVELOPER NOTES:
 * - id: Unique identifier (use UUID or slug-based)
 * - slug: URL-safe version of product name (used in routes)
 * - category: Primary category (must match Category.slug)
 * - subcategory: Optional subcategory
 * - tags: Used for search and filtering
 */
export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: Brand;
  description: ProductDescription;
  category: string;
  subcategory?: string;
  tags: string[];
  price: ProductPrice;
  images: ProductImages;
  affiliateLink: AffiliateLink;
  ingredients?: string[];
  usage?: string;
  benefits?: string[];
  metadata: ProductMetadata;
  seo: ProductSEO;
}

/**
 * CATEGORY TYPES
 * ==============
 */

/**
 * Product Category
 */
export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image?: string;
  icon?: string;
  productCount: number;
  sortOrder?: number;
}

/**
 * FILTER & SEARCH TYPES
 * =====================
 */

/**
 * Filter options for product listing
 */
export interface FilterOptions {
  categories?: string[];
  brands?: string[];
  priceRange?: {
    min?: number;
    max?: number;
  };
  tags?: string[];
  featured?: boolean;
  isNew?: boolean;
}

/**
 * Sort options for product listing
 */
export type SortOption = 
  | 'newest' 
  | 'oldest' 
  | 'price-low' 
  | 'price-high' 
  | 'name-az' 
  | 'name-za'
  | 'popular';

/**
 * Search parameters
 */
export interface SearchParams {
  query?: string;
  filters?: FilterOptions;
  sort?: SortOption;
  page?: number;
  limit?: number;
}

/**
 * AFFILIATE TRACKING TYPES
 * ========================
 * Used for UTM parameter generation and analytics
 */

/**
 * UTM Parameters for affiliate link tracking
 * DEVELOPER NOTE: These are appended to all outbound affiliate links
 */
export interface UTMParams {
  source: string;      // 'healthe'
  medium: string;      // 'affiliate'
  campaign?: string;   // Product category or special campaign
  content?: string;    // Product ID or variant
  term?: string;       // Search term (if from search)
}

/**
 * Affiliate partner configuration
 * DEVELOPER NOTE: Add new partners here when onboarding
 */
export interface AffiliatePartner {
  id: string;
  name: string;
  baseUrl: string;
  affiliateId: string;
  trackingParam: string;  // e.g., 'ref', 'aff_id', 'partner'
  cookieDuration?: number; // Days
  commissionRate?: number; // Percentage
  active: boolean;
}

/**
 * ANALYTICS TYPES
 * ===============
 */

/**
 * Product view event data
 */
export interface ProductViewEvent {
  productId: string;
  productName: string;
  category: string;
  brand: string;
  price?: number;
}

/**
 * Affiliate click event data
 */
export interface AffiliateClickEvent {
  productId: string;
  productName: string;
  partner: string;
  destinationUrl: string;
  price?: number;
}

/**
 * NEWSLETTER TYPES
 * ================
 */

export interface NewsletterSubscription {
  email: string;
  source?: string;
  subscribedAt: string;
}

/**
 * CONTACT FORM TYPES
 * ==================
 */

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

/**
 * API RESPONSE TYPES
 * ==================
 */

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiError {
  message: string;
  code?: string;
  status: number;
}
