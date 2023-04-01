import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AuthLoading from '../../screens/AuthenticatingPage/AuthLoading';

const AuthAtack = createNativeStackNavigator();

function AuthenticateStack() {
  return (
    <AuthAtack.Navigator screenOptions={{ headerShown: false }}>
      <AuthAtack.Screen name="AuthStack" component={AuthLoading} />
    </AuthAtack.Navigator>
  );
}

export default AuthenticateStack;
