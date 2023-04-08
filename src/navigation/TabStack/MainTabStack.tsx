import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@app/container/HomeScreen';
import Settings from '@app/container/Settings';
import Notifications from '@app/container/Notifications';
import BookCategory from '@app/screens/BookCategory';

const SettingsStack = createNativeStackNavigator();
const NotificationsStack = createNativeStackNavigator();
const BookCategoryStack = createNativeStackNavigator();
const ExploreStack = createNativeStackNavigator();

export function ExploreStackScreen() {
  return (
    <ExploreStack.Navigator screenOptions={{ headerShown: false }}>
      <ExploreStack.Screen name="MainPage" component={HomeScreen} />
    </ExploreStack.Navigator>
  );
}

export function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="Setting" component={Settings} />
    </SettingsStack.Navigator>
  );
}

export function NotificationsStackScreen() {
  return (
    <NotificationsStack.Navigator screenOptions={{ headerShown: false }}>
      <NotificationsStack.Screen
        name="Notification"
        component={Notifications}
      />
    </NotificationsStack.Navigator>
  );
}

export function BookCategoryStackScreen() {
  return (
    <BookCategoryStack.Navigator screenOptions={{ headerShown: false }}>
      <BookCategoryStack.Screen name="BookCategory" component={BookCategory} />
    </BookCategoryStack.Navigator>
  );
}
