const getMyCourses = async () => {
  const response = await fetch('/api/courses/my');
  if (!response.ok) {
    throw new Error('Failed to fetch courses');
  }
  return response.json();
};

const getMyGrades = async () => {
  const response = await fetch('/api/grades/my');
  if (!response.ok) {
    throw new Error('Failed to fetch grades');
  }
  return response.json();
};

export { getMyCourses, getMyGrades };
