/**
 * HEALTH-E MARKETPLACE - PRODUCT DATA
 * ====================================
 * 
 * This file contains all product data for the marketplace.
 * 
 * DEVELOPER NOTES FOR ADDING/UPDATING PRODUCTS:
 * =============================================
 * 
 * 1. ADDING A NEW PRODUCT:
 *    - Copy an existing product object as a template
 *    - Generate a unique id (recommend: category-brand-productname format)
 *    - Create a URL-safe slug (lowercase, hyphens instead of spaces)
 *    - Ensure affiliateLink.url is correct and tested
 *    - Set metadata.createdAt to current date
 *    - Set metadata.isNew to true for 30 days
 * 
 * 2. UPDATING A PRODUCT:
 *    - Update metadata.updatedAt to current date
 *    - If price changes, update price.amount and price.displayText
 * 
 * 3. AFFILIATE LINK REQUIREMENTS:
 *    - All affiliate URLs must be tested before adding
 *    - Include partner's affiliate ID in the URL if required
 *    - Document the partner name for tracking purposes
 * 
 * 4. IMAGE REQUIREMENTS:
 *    - Primary image: 800x800px minimum, square aspect ratio preferred
 *    - Use WebP format when possible
 *    - Include descriptive alt text for accessibility
 * 
 * CATEGORIES:
 * - supplements: Vitamins, minerals, health supplements
 * - peptides: Peptide-based products and stacks
 * - wellness-tech: Health monitoring devices and tech
 * - fitness: Exercise equipment and fitness products
 * - nutrition: Specialty foods, proteins, meal supplements
 * - recovery: Recovery tools, massage devices, sleep aids
 */

import { Product, Category } from '@/lib/types/product';

/**
 * PRODUCT CATEGORIES
 * ==================
 * Add new categories here when expanding the marketplace
 */
export const categories: Category[] = [
  {
    id: 'cat-supplements',
    slug: 'supplements',
    name: 'Supplements',
    description: 'High-quality vitamins, minerals, and health supplements from trusted brands.',
    image: '/images/categories/supplements.jpg',
    icon: 'Pill',
    productCount: 0, // Updated dynamically
    sortOrder: 1,
  },
  {
    id: 'cat-peptides',
    slug: 'peptides',
    name: 'Peptides',
    description: 'Advanced peptide formulations for performance and wellness optimization.',
    image: '/images/categories/peptides.jpg',
    icon: 'Dna',
    productCount: 0,
    sortOrder: 2,
  },
  {
    id: 'cat-wellness-tech',
    slug: 'wellness-tech',
    name: 'Wellness Tech',
    description: 'Cutting-edge health monitoring and wellness technology devices.',
    image: '/images/categories/wellness-tech.jpg',
    icon: 'Activity',
    productCount: 0,
    sortOrder: 3,
  },
  {
    id: 'cat-fitness',
    slug: 'fitness',
    name: 'Fitness',
    description: 'Premium fitness equipment and exercise accessories.',
    image: '/images/categories/fitness.jpg',
    icon: 'Dumbbell',
    productCount: 0,
    sortOrder: 4,
  },
  {
    id: 'cat-nutrition',
    slug: 'nutrition',
    name: 'Nutrition',
    description: 'Specialty nutrition products, proteins, and healthy food options.',
    image: '/images/categories/nutrition.jpg',
    icon: 'Apple',
    productCount: 0,
    sortOrder: 5,
  },
  {
    id: 'cat-recovery',
    slug: 'recovery',
    name: 'Recovery',
    description: 'Recovery tools, massage devices, and sleep optimization products.',
    image: '/images/categories/recovery.jpg',
    icon: 'Moon',
    productCount: 0,
    sortOrder: 6,
  },
];

/**
 * PRODUCTS DATABASE
 * =================
 * 
 * All products in the marketplace. Keep alphabetically sorted by category, then by name.
 */
export const products: Product[] = [
  // ========================================
  // PEPTIDES CATEGORY
  // ========================================
  {
    id: 'pep-regenmd-define-stack',
    slug: 'regenmd-define-stack',
    name: 'Define Stack',
    brand: {
      name: 'REGENMD',
      logo: '/images/brands/regenmd-logo.png',
      website: 'https://regenmd.com',
    },
    description: {
      short: 'Advanced peptide stack designed for body composition optimization and metabolic enhancement.',
      full: 'The Define Stack by REGENMD is a comprehensive peptide formulation engineered to support body recomposition goals. This carefully calibrated stack combines multiple peptides that work synergistically to enhance metabolic function, support lean muscle development, and optimize fat utilization. Ideal for those seeking to achieve a more defined physique through cutting-edge peptide science.',
    },
    category: 'peptides',
    tags: ['peptides', 'body composition', 'metabolism', 'fat loss', 'muscle definition'],
    price: {
      amount: 299.99,
      currency: 'USD',
      displayText: '$299.99',
    },
    images: {
      primary: '/images/products/define-stack.png',
      gallery: [],
      alt: 'REGENMD Define Stack peptide product',
    },
    /**
     * AFFILIATE LINK
     * Partner: REGENMD
     * Last verified: [Add date when verifying]
     * Commission: [Add commission rate]
     */
    affiliateLink: {
      url: 'https://regenmd.com/products/define-stack?ref=healthe',
      partner: 'REGENMD',
      partnerId: 'healthe',
    },
    benefits: [
      'Supports metabolic optimization',
      'May enhance body composition',
      'Promotes lean muscle support',
      'Research-backed formulation',
    ],
    usage: 'Follow the dosing protocol provided with the product. Consult with a healthcare provider before use.',
    metadata: {
      createdAt: '2024-01-15',
      updatedAt: '2024-03-01',
      featured: true,
      isNew: false,
    },
    seo: {
      title: 'REGENMD Define Stack - Advanced Peptide Formula | Health-E',
      description: 'Shop the REGENMD Define Stack for advanced body composition support. Premium peptide formulation for metabolic enhancement.',
      keywords: ['define stack', 'regenmd', 'peptides', 'body composition', 'metabolism'],
    },
  },
  {
    id: 'pep-regenmd-vitality-stack',
    slug: 'regenmd-vitality-stack',
    name: 'Vitality Stack',
    brand: {
      name: 'REGENMD',
      logo: '/images/brands/regenmd-logo.png',
      website: 'https://regenmd.com',
    },
    description: {
      short: 'Comprehensive peptide stack for overall wellness, energy, and vitality enhancement.',
      full: 'The Vitality Stack from REGENMD is formulated to support overall wellness and daily energy levels. This premium peptide combination targets multiple aspects of vitality, including cellular energy production, recovery support, and general wellbeing optimization. Perfect for individuals seeking to maintain peak performance and vitality throughout their daily activities.',
    },
    category: 'peptides',
    tags: ['peptides', 'vitality', 'energy', 'wellness', 'recovery'],
    price: {
      amount: 349.99,
      currency: 'USD',
      displayText: '$349.99',
    },
    images: {
      primary: '/images/products/vitality-stack.jpg',
      gallery: [],
      alt: 'REGENMD Vitality Stack peptide product',
    },
    affiliateLink: {
      url: 'https://regenmd.com/products/vitality-stack?ref=healthe',
      partner: 'REGENMD',
      partnerId: 'healthe',
    },
    benefits: [
      'Supports daily energy levels',
      'Promotes recovery and wellness',
      'Enhances overall vitality',
      'Premium quality ingredients',
    ],
    usage: 'Follow the recommended dosing protocol. Best used consistently for optimal results.',
    metadata: {
      createdAt: '2024-01-15',
      updatedAt: '2024-03-01',
      featured: true,
      isNew: false,
    },
    seo: {
      title: 'REGENMD Vitality Stack - Energy & Wellness Peptides | Health-E',
      description: 'Boost your vitality with REGENMD Vitality Stack. Premium peptide formula for energy and wellness support.',
      keywords: ['vitality stack', 'regenmd', 'peptides', 'energy', 'wellness'],
    },
  },

  // ========================================
  // SUPPLEMENTS CATEGORY
  // ========================================
  {
    id: 'sup-omega3-ultra',
    slug: 'premium-omega-3-complex',
    name: 'Premium Omega-3 Complex',
    brand: {
      name: 'NutriCore',
      logo: '/images/brands/nutricore-logo.png',
    },
    description: {
      short: 'Ultra-pure omega-3 fish oil with high EPA and DHA for heart, brain, and joint health.',
      full: 'NutriCore Premium Omega-3 Complex delivers pharmaceutical-grade fish oil with an optimized ratio of EPA and DHA fatty acids. Sourced from wild-caught fish and processed using molecular distillation for maximum purity, this supplement supports cardiovascular health, cognitive function, and joint mobility. Each softgel provides 1000mg of omega-3s in a highly bioavailable triglyceride form.',
    },
    category: 'supplements',
    tags: ['omega-3', 'fish oil', 'heart health', 'brain health', 'EPA', 'DHA'],
    price: {
      amount: 34.99,
      currency: 'USD',
      displayText: '$34.99',
    },
    images: {
      primary: '/images/products/omega-3-complex.jpg',
      gallery: [],
      alt: 'NutriCore Premium Omega-3 Complex supplement bottle',
    },
    affiliateLink: {
      url: 'https://example.com/nutricore-omega3?ref=healthe',
      partner: 'NutriCore',
      partnerId: 'healthe',
    },
    ingredients: ['Fish Oil Concentrate', 'EPA', 'DHA', 'Vitamin E', 'Gelatin Capsule'],
    benefits: [
      'Supports heart health',
      'Promotes cognitive function',
      'Helps maintain joint mobility',
      'Molecularly distilled for purity',
    ],
    usage: 'Take 2 softgels daily with food, or as directed by your healthcare provider.',
    metadata: {
      createdAt: '2024-02-01',
      updatedAt: '2024-03-01',
      featured: false,
      isNew: true,
    },
    seo: {
      title: 'Premium Omega-3 Fish Oil Complex | Health-E',
      description: 'Shop NutriCore Premium Omega-3 Complex for heart, brain, and joint support. Ultra-pure fish oil supplement.',
      keywords: ['omega-3', 'fish oil', 'EPA', 'DHA', 'heart health', 'supplements'],
    },
  },
  {
    id: 'sup-vitamin-d3-k2',
    slug: 'vitamin-d3-k2-complex',
    name: 'Vitamin D3 + K2 Complex',
    brand: {
      name: 'VitalBlend',
      logo: '/images/brands/vitalblend-logo.png',
    },
    description: {
      short: 'Synergistic vitamin D3 and K2 formula for optimal bone health and immune support.',
      full: 'VitalBlend\'s Vitamin D3 + K2 Complex combines two essential vitamins that work synergistically for optimal absorption and utilization. Vitamin D3 supports calcium absorption while K2 (as MK-7) ensures calcium is directed to bones rather than arteries. This powerful combination supports bone density, immune function, and cardiovascular health.',
    },
    category: 'supplements',
    tags: ['vitamin D', 'vitamin K2', 'bone health', 'immune support', 'vitamins'],
    price: {
      amount: 29.99,
      currency: 'USD',
      displayText: '$29.99',
    },
    images: {
      primary: '/images/products/vitamin-d3-k2.jpg',
      gallery: [],
      alt: 'VitalBlend Vitamin D3 + K2 supplement',
    },
    affiliateLink: {
      url: 'https://example.com/vitalblend-d3k2?ref=healthe',
      partner: 'VitalBlend',
      partnerId: 'healthe',
    },
    ingredients: ['Vitamin D3 (Cholecalciferol) 5000 IU', 'Vitamin K2 (MK-7) 100mcg', 'MCT Oil'],
    benefits: [
      'Supports bone health and density',
      'Enhances immune function',
      'Promotes cardiovascular health',
      'Optimal calcium utilization',
    ],
    usage: 'Take 1 softgel daily with a meal, or as directed by your healthcare provider.',
    metadata: {
      createdAt: '2024-01-20',
      updatedAt: '2024-03-01',
      featured: true,
      isNew: false,
    },
    seo: {
      title: 'Vitamin D3 + K2 Complex - Bone & Immune Support | Health-E',
      description: 'Support bone health and immunity with VitalBlend Vitamin D3 + K2 Complex. Synergistic vitamin formula.',
      keywords: ['vitamin D3', 'vitamin K2', 'bone health', 'immune support', 'vitamins'],
    },
  },
  {
    id: 'sup-magnesium-glycinate',
    slug: 'magnesium-glycinate-elite',
    name: 'Magnesium Glycinate Elite',
    brand: {
      name: 'PureForm',
      logo: '/images/brands/pureform-logo.png',
    },
    description: {
      short: 'Highly absorbable magnesium glycinate for relaxation, sleep, and muscle recovery.',
      full: 'PureForm Magnesium Glycinate Elite features the most bioavailable form of magnesium bound to glycine for gentle absorption and maximum effectiveness. This premium formula supports healthy sleep patterns, muscle relaxation, and stress management. Unlike other forms of magnesium, glycinate is easy on the digestive system and ideal for daily use.',
    },
    category: 'supplements',
    tags: ['magnesium', 'sleep', 'relaxation', 'muscle recovery', 'stress'],
    price: {
      amount: 39.99,
      currency: 'USD',
      displayText: '$39.99',
    },
    images: {
      primary: '/images/products/magnesium-glycinate.jpg',
      gallery: [],
      alt: 'PureForm Magnesium Glycinate Elite supplement',
    },
    affiliateLink: {
      url: 'https://example.com/pureform-magnesium?ref=healthe',
      partner: 'PureForm',
      partnerId: 'healthe',
    },
    ingredients: ['Magnesium Glycinate 400mg'],
    benefits: [
      'Promotes restful sleep',
      'Supports muscle relaxation',
      'Helps manage stress',
      'Gentle on stomach',
    ],
    usage: 'Take 2 capsules daily, preferably in the evening with water.',
    metadata: {
      createdAt: '2024-02-10',
      updatedAt: '2024-03-01',
      featured: false,
      isNew: true,
    },
    seo: {
      title: 'Magnesium Glycinate Elite - Sleep & Relaxation | Health-E',
      description: 'Premium magnesium glycinate for better sleep and muscle recovery. Highly absorbable formula.',
      keywords: ['magnesium', 'glycinate', 'sleep', 'relaxation', 'muscle recovery'],
    },
  },

  // ========================================
  // WELLNESS TECH CATEGORY
  // ========================================
  {
    id: 'tech-smart-scale-pro',
    slug: 'smart-body-composition-scale',
    name: 'Smart Body Composition Scale',
    brand: {
      name: 'TechFit',
      logo: '/images/brands/techfit-logo.png',
    },
    description: {
      short: 'Advanced smart scale with full body composition analysis and app connectivity.',
      full: 'The TechFit Smart Body Composition Scale uses bioelectrical impedance analysis to provide comprehensive body metrics including weight, body fat percentage, muscle mass, bone density, and hydration levels. Sync seamlessly with the TechFit app to track your progress over time. Supports multiple user profiles and integrates with popular health platforms.',
    },
    category: 'wellness-tech',
    tags: ['smart scale', 'body composition', 'fitness tracking', 'health tech', 'weight'],
    price: {
      amount: 89.99,
      currency: 'USD',
      displayText: '$89.99',
    },
    images: {
      primary: '/images/products/smart-scale.jpg',
      gallery: [],
      alt: 'TechFit Smart Body Composition Scale',
    },
    affiliateLink: {
      url: 'https://example.com/techfit-scale?ref=healthe',
      partner: 'TechFit',
      partnerId: 'healthe',
    },
    benefits: [
      '13 body composition metrics',
      'Bluetooth app connectivity',
      'Multiple user profiles',
      'Sleek tempered glass design',
    ],
    usage: 'Step on scale barefoot for accurate readings. Best measured at the same time daily.',
    metadata: {
      createdAt: '2024-01-25',
      updatedAt: '2024-03-01',
      featured: true,
      isNew: false,
    },
    seo: {
      title: 'Smart Body Composition Scale - Track Your Progress | Health-E',
      description: 'Advanced smart scale with body composition analysis. Track weight, body fat, muscle mass and more.',
      keywords: ['smart scale', 'body composition', 'fitness tracker', 'health tech'],
    },
  },
  {
    id: 'tech-red-light-panel',
    slug: 'professional-red-light-therapy-panel',
    name: 'Professional Red Light Therapy Panel',
    brand: {
      name: 'LumiHealth',
      logo: '/images/brands/lumihealth-logo.png',
    },
    description: {
      short: 'Clinical-grade red and near-infrared light therapy panel for recovery and wellness.',
      full: 'The LumiHealth Professional Red Light Therapy Panel delivers therapeutic wavelengths of red (660nm) and near-infrared (850nm) light for deep tissue penetration. Clinically studied wavelengths support muscle recovery, skin health, and cellular energy production. Features adjustable intensity, timer function, and modular design for full-body coverage.',
    },
    category: 'wellness-tech',
    tags: ['red light therapy', 'recovery', 'skin health', 'photobiomodulation', 'biohacking'],
    price: {
      amount: 599.99,
      currency: 'USD',
      displayText: '$599.99',
    },
    images: {
      primary: '/images/products/red-light-panel.jpg',
      gallery: [],
      alt: 'LumiHealth Professional Red Light Therapy Panel',
    },
    affiliateLink: {
      url: 'https://example.com/lumihealth-panel?ref=healthe',
      partner: 'LumiHealth',
      partnerId: 'healthe',
    },
    benefits: [
      'Dual wavelength therapy (660nm + 850nm)',
      'Supports muscle recovery',
      'Promotes skin health',
      'Low EMF design',
    ],
    usage: 'Use for 10-20 minutes daily at 6-12 inches from treatment area.',
    metadata: {
      createdAt: '2024-02-05',
      updatedAt: '2024-03-01',
      featured: true,
      isNew: true,
    },
    seo: {
      title: 'Professional Red Light Therapy Panel | Health-E',
      description: 'Clinical-grade red light therapy for recovery and wellness. Dual wavelength LED panel.',
      keywords: ['red light therapy', 'photobiomodulation', 'recovery', 'skin health'],
    },
  },

  // ========================================
  // FITNESS CATEGORY
  // ========================================
  {
    id: 'fit-resistance-bands-set',
    slug: 'premium-resistance-bands-set',
    name: 'Premium Resistance Bands Set',
    brand: {
      name: 'FlexFit',
      logo: '/images/brands/flexfit-logo.png',
    },
    description: {
      short: 'Complete resistance band set with 5 resistance levels and premium accessories.',
      full: 'The FlexFit Premium Resistance Bands Set includes 5 color-coded bands ranging from extra light to extra heavy resistance. Made from natural latex with reinforced loop stitching for durability. Kit includes padded handles, door anchor, ankle straps, and carrying bag. Perfect for home workouts, physical therapy, or travel fitness.',
    },
    category: 'fitness',
    tags: ['resistance bands', 'home workout', 'strength training', 'fitness equipment'],
    price: {
      amount: 49.99,
      currency: 'USD',
      displayText: '$49.99',
    },
    images: {
      primary: '/images/products/resistance-bands.jpg',
      gallery: [],
      alt: 'FlexFit Premium Resistance Bands Set',
    },
    affiliateLink: {
      url: 'https://example.com/flexfit-bands?ref=healthe',
      partner: 'FlexFit',
      partnerId: 'healthe',
    },
    benefits: [
      '5 resistance levels (10-50 lbs)',
      'Natural latex construction',
      'Complete accessory kit included',
      'Portable with carrying bag',
    ],
    usage: 'Suitable for all fitness levels. Combine bands for increased resistance.',
    metadata: {
      createdAt: '2024-01-30',
      updatedAt: '2024-03-01',
      featured: false,
      isNew: false,
    },
    seo: {
      title: 'Premium Resistance Bands Set - Home Workout | Health-E',
      description: 'Complete resistance band set with 5 levels and accessories. Perfect for home workouts.',
      keywords: ['resistance bands', 'home workout', 'fitness', 'strength training'],
    },
  },

  // ========================================
  // NUTRITION CATEGORY
  // ========================================
  {
    id: 'nut-grass-fed-whey',
    slug: 'grass-fed-whey-protein-isolate',
    name: 'Grass-Fed Whey Protein Isolate',
    brand: {
      name: 'CleanProtein',
      logo: '/images/brands/cleanprotein-logo.png',
    },
    description: {
      short: 'Pure grass-fed whey protein isolate with no artificial ingredients or fillers.',
      full: 'CleanProtein Grass-Fed Whey Isolate is sourced from pasture-raised, grass-fed cows and cold-processed to preserve natural nutrients and protein bioavailability. With 27g of protein per serving, minimal lactose, and no artificial sweeteners or flavors, this is the cleanest whey protein available. Available in natural vanilla and chocolate flavors.',
    },
    category: 'nutrition',
    tags: ['protein', 'whey', 'grass-fed', 'muscle building', 'clean nutrition'],
    price: {
      amount: 54.99,
      currency: 'USD',
      displayText: '$54.99',
    },
    images: {
      primary: '/images/products/grass-fed-whey.jpg',
      gallery: [],
      alt: 'CleanProtein Grass-Fed Whey Protein Isolate',
    },
    affiliateLink: {
      url: 'https://example.com/cleanprotein-whey?ref=healthe',
      partner: 'CleanProtein',
      partnerId: 'healthe',
    },
    ingredients: ['Grass-Fed Whey Protein Isolate', 'Natural Flavors', 'Stevia'],
    benefits: [
      '27g protein per serving',
      'Grass-fed and pasture-raised',
      'No artificial ingredients',
      'Low lactose',
    ],
    usage: 'Mix 1 scoop with 8-10 oz water or milk. Ideal post-workout or as a meal supplement.',
    metadata: {
      createdAt: '2024-02-15',
      updatedAt: '2024-03-01',
      featured: true,
      isNew: true,
    },
    seo: {
      title: 'Grass-Fed Whey Protein Isolate | Health-E',
      description: 'Clean, grass-fed whey protein isolate with 27g protein. No artificial ingredients.',
      keywords: ['whey protein', 'grass-fed', 'protein isolate', 'muscle building'],
    },
  },

  // ========================================
  // RECOVERY CATEGORY
  // ========================================
  {
    id: 'rec-massage-gun-pro',
    slug: 'deep-tissue-massage-gun-pro',
    name: 'Deep Tissue Massage Gun Pro',
    brand: {
      name: 'RecoverMax',
      logo: '/images/brands/recovermax-logo.png',
    },
    description: {
      short: 'Professional-grade percussion massage gun with 6 speed settings and 4 attachments.',
      full: 'The RecoverMax Deep Tissue Massage Gun Pro delivers powerful percussion therapy for muscle recovery and pain relief. Features a brushless motor with 6 speed settings (1200-3200 RPM), 4 interchangeable heads, and a quiet operation under 45dB. The ergonomic design and long-lasting battery (6+ hours) make it perfect for athletes and everyday users alike.',
    },
    category: 'recovery',
    tags: ['massage gun', 'muscle recovery', 'percussion therapy', 'pain relief', 'fitness recovery'],
    price: {
      amount: 199.99,
      currency: 'USD',
      displayText: '$199.99',
    },
    images: {
      primary: '/images/products/massage-gun.jpg',
      gallery: [],
      alt: 'RecoverMax Deep Tissue Massage Gun Pro',
    },
    affiliateLink: {
      url: 'https://example.com/recovermax-gun?ref=healthe',
      partner: 'RecoverMax',
      partnerId: 'healthe',
    },
    benefits: [
      'Powerful percussion therapy',
      'Quiet operation (<45dB)',
      '6+ hour battery life',
      '4 attachment heads included',
    ],
    usage: 'Use for 2-3 minutes per muscle group. Avoid bones and joints.',
    metadata: {
      createdAt: '2024-02-08',
      updatedAt: '2024-03-01',
      featured: true,
      isNew: false,
    },
    seo: {
      title: 'Deep Tissue Massage Gun Pro - Muscle Recovery | Health-E',
      description: 'Professional percussion massage gun for deep tissue recovery. 6 speeds, quiet operation.',
      keywords: ['massage gun', 'percussion massager', 'muscle recovery', 'pain relief'],
    },
  },
];

/**
 * HELPER FUNCTIONS
 * ================
 * Utility functions for working with product data
 */

/**
 * Get all products
 */
export function getAllProducts(): Product[] {
  return products;
}

/**
 * Get product by slug
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

/**
 * Get product by ID
 */
export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

/**
 * Get products by category
 */
export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.category === categorySlug);
}

/**
 * Get featured products
 */
export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.metadata.featured);
}

/**
 * Get new products (isNew flag)
 */
export function getNewProducts(): Product[] {
  return products.filter(p => p.metadata.isNew);
}

/**
 * Get all categories with updated product counts
 */
export function getCategoriesWithCounts(): Category[] {
  return categories.map(category => ({
    ...category,
    productCount: products.filter(p => p.category === category.slug).length,
  }));
}

/**
 * Get category by slug
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

/**
 * Search products by query
 * Searches name, description, brand, and tags
 */
export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return [];

  return products.filter(product => {
    const searchableText = [
      product.name,
      product.description.short,
      product.description.full,
      product.brand.name,
      ...product.tags,
    ].join(' ').toLowerCase();

    return searchableText.includes(searchTerm);
  });
}

/**
 * Get unique brands from products
 */
export function getAllBrands(): string[] {
  const brands = new Set(products.map(p => p.brand.name));
  return Array.from(brands).sort();
}

/**
 * Get price range across all products
 */
export function getPriceRange(): { min: number; max: number } {
  const prices = products
    .filter(p => p.price.amount !== undefined)
    .map(p => p.price.amount as number);

  if (prices.length === 0) return { min: 0, max: 1000 };

  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
}
