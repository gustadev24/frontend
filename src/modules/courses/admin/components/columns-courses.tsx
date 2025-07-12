import type { Course, CourseStatus } from '@/modules/courses/types/courses';
import type { ColumnDef } from '@tanstack/react-table';
import { CoursesCellStatus } from './CoursesCellStatus';
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

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
    meta: {
      className: 'w-2/8',
    },
  },
  {
    accessorKey: 'description',
    header: 'Description',
    meta: {
      className: 'w-4/8',
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue<CourseStatus>('status');
      return <CoursesCellStatus status={status} />;
    },
    meta: {
      className: 'w-1/8',
    },
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => {
      const date = new Date(row.getValue<Date>('date'));
      return date.toLocaleDateString().replaceAll('/', '-');
    },
    meta: {
      className: 'w-1/8',
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const course = row.original;
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
                href={`/teacher/courses/${course.id}`}
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
