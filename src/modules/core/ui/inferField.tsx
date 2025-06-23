import type { Field } from '@/modules/core/types/field';
import { Input } from '@/modules/core/ui/input';
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/modules/core/ui/form';
import type {
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form';
import { SupportedFields } from '@/modules/core/lib/field';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/modules/core/ui/select';
import { Textarea } from '@/modules/core/ui/textarea';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/modules/core/ui/input-otp';
import { useMemo } from 'react';

function InferItem<
  FieldName extends string,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  description,
  ...props
}: Field<FieldName> & ControllerRenderProps<TFieldValues, TName>) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        {(() => {
          if (props.type === SupportedFields.SELECT) {
            return (
              <Select onValueChange={props.onChange} defaultValue={props.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={props.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {props.options.map(({ key, value, textValue }) => (
                    <SelectItem key={`select-${key}-${value}`} value={value}>
                      {textValue || value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            );
          } else if (props.type === SupportedFields.TEXTAREA) {
            return <Textarea {...props} />;
          } else if (props.type === SupportedFields.OTP) {
            const leftSlots = useMemo(() => {
              return Array.from(
                { length: Math.floor(props.maxLength / 2) },
                (_, i) => ({
                  id: crypto.randomUUID(),
                  index: i,
                }),
              );
            }, [props.maxLength]);

            const rightSlots = useMemo(() => {
              return Array.from(
                { length: Math.ceil(props.maxLength / 2) },
                (_, i) => ({
                  id: crypto.randomUUID(),
                  index: i + Math.floor(props.maxLength / 2),
                }),
              );
            }, [props.maxLength]);

            return (
              <InputOTP {...props}>
                <InputOTPGroup>
                  {leftSlots.map(({ id }, i) => (
                    <InputOTPSlot key={`input-otp-${id}-${i}`} index={i} />
                  ))}
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  {rightSlots.map(({ id }, i) => (
                    <InputOTPSlot
                      key={`input-otp-${id}-${i + Math.floor(props.maxLength / 2)}`}
                      index={i + Math.floor(props.maxLength / 2)}
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            );
          } else if (props.type === SupportedFields.FILE) {
            return (
              <Input 
                type={props.type}
                name={props.name}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  props.onChange(file);
                }}
              />
            );
          } else {
            return (
              <Input
                {...props}
                onChange={
                  props.type === SupportedFields.NUMBER
                    ? (e) => props.onChange(Number(e.target.value))
                    : props.onChange
                }
              />
            );
          }
        })()}
      </FormControl>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
}

export { InferItem };
