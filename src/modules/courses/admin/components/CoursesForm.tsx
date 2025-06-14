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
import {
  coursesFormSchema,
  courseFormFields,
} from '@/modules/courses/admin/lib/coursesForm';

function CoursesForm() {
  const form = useForm<z.infer<typeof coursesFormSchema>>({
    resolver: zodResolver(coursesFormSchema),
    defaultValues: {
      title: '',
      description: '',
      image: '',
      category: '',
      teacher: '',
      modules: '',
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
