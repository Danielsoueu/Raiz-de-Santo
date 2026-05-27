import React from 'react';
import { cn } from '@/lib/utils';

interface SkipLinkProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * SkipLink Component
 * Provides keyboard navigation accessibility by allowing users to skip to main content
 */
export function SkipLink({
  href = '#main-content',
  className,
  children = 'Pular para o conteúdo principal',
}: SkipLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        'sr-only focus:not-sr-only',
        'fixed top-4 left-4 z-[1600]',
        'bg-brand-primary text-white px-4 py-3 rounded-lg',
        'font-semibold text-sm',
        'shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2',
        'transition-all duration-200',
        className
      )}
    >
      {children}
    </a>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

/**
 * Button Component
 * Reusable button with variants and accessibility features
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]';

    const variantStyles = {
      primary:
        'bg-brand-primary text-white hover:bg-brand-primary/90 focus:ring-brand-primary shadow-lg',
      secondary:
        'bg-brand-secondary text-brand-primary hover:bg-brand-secondary/90 focus:ring-brand-secondary shadow-lg',
      outline:
        'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary',
      ghost:
        'text-brand-primary hover:bg-brand-accent/20 focus:ring-brand-accent',
    };

    const sizeStyles = {
      sm: 'px-4 py-2 text-xs gap-1.5',
      md: 'px-6 py-3 text-sm gap-2',
      lg: 'px-8 py-4 text-base gap-2.5',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth ? 'w-full' : '',
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && <span aria-hidden="true">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span aria-hidden="true">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: React.ReactNode;
  label: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'rounded' | 'circular';
}

/**
 * IconButton Component
 * Accessible icon button with proper ARIA labels and minimum touch target
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconProps>(
  ({ icon, label, size = 'md', variant = 'rounded', className, ...props }, ref) => {
    const sizeStyles = {
      sm: 'w-10 h-10 p-2',
      md: 'w-12 h-12 p-2.5',
      lg: 'w-14 h-14 p-3',
    };

    const variantStyles = {
      default: '',
      rounded: 'rounded-xl bg-brand-bg border border-brand-accent/40 hover:bg-brand-primary hover:text-white',
      circular: 'rounded-full bg-brand-bg border border-brand-accent/40 hover:bg-brand-primary hover:text-white',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'flex items-center justify-center transition-all duration-300',
          'focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2',
          'min-w-[44px] min-h-[44px]', // WCAG minimum touch target
          sizeStyles[size],
          variantStyles[variant],
          className
        )}
        aria-label={label}
        {...props}
      >
        {icon}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
