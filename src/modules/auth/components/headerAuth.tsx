import { useStore } from '@nanostores/react';
import { $user } from '../authStore';
import type { User } from '@/modules/core/types/user';

function UnAuthenticated() {
  return (
    <button className="rounded-full bg-zinc-300 hover:bg-zinc-400/50 transition-colors w-9 aspect-square">
      <span className="sr-only">login icon</span>
    </button>
  );
}

function Authenticated({ user }: { user: User }) {
  return (
    <button className="rounded-full bg-zinc-300 hover:bg-zinc-400/50 transition-colors w-9 aspect-square">
      <img
        className="w-full h-full object-cover rounded-full"
        src={user.photo}
        alt="User profile"
      />
      <span className="sr-only">profile icon</span>
    </button>
  );
}

export default function HeaderAuth() {
  const user = useStore($user);

  if (!user) {
    return <UnAuthenticated />;
  }

  return <Authenticated user={user} />;
}
