import clsx from 'clsx';

import { ChildrenProps } from '@/shared/models/props.model';

export interface MenuProps extends ChildrenProps {
  canHover?: boolean;
  children: React.ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ canHover, children }) => {
  return (
    <ul
      role="menu"
      className={clsx(canHover && 'can-hover')}
    >
      {children}
    </ul>
  );
};
