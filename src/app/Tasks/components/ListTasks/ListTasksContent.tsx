import { useTask } from '../../context/task/TaskContext';
import { TaskCard } from '../TaskCard';

export const ListTasksContent: React.FC = () => {
  const { tasks, total, handleShowMore } = useTask();

  return (
    <div className="flex justify-around items-stretch flex-wrap gap-x-2 gap-y-6 overflow-y-auto pt-1 pb-3 has-scrollbar">
      {tasks.map(({ id, title, description, status, createdAt }) => (
        <TaskCard
          key={id}
          id={id}
          title={title}
          description={description}
          status={status}
          createdAt={createdAt}
        />
      ))}
      {!tasks.length && (
        <div className="w-full flex justify-center items-center">
          <p>No tasks found</p>
        </div>
      )}
      {tasks.length < total && (
        <div className="w-full flex justify-center items-center">
          <button
            aria-label="show more"
            onClick={handleShowMore}
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
};
