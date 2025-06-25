import { Roles } from '@/modules/auth/lib/roles';
import type { Role } from '@/modules/auth/types/role';
import { Button } from '@/modules/core/ui/button';
import { memo } from 'react';

interface RoleSelectorProps {
  value: Role;
  onChange: (value: string) => void;
}

function RoleSelector({ value, onChange }: RoleSelectorProps) {
  const inferVariant = (role: Role) =>
    value === role ? 'selected' : 'outline';
  const handleSelection = (role: Role) => {
    if (role === value) return;
    onChange(role);
  };
  return (
    <div className="flex gap-2">
      <Button
        variant={inferVariant(Roles.Student)}
        onClick={() => handleSelection(Roles.Student)}
        type="button"
        className="flex-1"
      >
        Student
      </Button>
      <Button
        variant={inferVariant(Roles.Teacher)}
        onClick={() => handleSelection(Roles.Teacher)}
        type="button"
        className="flex-1"
      >
        Teacher
      </Button>
    </div>
  );
}

export default memo(RoleSelector);
