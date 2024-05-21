import { useEffect, useState } from 'react';

import { Container } from '@/shared/components/Container';
import { useFetchAndLoad } from '@/shared/hooks/useFetchAndLoad';
import { dateFormat } from '@/shared/utils/date.util';
import { initialPagination } from '@/shared/utils/service.util';

import { taskAdapter } from '../adapters/task.adapter';
import { ApiListTask, ApiTask, Task } from '../models/task.model';
import { getTasks } from '../services/task.service';

export const ListTasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [pages, setPages] = useState<number>(0);
  const [page, setPage] = useState<number>(initialPagination.page);
  const [search, setSearch] = useState<string>('');
  const { callEndpoint } = useFetchAndLoad();
  const limit = initialPagination.limit;

  const handleTasks = async (page = 1) => {
    const response = await callEndpoint<ApiListTask>(
      getTasks({
        ...(search && { title: search }),
        page,
        limit,
      })
    );

    if (response.success && response.responseObject?.page === page) {
      const transformedTasks = (response.responseObject?.data || []).map((task: ApiTask) => taskAdapter(task));
      page === initialPagination.page ? setTasks(transformedTasks) : setTasks([...tasks, ...transformedTasks]);
      setTotal(response.responseObject?.total || 0);
      setPages(response.responseObject?.pages || 0);
      setPage(response.responseObject?.page || 0);
    }
  };

  const handleShowMore = () => {
    if (page >= pages) return;

    handleTasks(page + 1);
  };

  useEffect(() => {
    handleTasks();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="flex flex-col w-full h-[calc(100vh-3.8rem)] pt-2 px-2">
      <div className="searchbox mx-auto mb-3">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => search && e.key === 'Enter' && handleTasks()}
          placeholder="Search"
        />
        <button
          aria-label="search"
          onClick={() => handleTasks()}
        ></button>
      </div>
      {tasks.length > 0 && (
        <div className="mb-3 ml-auto">
          {page} of {pages} pages | showing {tasks.length} of {total} total tasks
        </div>
      )}
      <div className="flex justify-around items-start flex-wrap gap-x-2 gap-y-6 overflow-y-auto pt-1 pb-3">
        {tasks.map(({ title, description, status, createdAt }, index) => (
          <Container
            key={index}
            showControls
            showMaximize
            showClose
            maximizeClassName="edit"
            title="Task"
            width="w-40"
            footer={
              <div className="status-bar">
                <p className="status-bar-field">{status}</p>
                <p className="status-bar-field">{dateFormat(createdAt)}</p>
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
    </section>
  );
};
