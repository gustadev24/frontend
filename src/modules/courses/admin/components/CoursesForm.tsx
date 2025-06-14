import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/modules/core/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'astro:schema';
import { Input } from '@/modules/core/ui/input';
import { Button } from '@/modules/core/ui/button';

const formSchema = z.object({
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

const fields: {
  name: keyof z.infer<typeof formSchema>;
  label: string;
  placeholder: string;
  description: string;
  type?: string;
}[] = [
  {
    name: 'title',
    label: 'Title',
    placeholder: 'e.g. Intro to React',
    description: 'The title of the course, e.g., "Intro to React".',
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

function CoursesForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      image: '',
      category: '',
      teacher: '',
      modules: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4"
      >
        {fields.map((field) => (
          <FormField
            key={`form-courses-${field.name}`}
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={field.placeholder}
                    {...formField}
                    type={field.type || 'text'}
                  />
                </FormControl>
                <FormDescription>{field.description}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" className="self-center">
          Save course
        </Button>
      </form>
    </Form>
  );
}

export { CoursesForm };
