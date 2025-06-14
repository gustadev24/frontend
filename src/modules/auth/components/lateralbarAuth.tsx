import type { User } from '@/modules/core/types/user';
import { useStore } from '@nanostores/react';
import { $user } from '../lib/authStore';

function UnAuthenticated() {
  return (
    <div className="flex items-start gap-3 px-3">
      <button className="rounded-full aspect-square bg-zinc-300 w-9 hover:bg-zinc-400/50 transition-colors">
        <span className="sr-only">Login icon</span>
      </button>
      <div className="flex flex-col gap-1">
        <span className="font-medium">Guest</span>
        <span className="text-sm">Not logged in</span>
      </div>
    </div>
  );
}

function Authenticated({ user }: { user: User }) {
  return (
    <div className="flex items-start gap-3 px-3">
      <button className="rounded-full aspect-square bg-zinc-300 w-9">
        <span className="sr-only">Personal photo</span>
        <img
          className="w-full h-full object-cover rounded-full"
          src={user.photo}
          alt="User profile"
        />
      </button>
      <div className="flex flex-col gap-1">
        <span className="font-medium">{user.name}</span>
        <span className="text-sm">{user.role}</span>
      </div>
    </div>
  );
}

export default function LateralbarAuth() {
  const user = useStore($user);

  if (!user) {
    return <UnAuthenticated />;
  }

  return <Authenticated user={user} />;
}
