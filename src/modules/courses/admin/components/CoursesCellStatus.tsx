import { cn } from '@/modules/core/lib/utils';
import { CourseStatus } from '@/modules/courses/types/courses';

interface CoursesCellStatusProps {
  status: CourseStatus;
}

function CoursesCellStatus({ status }: CoursesCellStatusProps) {
  return (
    <div
      className={cn(
        'rounded-l-full rounded-r-full inline-flex w-full justify-center font-medium py-1',
        {
          'bg-red-300/80': status === CourseStatus.INACTIVE,
          'bg-green-300/80': status === CourseStatus.ACTIVE,
        },
      )}
    >
      {status}
    </div>
  );
}

export { CoursesCellStatus };
