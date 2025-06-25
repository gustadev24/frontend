import { Button } from '@/modules/core/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { loginFormSchema, loginFormFields } from '@/modules/auth/lib/loginForm';
import { InferItem } from '@/modules/core/ui/inferField';
import { Form, FormField } from '@/modules/core/ui/form';
import { actions } from 'astro:actions';
import { navigate } from 'astro:transitions/client';

function LoginForm() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    const { data: user, error } = await actions.user.login(values);
    if (error) {
      form.setError('root', { message: error.message });
      return;
    }
    if (user) {
      navigate('/dashboard');
    }
  };

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
              <InferItem {...field} {...formField} />
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
