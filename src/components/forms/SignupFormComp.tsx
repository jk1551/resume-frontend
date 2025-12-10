import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signupSchema } from '@/types/auth';
import { revalidateLogic, useForm } from '@tanstack/react-form';
import { FieldInfo } from './FieldInfo';

export const SignupFormComp: React.FC = () => {
  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationLogic: revalidateLogic(),
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
        name="username"
        validators={{
          onBlur: signupSchema.shape.username,
        }}
        children={(field) => (
          <div className="space-y-2">
            <label htmlFor={field.name}>Username</label>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="unemployedNomad"
            />
            <FieldInfo field={field} />
          </div>
        )}
      />

      <form.Field
        name="email"
        validators={{
          onBlur: signupSchema.shape.email,
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
              placeholder="needwork@example.com"
            />
            <FieldInfo field={field} />
          </div>
        )}
      />

      <form.Field
        name="password"
        validators={{
          onBlur: signupSchema.shape.password,
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
              placeholder="supersecurepassword"
            />
            <FieldInfo field={field} />
          </div>
        )}
      />

      <form.Field
        name="confirmPassword"
        validators={{
          onBlur: signupSchema.shape.confirmPassword,
        }}
        children={(field) => (
          <div className="space-y-2">
            <label htmlFor={field.name}>Confirm Password</label>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              type="password"
              placeholder="supersecurepassword"
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
        {form.state.isSubmitting ? 'Signing Up...' : 'Sign Up'}
      </Button>

      <form.Subscribe
        selector={(state) => state.values}
        children={(values) => (
          <p className="text-xs text-center text-gray-500 pt-2 break-words">
            Values: {JSON.stringify(values)}
          </p>
        )}
      />
    </form>
  );
};
