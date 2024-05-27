export const TaskStatus = {
  OPEN: 'Open',
  DONE: 'Done',
  IN_PROGRESS: 'In Progress',
} as const;
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

export const taskStatusArray = Object.values(TaskStatus);
