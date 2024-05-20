import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Container } from '@/shared/components/Container';
import { Form } from '@/shared/components/Form';
import { Input, TextArea } from '@/shared/components/Input';
import { useFetchAndLoad } from '@/shared/hooks/useFetchAndLoad';

import { createTask } from '../services/task.service';

const formSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
});
type TaskFormData = z.infer<typeof formSchema>;

export const CreateTask: React.FC = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(formSchema),
  });
  const { callEndpoint } = useFetchAndLoad();

  const onSubmit = async (data: TaskFormData) => {
    await callEndpoint(createTask(data.title, data.description));

    reset();
  };

  return (
    <Container title="Create new task">
      <article
        role="tabpanel"
        className="!mb-0"
      >
        <Form
          onSubmit={handleSubmit(async (data) => await onSubmit(data))}
          errors={errors}
          buttonText="Create"
        >
          <Input
            label="Title"
            name="title"
            type="text"
            hasBreakpoint
            register={register}
          />
          <TextArea
            label="Description"
            name="description"
            type="text"
            hasBreakpoint
            register={register}
          />
        </Form>
      </article>
    </Container>
  );
};
