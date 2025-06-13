import { CoursesStates } from '@/modules/core/lib/courses';
import { cn } from '@/modules/core/lib/utils';
import type { CourseStatus } from '@/modules/core/types/courses';

interface CoursesCellStatusProps {
  status: CourseStatus;
}

function CoursesCellStatus({ status }: CoursesCellStatusProps) {
  return (
    <div
      className={cn(
        'rounded-l-full rounded-r-full inline-flex w-full justify-center font-medium py-1',
        {
          'bg-red-300/80': status === CoursesStates.INACTIVE,
          'bg-green-300/80': status === CoursesStates.ACTIVE,
        },
      )}
    >
      {status}
    </div>
  );
}

export { CoursesCellStatus };
