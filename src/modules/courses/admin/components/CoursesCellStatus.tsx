import { cn } from '@/modules/core/lib/utils';
import type { CourseStatus } from '@/modules/courses/types/courses';
import { CourseStates } from '@/modules/courses/lib/courses';

interface CoursesCellStatusProps {
  status: CourseStatus;
}

function CoursesCellStatus({ status }: CoursesCellStatusProps) {
  return (
    <div
      className={cn(
        'rounded-l-full rounded-r-full inline-flex w-full justify-center font-medium py-1',
        {
          'bg-red-300/80': status === CourseStates.INACTIVE,
          'bg-green-300/80': status === CourseStates.ACTIVE,
        },
      )}
    >
      {status}
    </div>
  );
}

export { CoursesCellStatus };
