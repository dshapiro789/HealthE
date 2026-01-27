/**
 * Input Component
 * ===============
 * Styled input field with consistent design
 */

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-11 w-full rounded-lg border border-border bg-white px-4 py-2 text-sm transition-colors',
          'placeholder:text-foreground-muted',
          'focus:border-brand-green-500 focus:outline-none focus:ring-2 focus:ring-brand-green-500/20',
          'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-background-secondary',
          error && 'border-error focus:border-error focus:ring-error/20',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
