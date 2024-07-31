import { cn } from '@/lib/utils';
import React from 'react';

interface TypographyProps {
  variant: 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'paragraph' | 'base' | 'small' | 'large' | 'link' | 'blockquote' | 'list-item';
  children: React.ReactNode;
  className?: string;
}

export function Typography({ variant, children, className }: TypographyProps) {
  switch (variant) {
    case 'heading1':
      return (
        <h1 className={cn("font-bold text-5xl lg:text-6xl tracking-wide lg:leading-snug text-pretty transition-colors", className)}>
          {children}
        </h1>
      );
    case 'heading2':
      return (
        <h2 className={cn("font-bold text-4xl lg:text-5xl tracking-wide leading-snug lg:leading-snug text-pretty transition-colors", className)}>
          {children}
        </h2>
      );
    case 'heading3':
      return (
        <h3 className={cn("text-3xl lg:text-4xl font-semibold tracking-wide leading-relaxed text-pretty", className)}>
          {children}
        </h3>
      );
    case 'heading4':
    return (
        <h3 className={cn("text-xl font-semibold tracking-wide leading-relaxed text-pretty", className)}>
        {children}
        </h3>
    );
    case 'paragraph':
      return (
        <p className={cn("text-base tracking-wide leading-relaxed text-pretty", className)}>
          {children}
        </p>
      );
    case 'base':
    return (
        <div className={cn("text-base tracking-wide leading-relaxed text-pretty", className)}>
        {children}
        </div>
    );
    case 'small':
        return (
            <div className={cn("text-sm tracking-wide leading-relaxed text-pretty", className)}>
                {children}
            </div>
        );
    case 'large':
        return (
            <div className={cn("text-lg tracking-wide leading-relaxed text-pretty", className)}>
                {children}
            </div>
        );
    case 'link':
      return (
          <div className={cn("text-base tracking-wide leading-relaxed text-pretty text-primary hover:underline underline-offset-4", className)}>
              {children}
          </div>
      );
    case 'blockquote':
      return (
        <blockquote className={cn("italic tracking-wide leading-relaxed text-pretty", className)}>
          {children}
        </blockquote>
      );
    default:
      return null;
  }
};