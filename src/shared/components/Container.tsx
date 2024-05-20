import { ChildrenProps } from '../models/props.model';

export interface ContainerProps extends ChildrenProps {
  title?: string;
}

export const Container: React.FC<ContainerProps> = ({ title = '', children }) => {
  return (
    <div className="window active w-64">
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body has-space">{children}</div>
    </div>
  );
};
