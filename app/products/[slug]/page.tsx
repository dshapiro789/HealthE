/**
 * Product Detail Page
 * ===================
 * Individual product page with full details
 * 
 * DEVELOPER NOTES:
 * - Uses dynamic route [slug] for product URLs
 * - Generates static metadata for SEO
 * - Related products shown at bottom
 */

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ProductDetail } from '@/components/products/ProductDetail';
import { ProductGrid } from '@/components/products/ProductGrid';
import { getProductBySlug, getAllProducts, getProductsByCategory } from '@/lib/data/products';

interface ProductPageProps {
  params: { slug: string };
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: product.seo.title,
    description: product.seo.description,
    keywords: product.seo.keywords,
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      images: [
        {
          url: product.images.primary,
          width: 800,
          height: 800,
          alt: product.images.alt,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.seo.title,
      description: product.seo.description,
      images: [product.images.primary],
    },
  };
}

// Generate static paths for all products
export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // Get related products from same category (excluding current)
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pt-20">
      <ProductDetail product={product} />

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-background-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
              You Might Also Like
            </h2>
            <ProductGrid products={relatedProducts} columns={4} />
          </div>
        </section>
      )}
    </div>
  );
}
