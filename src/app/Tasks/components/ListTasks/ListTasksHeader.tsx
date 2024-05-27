import { SearchBox } from '@/shared/components/SearchBox';

import { useTask } from '../../context/task/TaskContext';

export const ListTasksHeader: React.FC = () => {
  const { search, setSearch, handleTasks, tasks, page, pages, total } =
    useTask();

  return (
    <>
      <SearchBox
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => search && e.key === 'Enter' && handleTasks()}
        onClick={() => handleTasks()}
        placeholder="Search"
      />
      {tasks.length > 0 && (
        <div className="mb-3 ml-auto">
          {page} of {pages} pages | showing {tasks.length} of {total} total
          tasks
        </div>
      )}
    </>
  );
};
