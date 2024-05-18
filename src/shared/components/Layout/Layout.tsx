import { ChildrenProps } from '../../models/props.model';
import { Footer } from './Footer';

export interface LayoutProps extends ChildrenProps {
  title?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title = 'Task App' }) => {
  return (
    <section className="window flex flex-col h-screen w-full">
      <div className="title-bar w-full items-start justify-start">
        <div className="title-bar-text">{title}</div>
      </div>
      {children}
      <Footer />
    </section>
  );
};
