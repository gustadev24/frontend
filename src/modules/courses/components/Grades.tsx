import type { Grade as GradeProps } from '@/modules/core/types/grades';
import { useGrades } from '@/modules/courses/lib/useGrades';

function GradeSkeleton() {
  return (
    <div className="grid grid-cols-2 border-t border-border px-4 py-6 animate-pulse">
      <span className="h-4 bg-gray-300 rounded w-3/4"></span>
      <span className="h-4 bg-gray-300 rounded w-1/4"></span>
    </div>
  );
}

function Grade({ grade, course }: GradeProps) {
  return (
    <div className="grid grid-cols-2 border-t border-border px-4 py-6">
      <span className="">{course}</span>
      <span className="text-foreground/70">{grade}</span>
    </div>
  );
}

export default function Grades() {
  const { grades, isLoading } = useGrades();

  if (isLoading || !grades) {
    return (
      <div className="flex flex-col border-border border rounded-xl text-sm">
        <div className="grid grid-cols-2 px-4 py-4 font-medium">
          <span>Course</span>
          <span>Grade</span>
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <GradeSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col border-border border rounded-xl text-sm">
      <div className="grid grid-cols-2 px-4 py-4 font-medium">
        <span>Course</span>
        <span>Grade</span>
      </div>
      {grades.map((g, index) => (
        <Grade key={index} course={g.course} grade={g.grade} />
      ))}
    </div>
  );
}
