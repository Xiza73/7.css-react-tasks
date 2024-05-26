import { useSelector } from '@/store';

import { ChildrenProps } from '../../models/props.model';
import { CenterContent } from './CenterContent';
import { Footer } from './Footer';
import { UserNavbar } from './UserNavbar';

export const UserLayout: React.FC<ChildrenProps> = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <section className="flex flex-col h-screen w-full">
      <UserNavbar />
      <section className="window flex flex-col flex-1">
        <div className="title-bar w-full items-start justify-start">
          <div className="title-bar-text">User: {user?.name || user?.email || ''}</div>
        </div>
        <CenterContent>{children}</CenterContent>
        <Footer />
      </section>
    </section>
  );
};
