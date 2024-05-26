import { CenterContent } from '@/shared/components/Layout/CenterContent';
import { Footer } from '@/shared/components/Layout/Footer';
import { ChildrenProps } from '@/shared/models/props.model';

export type AuthLayoutProps = ChildrenProps;

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <section className="window flex flex-col h-screen w-full">
      <div className="title-bar w-full items-start justify-start">
        <div className="title-bar-text">Task App Authentication</div>
      </div>
      <CenterContent>{children}</CenterContent>
      <Footer />
    </section>
  );
};
