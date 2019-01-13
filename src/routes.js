import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Issues from './pages/Issues';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Issues,
    },
    { initialRouteName: 'Issues' },
  ),
);

export default Routes;
