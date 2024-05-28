import { motion } from 'framer-motion';
import { useRef } from 'react';

import { useTask } from '../../context/task/TaskContext';
import { TaskCard } from '../TaskCard';

export const ListTasksContent: React.FC = () => {
  const { tasks, total, handleShowMore } = useTask();
  const constraintsRef = useRef(null);

  return (
    <motion.div
      ref={constraintsRef}
      className="relative flex justify-around items-stretch flex-wrap gap-x-2 gap-y-6 overflow-y-auto pt-1 pb-3 has-scrollbar"
    >
      {tasks.map(({ id, title, description, status, createdAt }) => (
        <TaskCard
          key={id}
          id={id}
          title={title}
          description={description}
          status={status}
          createdAt={createdAt}
          constraintsRef={constraintsRef}
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
    </motion.div>
  );
};
