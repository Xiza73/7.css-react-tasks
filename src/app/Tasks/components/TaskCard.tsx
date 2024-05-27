import { useNavigate } from 'react-router-dom';

import { ModuleRoute } from '@/routes/models/module.model';
import { Container } from '@/shared/components/Container';
import { useModal } from '@/shared/context/modal/ModalContext';
import { useFetchAndLoad } from '@/shared/hooks/useFetchAndLoad';

import { useTask } from '../context/task/TaskContext';
import { TaskStatus } from '../models/task-status.model';
import { deleteTask } from '../services/task.service';
import { DeleteModal } from './DeleteModal';

export interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  status: TaskStatus;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  description,
  createdAt,
  status,
}) => {
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();
  const { callEndpoint } = useFetchAndLoad();
  const { handleTasks } = useTask();

  const handleConfirmDelete = async () => {
    await callEndpoint(deleteTask(id));
    handleTasks();

    navigate('/tasks');

    closeModal();
  };

  const handleDelete = () => {
    openModal({
      component: <DeleteModal handleDelete={handleConfirmDelete} />,
    });
  };

  return (
    <Container
      showMaximize
      showClose
      onClose={handleDelete}
      maximizeClassName="edit"
      onMaximize={() => navigate(`${ModuleRoute.TASKS}/edit/${id}`)}
      title="Task"
      width="w-40"
      footer={
        <div className="status-bar">
          <p className="status-bar-field">{status}</p>
          <p className="status-bar-field">{createdAt}</p>
        </div>
      }
    >
      <p>
        <b>Title: </b>
        {title}
      </p>
      <p>
        <b>Description: </b>
        {description}
      </p>
    </Container>
  );
};
