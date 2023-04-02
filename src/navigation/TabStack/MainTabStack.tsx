import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../container/HomeScreen';
import MainContainer from '../../container';

const SettingsStack = createNativeStackNavigator();
const NotificationsStack = createNativeStackNavigator();
const ExploreStack = createNativeStackNavigator();

export function ExploreStackScreen() {
  return (
    <ExploreStack.Navigator screenOptions={{ headerShown: false }}>
      <ExploreStack.Screen name="MainPage" component={MainContainer} />
    </ExploreStack.Navigator>
  );
}

export function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="Setting" component={HomeScreen} />
    </SettingsStack.Navigator>
  );
}

export function NotificationsStackScreen() {
  return (
    <NotificationsStack.Navigator screenOptions={{ headerShown: false }}>
      <NotificationsStack.Screen name="Notification" component={HomeScreen} />
    </NotificationsStack.Navigator>
  );
}
