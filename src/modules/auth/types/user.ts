import type { Role } from '@/modules/auth/types/role';

export interface User {
  id: number;
  name: string;
  email: string;
  photo: string;
  role: Role;
  mfaEnabled: boolean;
}

export type UserRequired = {
  user: User;
};
