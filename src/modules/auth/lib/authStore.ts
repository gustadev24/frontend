import { atom } from 'nanostores';
import { type User } from '@/modules/auth/types/user';
import { shared } from '@it-astro:request-nanostores';

export const $user = shared('user', atom<User | undefined>());
