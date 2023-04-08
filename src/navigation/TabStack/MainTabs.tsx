import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  ExploreStackScreen,
  SettingsStackScreen,
  BookCategoryStackScreen,
} from './MainTabStack';
import Icon from 'react-native-vector-icons/AntDesign';

const Tabs = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tabs.Navigator initialRouteName="Explore">
      <Tabs.Screen
        name="Main Page"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <Icon name="home" size={24} />,
        }}
      />
      <Tabs.Screen
        name="BookCategory"
        component={BookCategoryStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <Icon name="book" size={24} />,
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <Icon name="setting" size={24} />,
        }}
      />
    </Tabs.Navigator>
  );
};

export default MainTabs;
