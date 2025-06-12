import { cn } from '@/modules/core/lib/utils';
import type { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'>;

function Input({ className, ...rest }: InputProps) {
  return (
    <input
      className={cn(
        'rounded-md outline-1 outline-gray-300 px-3 py-1 placeholder-gray-500 w-full',
        className,
      )}
      {...rest}
    />
  );
}

export { Input };
