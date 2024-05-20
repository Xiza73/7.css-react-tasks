import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form } from '@/shared/components/Form';
import { Input } from '@/shared/components/Input';
import { useAuth } from '@/store';

const formSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z.string().min(1, 'Password is required'),
});

type UserPassFormData = z.infer<typeof formSchema>;

export const PasswordLogin: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserPassFormData>({
    resolver: zodResolver(formSchema),
  });
  const { login } = useAuth();

  const onSubmit = async (data: { email: string; password: string }) => {
    login(data.email, data.password);
  };

  return (
    <Form
      onSubmit={handleSubmit(async (data) => await onSubmit(data))}
      errors={errors}
      buttonText="Login"
    >
      <Input
        label="Email"
        name="email"
        type="text"
        register={register}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        register={register}
      />
    </Form>
  );
};
