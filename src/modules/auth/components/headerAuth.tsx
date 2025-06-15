import { useStore } from '@nanostores/react';
import { $user, logout } from '../lib/authStore';
import type { User } from '@/modules/core/types/user';
import { useEffect } from 'react';
import { ChevronDown, LogOut } from 'lucide-react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/modules/core/ui/popover';

import { Button } from '@/modules/core/ui/button';

function UnAuthenticated() {
  useEffect(() => {
    window.location.href = '/auth/login';
  }, []);

  return null;
}

function Authenticated({ user }: { user: User }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex gap-3 items-center hover:cursor-pointer">
          <img
            alt="name"
            src={user.photo}
            className="rounded-full w-9 aspect-square"
          />
          <ChevronDown className="w-5 h-5" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <div className="flex flex-col gap-3 items-center pt-5">
          <img
            alt="name"
            src={user.photo}
            className="rounded-full aspect-square bg-secondary w-20"
          />
          <span className="text-lg font-medium text-center">
            {user.name} ({user.email})
          </span>
          <div className="flex flex-col items-center justify-start w-full gap-1 text-secondary">
            <Button
              variant="ghost"
              className="text-base w-full flex"
              onClick={logout}
            >
              <LogOut />
              <span className="flex-1 w-full">Cerrar Sesion</span>
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default function HeaderAuth() {
  const user = useStore($user);

  if (!user) {
    console.log('null');

    return <UnAuthenticated />;
  }

  return <Authenticated user={user} />;
}
