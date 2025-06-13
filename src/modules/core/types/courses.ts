import { CoursesStates } from '../lib/courses';

export type CourseStatus = (typeof CoursesStates)[keyof typeof CoursesStates];

export interface CourseProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  status: CourseStatus;
  date: Date;
}
