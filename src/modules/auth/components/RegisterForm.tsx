import { Button } from '@/modules/core/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/modules/core/ui/form';
import { Input } from '@/modules/core/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  registerFormSchema,
  registerFormFields,
} from '@/modules/auth/lib/registerForm';
import { Roles } from '@/modules/core/lib/user';
import RoleSelector from './RoleSelector';
import type { Role } from '@/modules/core/types/user';

function RegisterForm() {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      names: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: Roles.Student, // Default to the first role
    },
  });
  const onSubmit = (values: z.infer<typeof registerFormSchema>) => {
    // Handle form submission logic here
    console.log('Form submitted with values:', values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4 w-full px-4 sm:px-6 md:px-8 max-w-3xl pb-20"
      >
        {registerFormFields.map((field) => (
          <FormField
            key={`form-register-${field.name}`}
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  {field.name === 'role' ? (
                    <RoleSelector
                      onChange={formField.onChange}
                      defaultValue={formField.value as Role}
                    />
                  ) : (
                    <Input
                      placeholder={field.placeholder}
                      {...formField}
                      onChange={
                        field.type === 'number'
                          ? (e) => formField.onChange(Number(e.target.value))
                          : formField.onChange
                      }
                      type={field.type}
                      className="input"
                    />
                  )}
                </FormControl>
                <FormDescription>{field.description}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" className="self-center">
          Register
        </Button>
      </form>
    </Form>
  );
}

export { RegisterForm };
