import { useNavigate, useParams } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { useRef } from 'react';

import { Container } from '@/shared/components/Container';

import { CreateUpdateForm } from '../components/CreateUpdateForm';
import { TaskFormSchema } from '../models/create-update.model';
import { TaskStatus } from '../models/task-status.model';
import {
  useCreateTaskMutation,
  useUpdateTaskMutation,
} from '../services/queries/task.query';

export const CreateUpdateTask: React.FC = () => {
  const navigate = useNavigate();
  const { taskId } = useParams({ strict: false });
  const constraintsRef = useRef(null);
  const { mutateAsync: updateTask } = useUpdateTaskMutation({});
  const { mutateAsync: createTask } = useCreateTaskMutation({});

  const onSubmit = async (data: TaskFormSchema) => {
    if (taskId)
      await updateTask({
        id: taskId,
        title: data.title,
        description: data.description,
        status: data.status || TaskStatus.OPEN,
      });
    else await createTask(data);

    navigate({ to: '/task' });
  };

  return (
    <motion.div
      ref={constraintsRef}
      className="relative w-full h-full flex justify-center items-center"
    >
      <Container
        title={taskId ? 'Edit Task' : 'Create Task'}
        constraintsRef={constraintsRef}
      >
        <article
          role="tabpanel"
          className="!mb-0"
        >
          <CreateUpdateForm onSubmit={onSubmit} />
        </article>
      </Container>
    </motion.div>
  );
};
