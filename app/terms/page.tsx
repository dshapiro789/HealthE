/**
 * Terms of Service Page
 * =====================
 * Legal terms for website usage
 */

import React from 'react';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Health-E Terms of Service - Read our terms and conditions for using our website.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Badge variant="brand" className="mb-4">Legal</Badge>
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-foreground-muted mb-8">
            Last updated: January 2024
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-foreground-muted mb-4">
                By accessing and using the Health-E website, you accept and agree to be bound by 
                these Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                2. Description of Service
              </h2>
              <p className="text-foreground-muted mb-4">
                Health-E is an affiliate marketplace that curates and features health and wellness 
                products from third-party vendors. We provide information about products and link 
                to external websites where purchases can be made. We do not sell products directly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                3. Affiliate Relationships
              </h2>
              <p className="text-foreground-muted mb-4">
                Health-E participates in affiliate programs with various brands and retailers. 
                When you click on product links and make purchases, we may earn a commission. 
                This does not affect your purchase price. Our affiliate relationships are disclosed 
                on product pages and in our Affiliate Disclosure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                4. Product Information
              </h2>
              <p className="text-foreground-muted mb-4">
                While we strive to provide accurate product information, we cannot guarantee the 
                accuracy, completeness, or reliability of any product descriptions, prices, or 
                availability shown on our website. Product information is provided by third-party 
                vendors and may change without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                5. Health Disclaimer
              </h2>
              <p className="text-foreground-muted mb-4">
                The content on Health-E is for informational purposes only and is not intended 
                as medical advice. Always consult with a qualified healthcare provider before 
                starting any new supplement, medication, or health regimen. We are not responsible 
                for any health decisions you make based on information found on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                6. Third-Party Links
              </h2>
              <p className="text-foreground-muted mb-4">
                Our website contains links to third-party websites. These links are provided for 
                your convenience only. We have no control over the content, privacy policies, or 
                practices of third-party websites and accept no responsibility for them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                7. Intellectual Property
              </h2>
              <p className="text-foreground-muted mb-4">
                All content on this website, including text, graphics, logos, and images, is the 
                property of Health-E or its content suppliers and is protected by copyright laws. 
                You may not reproduce, distribute, or create derivative works without our express 
                written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-foreground-muted mb-4">
                To the fullest extent permitted by law, Health-E shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages arising from 
                your use of our website or any products purchased through affiliate links.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                9. Changes to Terms
              </h2>
              <p className="text-foreground-muted mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting to our website. Your continued use of the website after 
                changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                10. Contact
              </h2>
              <p className="text-foreground-muted">
                For questions about these Terms of Service, contact us at:{' '}
                <a href="mailto:legal@healthe.com" className="text-brand-green-500 hover:underline">
                  legal@healthe.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
