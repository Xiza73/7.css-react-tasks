import { useEffect } from 'react';

import { ListTasksContent } from '../components/ListTasks/ListTasksContent';
import { ListTasksHeader } from '../components/ListTasks/ListTasksHeader';
import { useTask } from '../context/task/TaskContext';

export const ListTasks: React.FC = () => {
  const { handleTasks } = useTask();

  useEffect(() => {
    handleTasks();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="flex flex-col w-full h-[calc(100vh-89px)] pt-2 px-2">
      <ListTasksHeader />
      <ListTasksContent />
    </section>
  );
};
