/**
 * HEALTH-E MARKETPLACE - AFFILIATE LINK UTILITIES
 * ================================================
 * 
 * This module handles all affiliate link generation, tracking, and management.
 * 
 * DEVELOPER NOTES:
 * ================
 * 
 * ADDING A NEW AFFILIATE PARTNER:
 * 1. Add partner config to AFFILIATE_PARTNERS object below
 * 2. Specify their tracking parameter name (e.g., 'ref', 'aff_id', 'partner')
 * 3. Add your affiliate ID for that partner
 * 4. Test links before going live
 * 
 * TRACKING FLOW:
 * 1. User clicks product -> buildAffiliateUrl() generates tracked URL
 * 2. UTM parameters identify traffic source
 * 3. Partner's tracking param identifies Health-E as referrer
 * 4. Analytics event fired via tracking.ts
 * 
 * IMPORTANT: All affiliate links should open in new tab with rel="noopener noreferrer sponsored"
 */

import { UTMParams, AffiliatePartner, Product } from '@/lib/types/product';

/**
 * AFFILIATE PARTNER CONFIGURATIONS
 * ================================
 * Add new partners here as they are onboarded
 * 
 * @param id - Unique identifier for the partner
 * @param name - Display name
 * @param baseUrl - Partner's website base URL
 * @param affiliateId - Our affiliate ID with this partner
 * @param trackingParam - URL parameter name they use for affiliate tracking
 * @param cookieDuration - How long their affiliate cookie lasts (days)
 * @param commissionRate - Commission percentage (for internal reference)
 */
export const AFFILIATE_PARTNERS: Record<string, AffiliatePartner> = {
  /**
   * REGENMD
   * Primary peptide partner
   * Contact: [Add partner contact info]
   * Dashboard: [Add affiliate dashboard URL]
   */
  'REGENMD': {
    id: 'regenmd',
    name: 'REGENMD',
    baseUrl: 'https://regenmd.com',
    affiliateId: 'healthe',
    trackingParam: 'ref',
    cookieDuration: 30,
    commissionRate: 10,
    active: true,
  },
  
  /**
   * NutriCore
   * Supplements partner
   */
  'NutriCore': {
    id: 'nutricore',
    name: 'NutriCore',
    baseUrl: 'https://nutricore.com',
    affiliateId: 'healthe',
    trackingParam: 'ref',
    cookieDuration: 30,
    commissionRate: 8,
    active: true,
  },
  
  /**
   * Add more partners following this pattern:
   * 
   * 'PartnerName': {
   *   id: 'partner-slug',
   *   name: 'Partner Display Name',
   *   baseUrl: 'https://partner.com',
   *   affiliateId: 'your-affiliate-id',
   *   trackingParam: 'their-tracking-param',
   *   cookieDuration: 30,
   *   commissionRate: 10,
   *   active: true,
   * },
   */
};

/**
 * DEFAULT UTM PARAMETERS
 * ======================
 * These identify Health-E as the traffic source in analytics
 */
export const DEFAULT_UTM: Partial<UTMParams> = {
  source: 'healthe',
  medium: 'affiliate',
};

/**
 * Build a complete affiliate URL with tracking parameters
 * 
 * @param product - The product object containing affiliate link info
 * @param customUtm - Optional custom UTM parameters to override defaults
 * @returns Complete URL with all tracking parameters
 * 
 * EXAMPLE OUTPUT:
 * https://regenmd.com/products/define-stack?ref=healthe&utm_source=healthe&utm_medium=affiliate&utm_campaign=peptides&utm_content=pep-regenmd-define-stack
 */
export function buildAffiliateUrl(
  product: Product,
  customUtm?: Partial<UTMParams>
): string {
  const baseUrl = product.affiliateLink.url;
  const url = new URL(baseUrl);
  
  // Build UTM parameters
  const utm: UTMParams = {
    source: customUtm?.source || DEFAULT_UTM.source || 'healthe',
    medium: customUtm?.medium || DEFAULT_UTM.medium || 'affiliate',
    campaign: customUtm?.campaign || product.category,
    content: customUtm?.content || product.id,
    term: customUtm?.term,
  };
  
  // Add UTM parameters to URL
  url.searchParams.set('utm_source', utm.source);
  url.searchParams.set('utm_medium', utm.medium);
  if (utm.campaign) url.searchParams.set('utm_campaign', utm.campaign);
  if (utm.content) url.searchParams.set('utm_content', utm.content);
  if (utm.term) url.searchParams.set('utm_term', utm.term);
  
  return url.toString();
}

/**
 * Build a cloaked/shortened affiliate URL
 * This creates internal redirects like /go/product-slug
 * 
 * @param product - The product object
 * @returns Cloaked URL path (e.g., '/go/regenmd-define-stack')
 * 
 * DEVELOPER NOTE:
 * These URLs are handled by the /app/go/[slug]/route.ts API endpoint
 * which performs the redirect and tracks the click
 */
export function buildCloakedUrl(product: Product): string {
  return `/go/${product.slug}`;
}

/**
 * Get partner configuration by name
 * 
 * @param partnerName - The partner name as stored in product.affiliateLink.partner
 * @returns Partner configuration or undefined
 */
export function getPartnerConfig(partnerName: string): AffiliatePartner | undefined {
  return AFFILIATE_PARTNERS[partnerName];
}

/**
 * Check if a partner is active
 * 
 * @param partnerName - The partner name
 * @returns Boolean indicating if partner is active
 */
export function isPartnerActive(partnerName: string): boolean {
  const partner = AFFILIATE_PARTNERS[partnerName];
  return partner?.active ?? false;
}

/**
 * Get all active partners
 * 
 * @returns Array of active partner configurations
 */
export function getActivePartners(): AffiliatePartner[] {
  return Object.values(AFFILIATE_PARTNERS).filter(p => p.active);
}

/**
 * Generate affiliate disclosure text
 * Required by FTC for affiliate marketing
 * 
 * @param partnerName - Optional specific partner name
 * @returns Disclosure text string
 */
export function getAffiliateDisclosure(partnerName?: string): string {
  if (partnerName) {
    return `As an affiliate partner with ${partnerName}, Health-E may earn a commission from qualifying purchases made through this link.`;
  }
  return 'Health-E participates in affiliate programs. We may earn a commission when you make a purchase through our links at no extra cost to you.';
}

/**
 * Validate affiliate link health
 * Use this for periodic link checking
 * 
 * @param url - The URL to check
 * @returns Promise resolving to boolean indicating if link is valid
 * 
 * DEVELOPER NOTE:
 * Consider running this periodically via a cron job to detect broken links
 */
export async function validateAffiliateLink(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Format price for display
 * 
 * @param price - Price object from product
 * @returns Formatted price string
 */
export function formatPrice(price: { amount?: number; currency?: string; displayText?: string }): string {
  if (price.displayText) {
    return price.displayText;
  }
  
  if (price.amount !== undefined) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: price.currency || 'USD',
    });
    return formatter.format(price.amount);
  }
  
  return 'See price on site';
}
