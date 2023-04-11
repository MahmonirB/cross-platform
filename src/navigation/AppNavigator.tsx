import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../container/HomeScreen';
import AuthenticateStack, {
  AuthStackProps,
} from './AuthenticateStack/AuthenticateStack';
import MainTabs from './TabStack/MainTabs';
import BookCategoryList from '@app/screens/BookCategoryList';
import { NavigatorScreenParams } from '@react-navigation/native';
import { BottomTabStackProps } from './TabStack/MainTabStack';

export type RootStackParamList = {
  AuthenticateStack: NavigatorScreenParams<AuthStackProps>;
  Main?: NavigatorScreenParams<BottomTabStackProps>;
  Home: undefined;
  BookCategoryList: { listName: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthenticateStack"
        component={AuthenticateStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="BookCategoryList" component={BookCategoryList} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
