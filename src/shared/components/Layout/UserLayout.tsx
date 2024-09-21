import { useAuthStore } from '@/store/useAuthStore';

import { ChildrenProps } from '../../models/props.model';
import { CenterContent } from './CenterContent';
import { Footer } from './Footer';
import { UserNavbar } from './UserNavbar';

export const UserLayout: React.FC<ChildrenProps> = ({ children }) => {
  const { user } = useAuthStore((state) => state);

  return (
    <section className="flex flex-col h-screen w-full">
      <UserNavbar />
      <section className="window flex flex-col flex-1">
        <div className="title-bar w-full items-start justify-start">
          <div className="title-bar-text">
            User: {user?.name || user?.email || ''}
          </div>
        </div>
        <CenterContent>{children}</CenterContent>
        <Footer />
      </section>
    </section>
  );
};
