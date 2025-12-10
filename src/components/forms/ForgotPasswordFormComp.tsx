import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { forgotPasswordSchema } from '@/types/auth';
import { revalidateLogic, useForm } from '@tanstack/react-form';
import { FieldInfo } from './FieldInfo';

export const ForgotPasswordFormComp: React.FC = () => {
  const form = useForm({
    defaultValues: {
      email: '',
    },
    validationLogic: revalidateLogic(),
    onSubmit: async ({ value }) => {
      console.log('Forgot Password:', value);
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
          onChange: forgotPasswordSchema.shape.email,
        }}
        children={(field) => (
          <div className="space-y-2">
            <label htmlFor={field.name}>Email Address</label>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              type="email"
              placeholder="you@example.com"
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
        {form.state.isSubmitting ? 'Sending Link...' : 'Send Reset Link'}
      </Button>
    </form>
  );
};
