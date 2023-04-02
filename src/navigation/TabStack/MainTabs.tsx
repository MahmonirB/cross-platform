import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  ExploreStackScreen,
  SettingsStackScreen,
  NotificationsStackScreen,
} from './MainTabStack';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const Tabs = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tabs.Navigator initialRouteName="Explore">
      <Tabs.Screen
        name="Main Page"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <Icon name="home" size={26} />,
        }}
      />
      <Tabs.Screen
        name="Notifications"
        component={NotificationsStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <Icon name="mail" size={26} />,
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <Icon name="setting" size={26} />,
        }}
      />
    </Tabs.Navigator>
  );
};

export default MainTabs;
