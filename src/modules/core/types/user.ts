import { Roles } from '@/modules/core/lib/user';

export type Role = (typeof Roles)[keyof typeof Roles];

export interface User {
  id: number;
  name: string;
  email: string;
  photo: string;
  role: Role;
  mfaEnabled: boolean;
}
