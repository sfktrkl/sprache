import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Learn from '../screens/Learn';
import Vocabulary from '../screens/Vocabulary';
import Profile from '../screens/Profile';

const learnIcon = () => <Entypo name='open-book' size={24} color='black' />;
const vocabularyIcon = () => <Entypo name='documents' size={24} color='black' />;
const profileIcon = () => <AntDesign name='user' size={24} color='black' />;

const BottomTabNavigator = createBottomTabNavigator({
  Learn: {
    screen: Learn,
    navigationOptions: {
      tabBarLabel: 'Learn',
      tabBarIcon: learnIcon,
    },
  },
  Vocabulary: {
    screen: Vocabulary,
    navigationOptions: {
      tabBarLabel: 'Vocabulary',
      tabBarIcon: vocabularyIcon,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: profileIcon,
    },
  },
});

export default createAppContainer(BottomTabNavigator);
