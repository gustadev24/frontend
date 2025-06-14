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
    <div className="flex items-center justify-start">
      {courses.map((course) => (
        <button className="px-4 rounded-full bg-secondary">
          {course.title}
        </button>
      ))}
    </div>
  );
}

export default function CourseOverview() {
  return (
    <div className="flex flex-col gap-10">
      <CourseFilter />
      <div className="grid grid-cols-3 gap-4">
        <div className="border-border border rounded-md p-6">
          <span>Total Students</span>
          <span>150</span>
        </div>
        <div className="border-border border rounded-md p-6">
          <span>Average Completion Rate</span>
        </div>
        <div className="border-border border rounded-md p-6">
          <span>Pending Modules</span>
        </div>
      </div>
    </div>
  );
}
