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
    <Container title={id ? 'Edit Task' : 'Create Task'}>
      <article
        role="tabpanel"
        className="!mb-0"
      >
        <CreateUpdateForm onSubmit={onSubmit} />
      </article>
    </Container>
  );
};
