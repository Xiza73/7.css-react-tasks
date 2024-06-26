import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Container } from '@/shared/components/Container';
import { useFetchAndLoad } from '@/shared/hooks/useFetchAndLoad';

import { CreateUpdateForm } from '../components/CreateUpdateForm';
import { TaskFormSchema } from '../models/create-update.model';
import { TaskStatus } from '../models/task-status.model';
import { createTask, updateTask } from '../services/task.service';

export const CreateUpdateTask: React.FC = () => {
  const { callEndpoint } = useFetchAndLoad();
  const navigate = useNavigate();
  const { id } = useParams();
  const constraintsRef = useRef(null);

  const onSubmit = async (data: TaskFormSchema) => {
    if (id)
      await callEndpoint(
        updateTask(
          id,
          data.title,
          data.description,
          data.status || TaskStatus.OPEN
        )
      );
    else await callEndpoint(createTask(data.title, data.description));

    navigate('/tasks');
  };

  return (
    <motion.div
      ref={constraintsRef}
      className="relative w-full h-full flex justify-center items-center"
    >
      <Container
        title={id ? 'Edit Task' : 'Create Task'}
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
