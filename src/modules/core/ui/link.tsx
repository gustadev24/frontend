import { cn } from '@/modules/core/lib/utils';
import { Button, buttonVariants } from './button';
import { type VariantProps } from 'class-variance-authority';
import React from 'react';

function Link({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<'a'> & VariantProps<typeof buttonVariants>) {
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn('text-sm font-medium py-1', className)}
    >
      <a {...props}>{children}</a>
    </Button>
  );
}

export { Link };
