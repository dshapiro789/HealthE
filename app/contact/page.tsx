/**
 * Contact Page
 * ============
 * Contact form and information
 */

'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, MessageSquare, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const faqs = [
  {
    question: 'How do you select the products you feature?',
    answer: 'Our wellness experts carefully evaluate each product based on ingredient quality, brand reputation, third-party testing, and real-world effectiveness before adding it to our marketplace.',
  },
  {
    question: 'Are you affiliated with the brands you feature?',
    answer: 'Yes, Health-E operates as an affiliate marketplace. We may earn commissions when you make purchases through our links. This is disclosed on all product pages and doesn\'t affect your purchase price.',
  },
  {
    question: 'How can I suggest a product or brand?',
    answer: 'We love hearing from our community! Use the contact form on this page to suggest products or brands you\'d like to see featured. Our team reviews all suggestions.',
  },
  {
    question: 'Do you offer customer support for products?',
    answer: 'Product-specific support is handled by the respective brand. We can help you connect with the right brand for any product questions or issues.',
  },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      /**
       * TODO: Connect to email service or API
       * 
       * Example:
       * await fetch('/api/contact', {
       *   method: 'POST',
       *   body: JSON.stringify(data),
       * });
       */
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Contact form error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-green-500 to-brand-blue-500 py-16">
        <div className="container mx-auto px-4">
          <Badge className="bg-white/20 text-white mb-4">Contact</Badge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Have questions, suggestions, or feedback? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-card">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-green-100 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-brand-green-500" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-foreground-muted mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within 24-48 hours.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-foreground-muted mb-8">
                    Fill out the form below and we&apos;ll respond as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Your Name
                        </label>
                        <Input
                          {...register('name')}
                          placeholder="John Doe"
                          error={!!errors.name}
                        />
                        {errors.name && (
                          <p className="text-sm text-error mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <Input
                          {...register('email')}
                          type="email"
                          placeholder="john@example.com"
                          error={!!errors.email}
                        />
                        {errors.email && (
                          <p className="text-sm text-error mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        {...register('subject')}
                        placeholder="How can we help?"
                        error={!!errors.subject}
                      />
                      {errors.subject && (
                        <p className="text-sm text-error mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        {...register('message')}
                        rows={5}
                        placeholder="Tell us more about your inquiry..."
                        className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                          errors.message 
                            ? 'border-error focus:border-error focus:ring-error/20' 
                            : 'border-border focus:border-brand-green-500 focus:ring-brand-green-500/20'
                        } focus:outline-none focus:ring-2`}
                      />
                      {errors.message && (
                        <p className="text-sm text-error mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <Button type="submit" size="lg" isLoading={isSubmitting} className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid gap-4">
              <div className="bg-white rounded-xl p-6 shadow-card flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-green-100 to-brand-blue-100 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-brand-green-500" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    Email Us
                  </h3>
                  <p className="text-foreground-muted text-sm mb-2">
                    For general inquiries and support
                  </p>
                  <a 
                    href="mailto:hello@healthe.com"
                    className="text-brand-green-500 hover:text-brand-green-600 font-medium"
                  >
                    hello@healthe.com
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-card flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-green-100 to-brand-blue-100 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-brand-green-500" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    Response Time
                  </h3>
                  <p className="text-foreground-muted">
                    We typically respond within 24-48 business hours.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-card"
                  >
                    <h3 className="font-heading font-semibold text-foreground mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-foreground-muted text-sm">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
