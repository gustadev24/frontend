import {
  TableBody,
  TableRow,
  TableCell,
  Table,
  TableHeader,
  TableHead,
} from '@/modules/core/ui/table';
import { useCourses } from '@/modules/courses/hooks/useCourses';
import { CoursesCellStatus } from '@/modules/courses/admin/components/CoursesCellStatus';

function CoursesTableBodySkeleton() {
  return Array.from({ length: 3 }).map((_, i) => (
    <TableRow key={`skeleton-table-row-courses-${i}`} className="h-8">
      {Array.from({ length: 4 }).map((_, j) => (
        <TableCell key={`skeleton-table-cell-courses-${i}-${j}`}>
          <div className="rounded-md p-1 bg-gray-300 h-6"></div>
        </TableCell>
      ))}
    </TableRow>
  ));
}

function CoursesTable() {
  const { courses, isLoading } = useCourses();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-2/8">Title</TableHead>
          <TableHead className="w-4/8">Description</TableHead>
          <TableHead className="w-1/8">Status</TableHead>
          <TableHead className="w-1/8">Date</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {isLoading || !courses ? (
          <CoursesTableBodySkeleton />
        ) : (
          courses.map((course) => (
            <TableRow key={course.title}>
              <TableCell>{course.title}</TableCell>
              <TableCell>{course.description}</TableCell>
              <TableCell>
                <CoursesCellStatus status={course.status} />
              </TableCell>
              <TableCell>
                {course.date.toLocaleDateString().replaceAll('/', '-')}
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}

export { CoursesTable };
