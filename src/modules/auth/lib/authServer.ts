import type { User } from '@/modules/auth/types/user';
import { timeout } from '@/modules/core/lib/time';
import { Roles } from '@/modules/auth/lib/roles';

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User | undefined> {
  // Simulate a server request to log in the user
  await timeout(1000);
  console.log(email, ' ', password);
  const user = await getUser();
  return user;
}

export async function logout(): Promise<void> {
  // Simulate a server request to log out the user
  await timeout(1000);
}

export async function getUser(): Promise<User | undefined> {
  // Simulate a server request to get the user
  await timeout(1000);
  const user: User = {
    id: 1,
    name: 'Yenaro Noa Camino',
    email: 'ynoacamino@unsa.edu.pe',
    photo:
      'https://ynoa-uploader.ynoacamino.site/uploads/1750016704_ACg8ocLnHIiNMcd-ltRxMAQZ6Qo1hKAeSyZsktQKBp5kNltpKDzlg4_q=s96-c.webp',
    role: Roles.Student,
    mfaEnabled: false,
  };
  // If return undefined, the user will be considered as not logged in
  return user;
}
