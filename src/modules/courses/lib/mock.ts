import type { Course } from '@/modules/courses/types/courses';
import { CourseStates } from '@/modules/courses/lib/courses';

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Curso de React',
    description: 'Aprende React desde cero con este curso completo.',
    imageUrl:
      'https://ynoa-uploader.ynoacamino.site/uploads/1749595995_Depth%206%2C%20Frame%201.png',
    status: CourseStates.ACTIVE,
    date: new Date('2023-10-01'),
    modules: [
      {
        id: '1-1',
        idCourse: '1',
        title: 'Introducción a React',
        description: 'Conceptos básicos de React y su ecosistema.',
        type: 'video',
      },
      {
        id: '1-2',
        idCourse: '1',
        title: 'Componentes y Props',
        description: 'Cómo crear componentes y pasar props en React.',
        type: 'video',
      },
    ],
  },
  {
    id: '2',
    title: 'Curso de Next.js',
    description: 'Domina Next.js y crea aplicaciones web modernas.',
    imageUrl:
      'https://ynoa-uploader.ynoacamino.site/uploads/1749595995_Depth%206%2C%20Frame%201.png',
    status: CourseStates.INACTIVE,
    date: new Date('2023-10-15'),
    modules: [
      {
        id: '2-1',
        idCourse: '2',
        title: 'Introducción a Next.js',
        description: 'Aprende los fundamentos de Next.js.',
        type: 'video',
      },
      {
        id: '2-2',
        idCourse: '2',
        title: 'Rutas y Navegación',
        description: 'Cómo manejar rutas y navegación en Next.js.',
        type: 'video',
      },
    ],
  },
  {
    id: '3',
    title: 'Curso de TypeScript',
    description: 'Aprende TypeScript y mejora tu código JavaScript.',
    imageUrl:
      'https://ynoa-uploader.ynoacamino.site/uploads/1749595995_Depth%206%2C%20Frame%201.png',
    status: CourseStates.ACTIVE,
    date: new Date('2023-11-01'),
    modules: [
      {
        id: '3-1',
        idCourse: '3',
        title: 'Introducción a TypeScript',
        description: 'Conceptos básicos de TypeScript y su configuración.',
        type: 'video',
      },
      {
        id: '3-2',
        idCourse: '3',
        title: 'Tipos y Interfaces',
        description: 'Cómo usar tipos e interfaces en TypeScript.',
        type: 'video',
      },
    ],
  },
];
