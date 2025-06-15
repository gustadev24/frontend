import { atom, onMount } from 'nanostores';
import { Role, type User } from '@/modules/core/types/user';

export const $user = atom<User | null>(null);

onMount($user, () => {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    $user.set(JSON.parse(storedUser));
  }
});

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
      'https://ynoa-uploader.ynoacamino.site/uploads/1750016704_ACg8ocLnHIiNMcd-ltRxMAQZ6Qo1hKAeSyZsktQKBp5kNltpKDzlg4_q=s96-c.webp',
    role: Role.Student,
    mfaEnabled: false,
  };

  console.log(password);

  $user.set(user);
}

export function logout() {
  $user.set(null);
}

export function isAuthenticated(): boolean {
  return !!$user.get();
}

export function getUser(): User | null {
  return $user.get();
}
