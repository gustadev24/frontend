import type { CourseProps } from '@/modules/core/types/courses';
import useSWR from 'swr';
// import { getMyCourses } from '@/modules/core/lib/api';

const getMyCourses = async (): Promise<CourseProps[]> => {
  const COURSES: CourseProps[] = [
    {
      title: 'Curso de React',
      description: 'Aprende React desde cero con este curso completo.',
      link: '/courses/react',
      imageUrl:
        'https://ynoa-uploader.ynoacamino.site/uploads/1749595995_Depth%206%2C%20Frame%201.png',
    },
    {
      title: 'Curso de Next.js',
      description: 'Domina Next.js y crea aplicaciones web modernas.',
      link: '/courses/nextjs',
      imageUrl:
        'https://ynoa-uploader.ynoacamino.site/uploads/1749595995_Depth%206%2C%20Frame%201.png',
    },
    {
      title: 'Curso de TypeScript',
      description: 'Aprende TypeScript y mejora tu código JavaScript.',
      link: '/courses/typescript',
      imageUrl:
        'https://ynoa-uploader.ynoacamino.site/uploads/1749595995_Depth%206%2C%20Frame%201.png',
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(COURSES);
    }, 1000);
  });
};

export const useCourses = () => {
  // const { data, isLoading, mutate } = useSWR('courses', getMyCourses);
  const { data, isLoading, mutate } = useSWR('courses', getMyCourses);

  return {
    courses: data,
    isLoading,
    mutate,
  };
};
