import { ChildrenProps } from '@/shared/models/props.model';

export interface MenuItemProps extends ChildrenProps {
  hasPopup?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  hasPopup = false,
  children,
}) => {
  return (
    <li
      role="menuitem"
      // tabIndex={0}
      // aria-haspopup={hasPopup}
      {...(hasPopup && { tabIndex: 0, 'aria-haspopup': `${hasPopup}` })}
    >
      {children}
    </li>
  );
};
