import { SupportedFields } from '@/modules/core/lib/field';
import { RolesValues } from '@/modules/auth/lib/roles';
import type { Field } from '@/modules/core/types/field';
import type { Role } from '@/modules/auth/types/role';
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

export const registerFormFields: Field<
  keyof z.infer<typeof registerFormSchema>
>[] = [
  {
    name: 'names',
    label: 'Full Name',
    type: SupportedFields.TEXT,
    placeholder: 'e.g. John Doe',
    description: 'Your full name as it appears on official documents.',
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'e.g. example@example.com',
    description: 'Your email address for account registration.',
    type: SupportedFields.EMAIL,
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    description: 'Your account password.',
    type: SupportedFields.PASSWORD,
  },
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    placeholder: 'Re-enter your password',
    description: 'Please confirm your password.',
    type: SupportedFields.PASSWORD,
  },
  {
    name: 'role',
    label: 'Role',
    placeholder: 'Select your role',
    description: 'Select the role you want to register as.',
    type: SupportedFields.TEXT,
  },
];
