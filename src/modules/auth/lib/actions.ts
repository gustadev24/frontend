import { ActionError, defineAction } from 'astro:actions';
import { z } from 'zod';
import { getUser, login, logout } from '@/modules/auth/lib/authServer';

export const user = {
  getUser: defineAction({ handler: () => getUser() }),
  login: defineAction({
    input: z.object({
      email: z.string().email(),
      password: z.string().min(8),
    }),
    handler: async ({ email, password }) => {
      const user = await login({ email, password });
      if (!user) {
        throw new ActionError({
          code: 'UNAUTHORIZED',
          message: 'Invalid email or password',
        });
      }
      return user;
    },
  }),
  logout: defineAction({ handler: () => logout() }),
};
