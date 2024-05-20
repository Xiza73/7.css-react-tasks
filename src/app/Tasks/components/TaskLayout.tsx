import { CenterContent } from '@/shared/components/Layout/CenterContent';
import { Layout } from '@/shared/components/Layout/Layout';
import { ChildrenProps } from '@/shared/models/props.model';
import { useSelector } from '@/store';

export type TaskLayoutProps = ChildrenProps;

export const TaskLayout: React.FC<TaskLayoutProps> = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Layout title={`User: ${user?.name || user?.email || ''}`}>
      <CenterContent>{children}</CenterContent>
    </Layout>
  );
};
