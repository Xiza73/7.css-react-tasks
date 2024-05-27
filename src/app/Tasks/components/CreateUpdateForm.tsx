import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { Form } from '@/shared/components/Form';
import { Input, Select, TextArea } from '@/shared/components/Input';
import { useFetchAndLoad } from '@/shared/hooks/useFetchAndLoad';

import { taskAdapter } from '../adapters/task.adapter';
import { TaskFormSchema, taskFormSchema } from '../models/create-update.model';
import { ApiTask } from '../models/task.model';
import { TaskStatus } from '../models/task-status.model';
import * as taskService from '../services/task.service';

export interface CreateUpdateFormProps {
  onSubmit: (data: TaskFormSchema) => Promise<void>;
}

export const CreateUpdateForm: React.FC<CreateUpdateFormProps> = ({
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TaskFormSchema>({
    resolver: zodResolver(taskFormSchema),
  });
  const { callEndpoint } = useFetchAndLoad();
  const { id } = useParams();

  const handleNewTask = () => {
    setValue('title', '');
    setValue('description', '');
  };

  const getTask = async () => {
    setValue('status', TaskStatus.OPEN);

    if (!id) return handleNewTask();

    const res = await callEndpoint<ApiTask>(taskService.getTask(id));

    if (!res.responseObject) return handleNewTask();

    const task = taskAdapter(res.responseObject);

    setValue('title', task.title);
    setValue('description', task.description);
  };

  useEffect(() => {
    getTask();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Form
      onSubmit={handleSubmit(async (data) => await onSubmit(data))}
      errors={errors}
      buttonText={id ? 'Update' : 'Create'}
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
      {id && (
        <Select
          label="Status"
          name="status"
          hasBreakpoint
          options={Object.values(TaskStatus)}
          type="text"
          register={register}
        />
      )}
    </Form>
  );
};
