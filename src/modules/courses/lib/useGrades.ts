import type { Grade as GradeProps } from '@/modules/core/types/grades';
import useSWR from 'swr';
// import { getMyGrades } from '@/modules/core/lib/api';

const getMyGrades = async (): Promise<GradeProps[]> => {
  const GRADES: GradeProps[] = [
    { course: 'Math 101', grade: 'A' },
    { course: 'History 201', grade: 'B+' },
    { course: 'Science 301', grade: 'A-' },
    { course: 'Literature 401', grade: 'B' },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(GRADES);
    }, 1000);
  });
};

export const useGrades = () => {
  // const { data, isLoading, mutate } = useSWR('grades', getMyGrades);
  const { data, isLoading, mutate } = useSWR('grades', getMyGrades);

  return {
    grades: data,
    isLoading,
    mutate,
  };
};
