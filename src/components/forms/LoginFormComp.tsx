import { loginSchema } from '@/types/auth';
import { revalidateLogic, useForm } from '@tanstack/react-form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { FieldInfo } from './FieldInfo';

export const LoginFormComp: React.FC = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validationLogic: revalidateLogic(),
    validators: {
      onDynamic: loginSchema
    },
    onSubmit: async ({ value }) => {
      console.log('Signup Attempt:', value);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="space-y-6"
    >
      <form.Field
        name="email"
        validators={{
          onBlur: loginSchema.shape.email,
        }}
        children={(field) => (
          <div className="space-y-2">
            <label htmlFor={field.name}>Email</label>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              type="email"
              placeholder="unemployed@example.com"
            />
            <FieldInfo field={field} />
          </div>
        )}
      />

      <form.Field
        name="password"
        validators={{
          onBlur: loginSchema.shape.password,
        }}
        children={(field) => (
          <div className="space-y-2">
            <label htmlFor={field.name}>Password</label>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              type="password"
              placeholder="supersecretpassword"
            />
            <FieldInfo field={field} />
          </div>
        )}
      />

      <Button
        type="submit"
        className="w-full"
        disabled={form.state.isSubmitting || !form.state.isValid}
      >
        {form.state.isSubmitting ? 'Logging In...' : 'Log In'}
      </Button>
    </form>
  );
};
