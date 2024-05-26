import clsx from 'clsx';

import { ChildrenProps } from '@/shared/models/props.model';

export interface MenuBarProps extends ChildrenProps {
  canHover?: boolean;
  children: React.ReactNode;
}

export const MenuBar: React.FC<MenuBarProps> = ({ canHover, children }) => {
  return (
    <ul
      role="menubar"
      className={clsx(canHover && 'can-hover')}
    >
      {children}
    </ul>
  );
};
