import { useNavigate } from '@tanstack/react-router';

import { useAuth } from '@/store/hooks/useAuth';

import { Menu } from '../Menu/Menu';
import { MenuBar } from '../Menu/MenuBar';
import { MenuItem } from '../Menu/MenuItem';
import { MenuOption } from '../Menu/MenuOption';

export const UserNavbar: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <MenuBar>
      <MenuItem hasPopup>
        User
        <Menu>
          <MenuItem>
            <MenuOption onClick={logout}>Logout</MenuOption>
          </MenuItem>
        </Menu>
      </MenuItem>
      <MenuItem hasPopup>
        Go to...
        <Menu>
          {/* <MenuItem>
            <MenuOption
              onClick={() => navigate(`${ModuleRoute.HOME}${HomeRoute.MAIN}`)}
            >
              Home
            </MenuOption>
          </MenuItem> */}
          <MenuItem hasPopup>
            Task
            <Menu>
              <MenuItem>
                <MenuOption onClick={() => navigate({ to: '/task' })}>
                  List <span>Alt+T</span>
                </MenuOption>
              </MenuItem>
              <MenuItem>
                <MenuOption onClick={() => navigate({ to: '/task/create' })}>
                  Create
                </MenuOption>
              </MenuItem>
            </Menu>
          </MenuItem>
        </Menu>
      </MenuItem>
    </MenuBar>
  );
};
