import { Icon } from '@iconify-icon/react';
import clsx from 'clsx';
import { useEffect } from 'react';

import { Toast, ToastMessageType, Truncate } from '@/shared/context/toast';

const VARIANTS = {
  [ToastMessageType.INFO]: {
    base: 'bg-white border-blue-500',
    iconstyle: 'text-blue-500 ',
    icon: 'material-symbols:info-outline',
    name: 'Info',
  },
  [ToastMessageType.ERROR]: {
    base: 'bg-white border-red-500 ',
    iconstyle: 'text-red-500 ',
    icon: 'system-uicons:cross-circle',
    name: 'Error',
  },
  [ToastMessageType.WARNING]: {
    base: 'bg-white border-yellow-500',
    iconstyle: 'text-yellow-500 ',
    icon: 'ph:warning-light',
    name: 'Warning',
  },
  [ToastMessageType.SUCCESS]: {
    base: 'bg-white border-green-500',
    iconstyle: 'text-green-500 ',
    icon: 'clarity:success-standard-line',
    name: 'Success',
  },
};

export type ToastMessageProps = {
  id: string;
  lifetime?: number;
  variant?: keyof typeof VARIANTS | undefined;
  onRemove?: (id: string) => void;
  truncate?: Truncate;
} & Toast;

export const ToastMessage: React.FC<ToastMessageProps> = ({
  id,
  header,
  message,
  lifetime,
  onRemove,
  truncate = 'truncate-1-lines',
  icon,
  type,
}) => {
  const variant = type
    ? VARIANTS[type]
    : {
        base: 'bg-white border-gray-600 ',
        iconstyle: '',
        icon,
        name: header,
      };

  useEffect(() => {
    if (lifetime && onRemove) {
      setTimeout(() => {
        onRemove(id);
      }, lifetime);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lifetime]);

  return (
    <div
      className={clsx(
        'flex w-full visible flex-row shadow-lg',
        'border-l-4 rounded-md duration-100 cursor-pointer',
        'transform transition-all hover:scale-102',
        variant.base,
        type && 'max-h-40'
      )}
    >
      <div className="flex flex-row p-2 flex-no-wrap w-full">
        {variant.icon && (
          <div className={clsx('flex items-center h-12 w-12', 'mx-auto text-xl select-none')}>
            <Icon
              className={clsx('mx-auto', variant.iconstyle)}
              icon={variant.icon}
            />
          </div>
        )}

        <div className="flex flex-col flex-no-wrap px-1 w-full">
          <div className="flex my-auto font-bold select-none">{variant.name}</div>
          <p
            className={clsx(
              '-mt-0.5 my-auto break-all flex',
              'text-gray-600 text-sm',
              typeof message === 'string' && truncate
            )}
          >
            {message}
          </p>
        </div>
        <div
          onClick={() => onRemove && onRemove(id)}
          className={clsx('w-10 h-12 mr-2 items-center mx-auto', 'text-center leading-none text-lg')}
        >
          <Icon
            className={clsx(
              'mx-auto my-auto h-full text-center text-gray-600',
              'cursor-pointer hover:scale-105 transform '
            )}
            icon={'mdi:close'}
          />
        </div>
      </div>
    </div>
  );
};
