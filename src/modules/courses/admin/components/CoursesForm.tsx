import { Form, FormField } from '@/modules/core/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'astro:schema';
import { Button } from '@/modules/core/ui/button';
import {
  coursesFormSchema,
  courseFormFields,
} from '@/modules/courses/admin/lib/coursesForm';
import { InferItem } from '@/modules/core/ui/inferField';

function CoursesForm() {
  const form = useForm<z.infer<typeof coursesFormSchema>>({
    resolver: zodResolver(coursesFormSchema),
    defaultValues: {
      title: '',
      description: '',
      image: '',
      category: '',
      teacher: '',
      modules: NaN,
    },
  });

  const onSubmit = (values: z.infer<typeof coursesFormSchema>) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4"
      >
        {courseFormFields.map((field) => (
          <FormField
            key={`form-courses-${field.name}`}
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
              <InferItem {...field} {...formField} />
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
