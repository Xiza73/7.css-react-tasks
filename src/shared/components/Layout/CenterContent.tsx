import { ChildrenProps } from '@/shared/models/props.model';

export const CenterContent: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="window-body flex flex-1 flex-col justify-center items-center">
      {children}
    </div>
  );
};
