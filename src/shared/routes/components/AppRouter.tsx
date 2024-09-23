import { Outlet /* , useNavigate */ } from '@tanstack/react-router';

// import Auth from '@/app/Auth';
// import Tasks from '@/app/Tasks';
import { useKeyboardShortcut } from '@/shared/hooks/useKeyboardShortcut';

// import { ModuleRoute } from '../models/module.model';

export const AppRouteConfig: React.FC = () => {
  // const navigate = useNavigate();

  useKeyboardShortcut(
    (e) => {
      e.preventDefault();

      // navigate({ to: '/tasks' });
    },
    { code: 'KeyT', altKey: true }
  );

  return <Outlet />;
};

// export const AppRouter = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<AppRouteConfig />}>
//       <Route
//         path={`${ModuleRoute.AUTH}/*`}
//         element={<Auth />}
//       />
//       <Route
//         path={`${ModuleRoute.TASKS}/*`}
//         element={<Tasks />}
//       />
//       <Route
//         path="*"
//         element={<Navigate to={ModuleRoute.TASKS} />}
//       />
//     </Route>
//   )
// );
