import { ChildrenProps } from '@/shared/models/props.model';
import { noopFunction } from '@/shared/utils/noopFunction';

export interface MenuOptionProps extends ChildrenProps {
  onClick?: () => void;
}

export const MenuOption: React.FC<MenuOptionProps> = ({ onClick = noopFunction, children }) => {
  return (
    <div
      className="nav-option"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
