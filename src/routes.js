import {
  createAppContainer,
  createSwitchNavigation,
  createBottomTabNavigation,
} from 'react-navigation';

const Routes = (userLogged = false) => createAppContainer(createSwitchNavigation());

export default Routes;
