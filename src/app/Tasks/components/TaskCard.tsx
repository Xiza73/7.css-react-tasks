import { useNavigate } from '@tanstack/react-router';

import { Container } from '@/shared/components/Container';
import { useModal } from '@/shared/context/modal/ModalContext';

import { useTask } from '../context/task/TaskContext';
import { TaskStatus } from '../models/task-status.model';
import { useDeleteTaskMutation } from '../services/queries/task.query';
import { DeleteModal } from './DeleteModal';

export interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  status: TaskStatus;
  constraintsRef: React.MutableRefObject<null>;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  description,
  createdAt,
  constraintsRef,
  status,
}) => {
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();
  const { handleTasks } = useTask();
  const { mutateAsync: deleteTask } = useDeleteTaskMutation({});

  const handleConfirmDelete = async () => {
    // await callEndpoint(deleteTask(id));
    await deleteTask(id);
    handleTasks();

    navigate({ to: '/task' });

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
      onMaximize={() => navigate({ to: `/task/${id}/edit` })}
      title="Task"
      width="w-40"
      constraintsRef={constraintsRef}
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
