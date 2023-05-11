import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootNavigator from './src/navigation/AppNavigator';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LogBox } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications';

const clientQuery = new QueryClient();
LogBox.ignoreAllLogs(true);

const App = () => (
  <ToastProvider>
    <QueryClientProvider client={clientQuery}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  </ToastProvider>
);

export default App;
