/**
 * Affiliate Disclosure Page
 * =========================
 * FTC-compliant affiliate disclosure
 */

import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Info } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'Health-E Affiliate Disclosure - Transparency about our affiliate relationships and how we earn commissions.',
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Badge variant="brand" className="mb-4">Disclosure</Badge>
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
            Affiliate Disclosure
          </h1>
          <p className="text-foreground-muted mb-8">
            Transparency is important to us. Here&apos;s how Health-E works.
          </p>

          {/* Highlight Box */}
          <div className="bg-gradient-to-br from-brand-green-50 to-brand-blue-50 rounded-2xl p-6 mb-8 border border-brand-green-200">
            <div className="flex gap-4">
              <Info className="w-6 h-6 text-brand-green-500 shrink-0 mt-1" />
              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Quick Summary
                </h2>
                <p className="text-foreground-muted">
                  Health-E earns commissions when you purchase products through our links. 
                  This doesn&apos;t cost you anything extra and helps support our work in curating 
                  quality wellness products.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                How We Make Money
              </h2>
              <p className="text-foreground-muted mb-4">
                Health-E is an affiliate marketplace. This means we partner with health and 
                wellness brands and retailers, and when you click on a product link on our 
                site and make a purchase, we may earn a small commission from that sale.
              </p>
              <p className="text-foreground-muted mb-4">
                <strong>Important:</strong> This commission comes from the retailer, not from you. 
                You pay the same price whether you purchase through our link or go directly to 
                the retailer&apos;s website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Our Commitment to You
              </h2>
              <p className="text-foreground-muted mb-4">
                While we earn commissions from affiliate sales, we want you to know:
              </p>
              <ul className="list-disc list-inside text-foreground-muted space-y-2 ml-4 mb-4">
                <li>We only feature products we believe in and that meet our quality standards</li>
                <li>Commission rates do not influence which products we feature or recommend</li>
                <li>We provide honest information about products, including their limitations</li>
                <li>We clearly disclose affiliate relationships on product pages</li>
                <li>Our editorial content is not influenced by affiliate partnerships</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Affiliate Programs We Participate In
              </h2>
              <p className="text-foreground-muted mb-4">
                Health-E participates in affiliate programs with various health and wellness 
                brands. Each partnership is carefully vetted to ensure the brand meets our 
                standards for quality, transparency, and customer service.
              </p>
              <p className="text-foreground-muted mb-4">
                When you see a &quot;Buy on [Partner Name]&quot; button or any external product link, 
                you can assume it is an affiliate link that may result in compensation to Health-E.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                FTC Compliance
              </h2>
              <p className="text-foreground-muted mb-4">
                In accordance with the Federal Trade Commission&apos;s guidelines on endorsements 
                and testimonials, we disclose our affiliate relationships. The FTC requires 
                that we disclose any relationship we have between a product manufacturer or 
                seller when we write about a product.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Product Reviews & Recommendations
              </h2>
              <p className="text-foreground-muted mb-4">
                Our product selections are based on research, expert knowledge, and our 
                assessment of product quality—not on potential commission earnings. We 
                evaluate products on factors including:
              </p>
              <ul className="list-disc list-inside text-foreground-muted space-y-2 ml-4 mb-4">
                <li>Ingredient quality and sourcing</li>
                <li>Brand reputation and track record</li>
                <li>Third-party testing and certifications</li>
                <li>Customer reviews and feedback</li>
                <li>Value for money</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Questions?
              </h2>
              <p className="text-foreground-muted mb-4">
                If you have any questions about our affiliate relationships or how we select 
                products, we&apos;d love to hear from you.
              </p>
              <Link href="/contact">
                <Button>
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
