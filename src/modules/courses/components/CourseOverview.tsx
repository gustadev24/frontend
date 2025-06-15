import { useCourses } from '../hooks/useCourses';

function TagSkeleton() {
  return <div className="w-24 h-6 bg-gray-200 animate-pulse rounded-full" />;
}

function CourseFilter() {
  const { courses, isLoading } = useCourses();

  if (isLoading || !courses) {
    return (
      <div className="flex items-center justify-start">
        <TagSkeleton />
        <TagSkeleton />
        <TagSkeleton />
        <TagSkeleton />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-start gap-3">
      {courses.map((course) => (
        <button className="px-4 rounded-full bg-secondary py-2 text-sm">
          {course.title}
        </button>
      ))}
    </div>
  );
}

function InfoCardSkeleton() {
  return (
    <div className="border border-gray-300 rounded-xl p-6 flex flex-col gap-4 animate-pulse">
      <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
      <div className="w-1/2 h-10 bg-gray-200 rounded"></div>
    </div>
  );
}

function InfoCards() {
  const { isLoading, courses } = useCourses();

  if (isLoading || !courses) {
    return (
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <InfoCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="border-border border rounded-xl p-6 flex flex-col gap-2"
        >
          <span className="font-semibold">Total Students</span>
          <span className="text-2xl font-bold">150</span>
        </div>
      ))}
    </div>
  );
}

export default function CourseOverview() {
  return (
    <div className="flex flex-col gap-8">
      <CourseFilter />
      <InfoCards />
    </div>
  );
}
