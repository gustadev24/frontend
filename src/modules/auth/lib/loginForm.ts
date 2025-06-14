import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email({
    message: 'Invalid email address',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters long',
  }),
  mfaCode: z.number().refine((val) => `${val}`.length === 6, {
    message: 'MFA code must be a 6-digit number',
  }),
});

export const loginFormFields: {
  name: keyof z.infer<typeof loginFormSchema>;
  label: string;
  placeholder: string;
  description: string;
  type?: string;
}[] = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'e.g. example@example.com',
    description: 'Your email address for login.',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    description: 'Your account password.',
    type: 'password',
  },
  {
    name: 'mfaCode',
    label: 'MFA Code',
    placeholder: '123456',
    description: 'Enter the 6-digit code from your authenticator app.',
    type: 'number',
  },
];
