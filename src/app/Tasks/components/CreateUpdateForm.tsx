import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '@/shared/components/Form';
import { Input, Select, TextArea } from '@/shared/components/Input';

import { TaskFormSchema, taskFormSchema } from '../models/create-update.model';
import { TaskStatus } from '../models/task-status.model';
import { useGetTaskQuery } from '../services/queries/task.query';

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
  const { taskId } = useParams({ strict: false });
  const { data } = useGetTaskQuery({ id: taskId, enabled: !!taskId });
  const task = data?.responseObject;

  const handleNewTask = () => {
    setValue('title', '');
    setValue('description', '');
  };

  const getTask = async () => {
    setValue('status', TaskStatus.OPEN);

    if (!taskId || !task) return handleNewTask();

    // const res = await callEndpoint<ApiTask>(taskService.getTask(taskId));

    // if (!res.responseObject) return handleNewTask();

    // const task = taskAdapter(res.responseObject);

    setValue('title', task.title);
    setValue('description', task.description);
  };

  useEffect(() => {
    getTask();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Form
      onSubmit={handleSubmit(async (data) => await onSubmit(data))}
      errors={errors}
      buttonText={taskId ? 'Update' : 'Create'}
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
      {taskId && (
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
