import { atom } from 'nanostores';
import { Role, type User } from '@/modules/core/types/user';

export const $user = atom<User | null>(null);

export function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user: User = {
    id: 1,
    name: 'Yenaro Noa Camino',
    email,
    photo:
      'https://ynoa-uploader.ynoacamino.site/uploads/1749829759_204490916.png',
    role: Role.Student,
    mfaEnabled: false,
  };

  console.log(password);

  $user.set(user);
}

export function logout() {
  // Simulate a logout process
  $user.set(null);
}

export function isAuthenticated(): boolean {
  return !!$user.get();
}

export function getUser(): User | null {
  return $user.get();
}
