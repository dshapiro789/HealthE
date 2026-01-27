/**
 * Privacy Policy Page
 * ===================
 * GDPR/CCPA compliant privacy policy
 */

import React from 'react';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Health-E Privacy Policy - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Badge variant="brand" className="mb-4">Legal</Badge>
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-foreground-muted mb-8">
            Last updated: January 2024
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                1. Introduction
              </h2>
              <p className="text-foreground-muted mb-4">
                Health-E (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to 
                protecting your personal data. This privacy policy explains how we collect, use, 
                and safeguard your information when you visit our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                2. Information We Collect
              </h2>
              <p className="text-foreground-muted mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-foreground-muted space-y-2 ml-4">
                <li><strong>Personal Information:</strong> Name and email address when you sign up for our newsletter or contact us.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring URLs.</li>
                <li><strong>Device Information:</strong> Browser type, operating system, and device identifiers.</li>
                <li><strong>Cookies:</strong> Small data files stored on your device to enhance your experience.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-foreground-muted mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-foreground-muted space-y-2 ml-4">
                <li>Provide and improve our website and services</li>
                <li>Send newsletters and marketing communications (with your consent)</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Analyze website usage and trends</li>
                <li>Detect and prevent fraudulent activity</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                4. Affiliate Links & Third Parties
              </h2>
              <p className="text-foreground-muted mb-4">
                Our website contains affiliate links to third-party websites. When you click these 
                links and make purchases, we may earn a commission. These third-party sites have 
                their own privacy policies, and we encourage you to review them. We are not 
                responsible for the privacy practices of these external sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                5. Cookies & Tracking
              </h2>
              <p className="text-foreground-muted mb-4">
                We use cookies and similar tracking technologies to track activity on our website 
                and hold certain information. You can instruct your browser to refuse all cookies 
                or to indicate when a cookie is being sent. However, if you do not accept cookies, 
                some portions of our website may not function properly.
              </p>
              <p className="text-foreground-muted mb-4">
                Types of cookies we use include:
              </p>
              <ul className="list-disc list-inside text-foreground-muted space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
                <li><strong>Marketing Cookies:</strong> Used to track visitors across websites for advertising purposes.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                6. Your Rights
              </h2>
              <p className="text-foreground-muted mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside text-foreground-muted space-y-2 ml-4">
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to delete your data (&quot;right to be forgotten&quot;)</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to opt out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                7. Data Security
              </h2>
              <p className="text-foreground-muted mb-4">
                We implement appropriate technical and organizational measures to protect your 
                personal data against unauthorized access, alteration, disclosure, or destruction. 
                However, no method of transmission over the Internet or electronic storage is 
                100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                8. Children&apos;s Privacy
              </h2>
              <p className="text-foreground-muted mb-4">
                Our website is not intended for children under 13 years of age. We do not 
                knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                9. Changes to This Policy
              </h2>
              <p className="text-foreground-muted mb-4">
                We may update this privacy policy from time to time. We will notify you of any 
                changes by posting the new policy on this page and updating the &quot;Last updated&quot; 
                date at the top of this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                10. Contact Us
              </h2>
              <p className="text-foreground-muted mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-foreground-muted">
                Email: <a href="mailto:privacy@healthe.com" className="text-brand-green-500 hover:underline">privacy@healthe.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
