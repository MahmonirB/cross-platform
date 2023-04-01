import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../../container/HomeScreen';

const AuthAtack = createNativeStackNavigator();

function AuthenticateStack() {
  return (
    <AuthAtack.Navigator>
      <AuthAtack.Screen name="AuthStack" component={HomeScreen} />
    </AuthAtack.Navigator>
  );
}

export default AuthenticateStack;
