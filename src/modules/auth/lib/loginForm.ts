import { SupportedFields } from '@/modules/core/lib/field';
import type { Field } from '@/modules/core/types/field';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email({
    message: 'Invalid email address',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters long',
  }),
  mfaCode: z.string().length(6, {
    message: 'MFA code must be a 6-digit number',
  }),
});

export const loginFormFields: Field<keyof z.infer<typeof loginFormSchema>>[] = [
  {
    name: 'email',
    label: 'Email',
    type: SupportedFields.EMAIL,
    placeholder: 'e.g. example@example.com',
    description: 'Your email address for login.',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    description: 'Your account password.',
    type: SupportedFields.PASSWORD,
  },
  {
    name: 'mfaCode',
    label: 'MFA Code',
    placeholder: '123456',
    description: 'Enter the 6-digit code from your authenticator app.',
    type: SupportedFields.OTP,
    maxLength: 6,
    pattern: REGEXP_ONLY_DIGITS,
  },
];
