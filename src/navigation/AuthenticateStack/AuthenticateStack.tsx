import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AuthLoading from '@app/screens/AuthLoading';

export type AuthStackProps = {
  AuthStack: undefined;
};

const AuthAtack = createNativeStackNavigator<AuthStackProps>();

function AuthenticateStack() {
  return (
    <AuthAtack.Navigator screenOptions={{ headerShown: false }}>
      <AuthAtack.Screen name="AuthStack" component={AuthLoading} />
    </AuthAtack.Navigator>
  );
}

export default AuthenticateStack;
