import type { CourseModuleType as ModuleType } from '@/modules/courses/types/courses';

interface CourseModuleTypeProps {
  type: ModuleType;
}

function CourseModuleType({ type }: CourseModuleTypeProps) {
  return (
    <div className="rounded-l-full rounded-r-full inline-flex w-full justify-center font-medium py-1 bg-gray-300/80">
      {type}
    </div>
  );
}

export { CourseModuleType };
