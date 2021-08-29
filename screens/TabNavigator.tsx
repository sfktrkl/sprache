import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Learn from '../screens/Learn';
import Vocabulary from '../screens/Vocabulary';
import Profile from '../screens/Profile';

const RootTabNavigator = createBottomTabNavigator({
  Learn: {
    screen: Learn,
  },
  Vocabulary: {
    screen: Vocabulary,
  },
  Profile: {
    screen: Profile,
  },
});

export default createAppContainer(RootTabNavigator);
