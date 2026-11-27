import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'brand' | 'success' | 'warning' | 'danger' | 'neutral';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'brand',
  size = 'md',
  ...props
}) => {
  const base = 'inline-flex items-center font-medium rounded-md tabular-nums';

  const variants = {
    brand: 'bg-brand-500/12 text-brand-300 border border-brand-500/20',
    success: 'bg-[#4cc38a]/12 text-[#4cc38a] border border-[#4cc38a]/20',
    warning: 'bg-amber-500/12 text-amber-300 border border-amber-500/20',
    danger: 'bg-[#e5484d]/12 text-[#e5484d] border border-[#e5484d]/20',
    neutral: 'bg-[#232325] text-[#a1a1a6] border border-white/[0.08]',
  };

  const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  };

  return (
    <span className={twMerge(clsx(base, variants[variant], sizes[size], className))} {...props}>
      {children}
    </span>
  );
};
