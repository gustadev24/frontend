import { z } from 'zod';

export const coursesFormSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters long',
  }),
  description: z
    .string()
    .min(10, {
      message: 'Description must be at least 10 characters long',
    })
    .max(500, {
      message: 'Description must be at most 500 characters long',
    }),
  image: z.string().url({
    message: 'Image must be a valid URL',
  }),
  category: z.string(),
  teacher: z.string(),
  modules: z.string(),
});

export const courseFormFields: {
  name: keyof z.infer<typeof coursesFormSchema>;
  label: string;
  placeholder: string;
  description: string;
  type?: string;
}[] = [
  {
    name: 'title',
    label: 'Title',
    placeholder: 'e.g. Intro to React',
    description: 'The title of the course.',
  },
  {
    name: 'description',
    label: 'Description',
    placeholder: 'e.g. This course covers the basics of React.',
    description: 'A short summary of what the course is about.',
  },
  {
    name: 'image',
    label: 'Image URL',
    placeholder: 'https://...',
    description: 'Link to a preview image for this course.',
  },
  {
    name: 'category',
    label: 'Category',
    placeholder: 'e.g. Web Development',
    description: 'Course category or topic.',
  },
  {
    name: 'teacher',
    label: 'Teacher',
    placeholder: 'e.g. John Doe',
    description: 'Name of the course instructor.',
  },
  {
    name: 'modules',
    label: 'Modules',
    placeholder: 'e.g. 5',
    description: 'Number of modules in the course.',
  },
];
