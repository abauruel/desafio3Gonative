import { createAppContainer, createStackNavigator } from 'react-navigation';
import Issues from '~/pages/Issues';
import Repositories from '~/pages/Repositories';

const Routes = createStackNavigator({
  Repositories,
  Issues,
});

export default Routes;
