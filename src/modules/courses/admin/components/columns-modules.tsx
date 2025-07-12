import type { ColumnDef } from '@tanstack/react-table';
import type {
  CourseModule,
  CourseModuleType as ModuleType,
} from '@/modules/courses/types/courses';
import { CourseModuleType } from '@/modules/courses/admin/components/CourseModuleType';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/modules/core/ui/dropdown-menu';
import { Button } from '@/modules/core/ui/button';
import { MoreHorizontal } from 'lucide-react';
import { Link } from '@/modules/core/ui/link';

export const columns: ColumnDef<CourseModule>[] = [
  {
    accessorKey: 'title',
    header: 'Module Name',
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row }) => {
      const type = row.getValue<ModuleType>('type');
      return <CourseModuleType type={type} />;
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const module = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem asChild>
              <Link
                variant="ghost"
                href={`/teacher/courses/${module.idCourse}/modules/${module.id}`}
                className="justify-start"
              >
                View
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
