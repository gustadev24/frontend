export enum Role {
  Teacher = 'teacher',
  Student = 'student',
}

export interface User {
  id: number;
  name: string;
  email: string;
  photo: string;
  role: Role;
  mfaEnabled: boolean;
}
