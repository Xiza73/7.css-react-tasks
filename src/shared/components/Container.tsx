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
}) => {
  return (
    <div className={clsx('window active', width)}>
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        {showControls && (
          <div className="title-bar-controls">
            {showMinimize && <button aria-label="Minimize"></button>}
            {showMaximize && (
              <button
                aria-label="Maximize"
                // className="edit"
                className={clsx({ edit: maximizeClassName })}
              ></button>
            )}
            {showClose && <button aria-label="Close"></button>}
          </div>
        )}
      </div>
      <div className={clsx('window-body has-space', height)}>{children}</div>
      {footer}
    </div>
  );
};
