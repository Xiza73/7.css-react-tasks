import { useAuth } from '@/store';

export const Main: React.FC = () => {
  const { logout } = useAuth();

  return (
    <>
      <button onClick={logout}>Logout</button>
    </>
  );
};
