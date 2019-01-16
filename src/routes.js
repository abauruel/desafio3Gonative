import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Issues from '~/pages/Issues';
import Repositories from '~/pages/Repositories';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Repositories,
      Issues,
    },
    { initialRouteName: 'Repositories' },
  ),
);

export default Routes;
