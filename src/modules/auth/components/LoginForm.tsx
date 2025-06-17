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
import { loginFormSchema, loginFormFields } from '@/modules/auth/lib/loginForm';
import { useStore } from '@nanostores/react';
import { $user, login } from '../lib/authStore';
import { useEffect } from 'react';

function LoginForm() {
  const user = useStore($user);

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    login({
      email: values.email,
      password: values.password,
    });
  };

  useEffect(() => {
    if (user) {
      window.location.href = '/';
    }
  }, [user]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4 w-full px-4 sm:px-6 md:px-8 max-w-3xl pb-20"
      >
        {loginFormFields.map((field) => (
          <FormField
            key={`form-login-${field.name}`}
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={field.placeholder}
                    {...formField}
                    onChange={
                      field.type === 'number'
                        ? (e) => formField.onChange(Number(e.target.value))
                        : formField.onChange
                    }
                    type={field.type}
                  />
                </FormControl>
                <FormDescription>{field.description}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" className="self-center">
          Login
        </Button>
      </form>
    </Form>
  );
}

export { LoginForm };
