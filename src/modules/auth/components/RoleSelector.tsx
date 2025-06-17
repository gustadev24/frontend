import { Roles } from '@/modules/core/lib/user';
import type { Role } from '@/modules/core/types/user';
import { Button } from '@/modules/core/ui/button';
import { useState } from 'react';

interface RoleSelectorProps {
  defaultValue: Role;
  onChange: (value: string) => void;
}

export default function RoleSelector({
  defaultValue,
  onChange,
}: RoleSelectorProps) {
  const [selectedRole, setSelectedRole] = useState<Role>(defaultValue);
  const inferVariant = (role: Role) =>
    selectedRole === role ? 'selected' : 'outline';
  const handleSelection = (role: Role) => {
    if (role === selectedRole) return;
    setSelectedRole(role);
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
