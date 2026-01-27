/**
 * NewsletterSignup Component
 * ==========================
 * Email capture form for newsletter subscriptions
 * 
 * DEVELOPER NOTES:
 * - Tracks signups via trackNewsletterSignup
 * - Can be connected to email service (Mailchimp, ConvertKit, etc.)
 * - Form validation using React Hook Form + Zod
 */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { trackNewsletterSignup } from '@/lib/utils/tracking';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

interface NewsletterSignupProps {
  /** Source identifier for tracking */
  source?: string;
  /** Display variant */
  variant?: 'default' | 'inline' | 'compact';
  /** Custom title */
  title?: string;
  /** Custom description */
  description?: string;
}

export function NewsletterSignup({
  source = 'website',
  variant = 'default',
  title = 'Stay Updated',
  description = 'Get wellness tips and exclusive deals delivered to your inbox.',
}: NewsletterSignupProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      /**
       * TODO: Connect to email service
       * 
       * Example with a serverless function:
       * await fetch('/api/newsletter', {
       *   method: 'POST',
       *   body: JSON.stringify({ email: data.email, source }),
       * });
       * 
       * Or directly with Mailchimp/ConvertKit SDK
       */
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Track signup
      trackNewsletterSignup(source);
      
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Newsletter signup error:', error);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`
          ${variant === 'default' ? 'text-center py-8' : ''}
          ${variant === 'inline' ? 'flex items-center gap-3' : ''}
          ${variant === 'compact' ? '' : ''}
        `}
      >
        <div className="flex items-center justify-center gap-3 text-brand-green-500">
          <CheckCircle className="w-6 h-6" />
          <span className="font-medium">Thanks for subscribing!</span>
        </div>
        <p className="text-sm text-foreground-muted mt-2">
          Check your inbox for a confirmation email.
        </p>
      </motion.div>
    );
  }

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          {...register('email')}
          error={!!errors.email}
          className="flex-1"
        />
        <Button type="submit" isLoading={isSubmitting} className="shrink-0">
          <ArrowRight className="w-4 h-4" />
        </Button>
      </form>
    );
  }

  if (variant === 'inline') {
    return (
      <div className="flex items-center gap-4 flex-wrap md:flex-nowrap">
        <div className="flex-1 min-w-0">
          <p className="font-medium text-foreground">{title}</p>
          <p className="text-sm text-foreground-muted">{description}</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 w-full md:w-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            {...register('email')}
            error={!!errors.email}
            className="flex-1 md:w-64"
          />
          <Button type="submit" isLoading={isSubmitting}>
            Subscribe
          </Button>
        </form>
      </div>
    );
  }

  // Default variant
  return (
    <div className="text-center max-w-md mx-auto">
      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-green-100 to-brand-blue-100 flex items-center justify-center">
        <Mail className="w-7 h-7 text-brand-green-500" />
      </div>
      
      <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-foreground-muted mb-6">
        {description}
      </p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <Input
            type="email"
            placeholder="Enter your email address"
            {...register('email')}
            error={!!errors.email}
            className="text-center"
          />
          {errors.email && (
            <p className="text-sm text-error mt-1">{errors.email.message}</p>
          )}
        </div>
        <Button type="submit" isLoading={isSubmitting} className="w-full">
          Subscribe Now
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </form>
      
      <p className="text-xs text-foreground-muted mt-4">
        No spam, ever. Unsubscribe anytime.
      </p>
    </div>
  );
}
