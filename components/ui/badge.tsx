/**
 * Badge Component
 * ===============
 * Small status indicators and labels
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-brand-green-100 to-brand-blue-100 text-brand-green-700',
        brand:
          'bg-gradient-to-r from-brand-green-500 to-brand-blue-500 text-white',
        secondary:
          'bg-background-secondary text-foreground-muted',
        success:
          'bg-green-100 text-green-700',
        warning:
          'bg-amber-100 text-amber-700',
        error:
          'bg-red-100 text-red-700',
        outline:
          'border border-border text-foreground-muted bg-transparent',
        new:
          'bg-gradient-to-r from-brand-green-500 to-brand-blue-500 text-white animate-pulse',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
