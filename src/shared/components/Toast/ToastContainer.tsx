import clsx from 'clsx';

import { useToast, Variant } from '@/shared/context/toast';

import { ToastMessage } from './ToastMessage';

export type ToastContainerProps = {
  variant?: Variant;
};

export default function ToastContainer({ variant = Variant.BOTTOM_RIGHT }: ToastContainerProps) {
  const { data, remove } = useToast();

  function handleRemove(id: string) {
    remove(id);
  }

  return (
    <div
      className={clsx(
        variant,
        'fixed z-[99] w-full md:max-w-sm',
        'p-4 md:p-4 max-h-screen overflow-hidden pointer-events-none'
      )}
    >
      <div className={clsx('flex-1 flex-col fade w-full mr-8 justify-end pointer-events-none')}>
        {data.map((toast) => {
          return (
            <div
              key={toast.id}
              className={clsx('flex py-1 w-full', 'transform transition-all duration-300 pointer-events-auto')}
            >
              <ToastMessage
                id={toast.id}
                message={toast.message}
                type={toast.type}
                header={toast.header}
                icon={toast.icon}
                truncate={toast.truncate}
                onRemove={handleRemove}
                lifetime={toast.lifetime}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
