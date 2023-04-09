import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../container/HomeScreen';
import AuthenticateStack from './AuthenticateStack/AuthenticateStack';
import MainTabs from './TabStack/MainTabs';
import BookCategoryList from '@app/screens/BookCategoryList';

const Stack = createNativeStackNavigator();

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
