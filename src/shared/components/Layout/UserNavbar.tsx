import { useNavigate } from 'react-router-dom';

import { ModuleRoute } from '@/routes/models/module.model';
import { TasksRoute } from '@/routes/models/tasks.model';
import { useAuth } from '@/store';

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
                <MenuOption
                  onClick={() =>
                    navigate(`${ModuleRoute.TASKS}${TasksRoute.LIST}`)
                  }
                >
                  List <span>Alt+T</span>
                </MenuOption>
              </MenuItem>
              <MenuItem>
                <MenuOption
                  onClick={() =>
                    navigate(`${ModuleRoute.TASKS}${TasksRoute.CREATE}`)
                  }
                >
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
