import '@/index.scss';

import clsx from 'clsx';

import { ChildrenProps } from '../models/props.model';

export interface ContainerProps extends ChildrenProps {
  title?: string;
  showMinimize?: boolean;
  showMaximize?: boolean;
  showClose?: boolean;
  maximizeClassName?: string;
  height?: string;
  width?: string;
  footer?: React.ReactNode;
  withoutFooter?: boolean;
  onMaximize?: () => void;
  onClose?: () => void;
}

export const Container: React.FC<ContainerProps> = ({
  title = '',
  children,
  showMinimize = false,
  showMaximize = false,
  showClose = false,
  maximizeClassName,
  height = 'h-auto',
  width = 'w-64',
  footer = null,
  withoutFooter = false,
  onMaximize,
  onClose,
}) => {
  return (
    <div className={clsx('window active flex flex-col', width)}>
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        {(showMinimize || showMaximize || showClose) && (
          <div className="title-bar-controls">
            {showMinimize && <button aria-label="Minimize"></button>}
            {showMaximize && (
              <button
                aria-label="Maximize"
                className={clsx({ edit: maximizeClassName })}
                onClick={onMaximize}
              ></button>
            )}
            {showClose && (
              <button
                aria-label="Close"
                onClick={onClose}
              ></button>
            )}
          </div>
        )}
      </div>
      {!withoutFooter && (
        <>
          <div className={clsx('window-body has-space flex-1', height)}>
            {children}
          </div>
          {footer}
        </>
      )}
      {withoutFooter && children}
    </div>
  );
};
