import { RolesValues } from '@/modules/core/lib/user';
import type { Role } from '@/modules/core/types/user';
import { z } from 'zod';

export const registerFormSchema = z.object({
  names: z.string().min(2, {
    message: 'Full name must be at least 2 characters long',
  }),
  email: z.string().email({
    message: 'Invalid email address',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters long',
  }),
  confirmPassword: z.string().min(8, {
    message: 'Confirm password must be at least 8 characters long',
  }),
  role: z.enum(RolesValues as [Role, ...Role[]], {
    message: 'Invalid role',
  }),
});

export const registerFormFields: {
  name: keyof z.infer<typeof registerFormSchema>;
  label: string;
  placeholder: string;
  description: string;
  type?: string;
}[] = [
  {
    name: 'names',
    label: 'Full Name',
    placeholder: 'e.g. John Doe',
    description: 'Your full name as it appears on official documents.',
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'e.g. example@example.com',
    description: 'Your email address for account registration.',
    type: 'email',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    description: 'Your account password.',
    type: 'password',
  },
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    placeholder: 'Re-enter your password',
    description: 'Please confirm your password.',
    type: 'password',
  },
  {
    name: 'role',
    label: 'Role',
    placeholder: 'Select your role',
    description: 'Select the role you want to register as.',
  },
];
