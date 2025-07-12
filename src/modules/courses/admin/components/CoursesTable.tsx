import { useCourses } from '@/modules/courses/lib/useCourses';
import { DataTable } from '@/modules/core/ui/data-table';
import { columns } from './columns-courses';
import { useMemo } from 'react';
import { Skeleton } from '@/modules/core/ui/skeleton';
import type { Course } from '@/modules/courses/types/courses';

function CoursesTable() {
  const { courses, isLoading } = useCourses();
  const data = useMemo<Course[]>(
    () =>
      isLoading || !courses
        ? Array.from({ length: 10 }, () => ({}) as Course)
        : courses,
    [isLoading, courses],
  );
  const tableColumns = useMemo(
    () =>
      isLoading
        ? columns.map((column) => ({
            ...column,
            cell: () => <Skeleton className="h-6" />,
          }))
        : columns,
    [isLoading, columns],
  );

  return <DataTable data={data} columns={tableColumns} />;
}

export { CoursesTable };
