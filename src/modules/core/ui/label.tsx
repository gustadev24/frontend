import { cn } from '@/modules/core/lib/utils';
import type { ComponentProps } from 'react';

type LabelProps = ComponentProps<'label'>;

function Label({ children, className, ...rest }: LabelProps) {
  return (
    <label className={cn('font-medium', className)} {...rest}>
      {children}
    </label>
  );
}

export { Label };
