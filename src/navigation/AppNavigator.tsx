import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import HomeScreen from '../container/HomeScreen';
import MainScreen from '../container/index';
import AuthenticateStack from './AuthenticateStack/AuthenticateStack';

const Stack = createNativeStackNavigator();
const headerLeft = () => <Icon name="arrowleft" />;

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthenticateStack"
        component={AuthenticateStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerLeft }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
