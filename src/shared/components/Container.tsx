import '@/index.scss';

import clsx from 'clsx';

import { ChildrenProps } from '../models/props.model';

export interface ContainerProps extends ChildrenProps {
  title?: string;
  showMinimize?: boolean;
  showMaximize?: boolean;
  showClose?: boolean;
  showControls?: boolean;
  maximizeClassName?: string;
  height?: string;
  width?: string;
  footer?: React.ReactNode;
  onMaximize?: () => void;
  onClose?: () => void;
}

export const Container: React.FC<ContainerProps> = ({
  title = '',
  children,
  showMinimize = false,
  showMaximize = false,
  showClose = false,
  showControls = false,
  maximizeClassName,
  height = 'h-auto',
  width = 'w-64',
  footer = null,
  onMaximize,
}) => {
  return (
    <div className={clsx('window active flex flex-col', width)}>
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        {showControls && (
          <div className="title-bar-controls">
            {showMinimize && <button aria-label="Minimize"></button>}
            {showMaximize && (
              <button
                aria-label="Maximize"
                className={clsx({ edit: maximizeClassName })}
                onClick={onMaximize}
              ></button>
            )}
            {showClose && <button aria-label="Close"></button>}
          </div>
        )}
      </div>
      <div className={clsx('window-body has-space flex-1', height)}>
        {children}
      </div>
      {footer}
    </div>
  );
};
