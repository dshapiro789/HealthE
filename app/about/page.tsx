/**
 * About Page
 * ==========
 * Company information, mission, and team
 */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shield, Sparkles, Heart, Target, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Health-E, your trusted destination for premium health and wellness products. Discover our mission, values, and commitment to your wellness journey.',
};

const values = [
  {
    icon: Shield,
    title: 'Quality First',
    description: 'We partner only with brands that meet our rigorous quality standards and have proven track records.',
  },
  {
    icon: Sparkles,
    title: 'Expert Curation',
    description: 'Our wellness experts carefully evaluate and select each product to ensure it delivers real results.',
  },
  {
    icon: Heart,
    title: 'Your Success',
    description: 'We\'re invested in your wellness journey and provide the information you need to make informed choices.',
  },
  {
    icon: Target,
    title: 'Transparency',
    description: 'We\'re upfront about our affiliate relationships and never let commissions influence our recommendations.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-green-500 to-brand-blue-500 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-white/90 text-brand-green-950 backdrop-blur-sm shadow-sm mb-6 hover:bg-white/100">About Us</Badge>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Empowering Your Wellness Journey
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Health-E is your trusted destination for discovering premium health and wellness
              products from the world&apos;s most innovative brands. We believe everyone deserves
              access to the best wellness solutions available.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="brand" className="mb-4">Our Mission</Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Making Wellness Accessible to Everyone
              </h2>
              <p className="text-lg text-foreground-muted mb-6 leading-relaxed">
                In a market flooded with wellness products, finding quality can be overwhelming.
                That&apos;s why we created Health-E — a curated marketplace where every product
                has been vetted by our team of wellness experts.
              </p>
              <p className="text-lg text-foreground-muted mb-8 leading-relaxed">
                We partner with leading brands in supplements, peptides, wellness technology,
                and more to bring you products that actually work. Our commitment is to your
                health, not just sales.
              </p>
              <Link href="/products">
                <Button size="lg">
                  Explore Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-green-100 to-brand-blue-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <Image
                      src="/images/uploaded_media_1769485760854.png"
                      alt="Health-E Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-green-500 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-blue-500 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="brand" className="mb-4">Our Values</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Our core values guide every decision we make, from the products we feature
              to the way we communicate with our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-brand-green-500 to-brand-blue-500 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-foreground-muted">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="brand" className="mb-4">Our Process</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Curate Products
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Research & Discovery',
                  description: 'Our team continuously researches emerging wellness brands and products, staying ahead of industry trends.',
                },
                {
                  step: '02',
                  title: 'Quality Verification',
                  description: 'We verify ingredient sourcing, manufacturing practices, and third-party testing for every product we consider.',
                },
                {
                  step: '03',
                  title: 'Expert Review',
                  description: 'Our wellness experts evaluate efficacy claims against available research and real-world results.',
                },
                {
                  step: '04',
                  title: 'Partner Vetting',
                  description: 'We establish relationships only with brands that share our commitment to quality and customer satisfaction.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start"
                >
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-brand-green-500 to-brand-blue-500 flex items-center justify-center">
                    <span className="font-heading text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-foreground-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-green-500 to-brand-blue-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Browse our curated collection of premium health and wellness products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="xl" className="bg-white bg-none text-brand-green-600 hover:bg-white/90 border-none shadow-lg">
                Browse Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
