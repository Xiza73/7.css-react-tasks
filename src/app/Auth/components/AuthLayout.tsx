import { CenterContent } from '@/shared/components/Layout/CenterContent';
import { Layout } from '@/shared/components/Layout/Layout';
import { ChildrenProps } from '@/shared/models/props.model';

export type AuthLayoutProps = ChildrenProps;

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Layout title="Task App Authentication">
      <CenterContent>{children}</CenterContent>
    </Layout>
  );
};
