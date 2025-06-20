import { SupportedFields } from '@/modules/core/lib/field';
import type { Field } from '@/modules/core/types/field';
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
  category: z.string().min(1, {
    message: 'Category is required',
  }),
  teacher: z.string().min(1, {
    message: 'Teacher is required',
  }),
  modules: z.number().min(1, {
    message: 'Modules is required',
  }),
});

export const courseFormFields: Field<
  keyof z.infer<typeof coursesFormSchema>
>[] = [
  {
    name: 'title',
    label: 'Title',
    placeholder: 'e.g. Intro to React',
    description: 'The title of the course.',
    type: SupportedFields.TEXT,
  },
  {
    name: 'description',
    label: 'Description',
    placeholder: 'e.g. This course covers the basics of React.',
    description: 'A short summary of what the course is about.',
    type: SupportedFields.TEXTAREA,
  },
  {
    name: 'image',
    label: 'Image URL',
    placeholder: 'https://...',
    description: 'Link to a preview image for this course.',
    type: SupportedFields.TEXT,
  },
  {
    name: 'category',
    label: 'Category',
    placeholder: 'e.g. Web Development',
    description: 'Course category or topic.',
    type: SupportedFields.SELECT,
    options: [
      { value: 'react', textValue: 'React', key: crypto.randomUUID() },
      {
        value: 'javascript',
        textValue: 'JavaScript',
        key: crypto.randomUUID(),
      },
      {
        value: 'web-development',
        textValue: 'Web Development',
        key: crypto.randomUUID(),
      },
      {
        value: 'data-science',
        textValue: 'Data Science',
        key: crypto.randomUUID(),
      },
      {
        value: 'machine-learning',
        textValue: 'Machine Learning',
        key: crypto.randomUUID(),
      },
    ],
  },
  {
    name: 'teacher',
    label: 'Teacher',
    placeholder: 'e.g. John Doe',
    description: 'Course instructor.',
    type: SupportedFields.SELECT,
    options: [
      {
        value: 'Luis Sequeiros',
        textValue: 'lsequeiros',
        key: crypto.randomUUID(),
      },
      {
        value: 'John Doe',
        textValue: 'johndoe',
        key: crypto.randomUUID(),
      },
      {
        value: 'Jane Smith',
        textValue: 'janesmith',
        key: crypto.randomUUID(),
      },
    ],
  },
  {
    name: 'modules',
    label: 'Modules',
    placeholder: 'e.g. 5',
    description: 'Number of modules in the course.',
    type: SupportedFields.NUMBER,
  },
];
