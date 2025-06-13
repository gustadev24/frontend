export enum CourseStatus {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
}

export interface CourseProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  status: CourseStatus;
  date: Date;
}
