import { useNavigate } from 'react-router-dom';

import { ModuleRoute } from '@/routes/models/module.model';
import { Container } from '@/shared/components/Container';

import { TaskStatus } from '../models/task-status.model';

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

  return (
    <Container
      showControls
      showMaximize
      showClose
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
