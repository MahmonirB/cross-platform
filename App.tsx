import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootNavigator from './src/navigation/AppNavigator';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LogBox } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications';
import { useNetInfo } from '@react-native-community/netinfo';
import * as RootNavigation from '@app/navigation/RootNavigation';

const clientQuery = new QueryClient();
LogBox.ignoreAllLogs(true);

const App = () => {
  const { isConnected, isInternetReachable } = useNetInfo();

  if (!isConnected && !isInternetReachable) {
    RootNavigation.replace('Error');
  }

  return (
    <ToastProvider>
      <QueryClientProvider client={clientQuery}>
        <NavigationContainer ref={RootNavigation.navigationRef}>
          <RootNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </ToastProvider>
  );
};

export default App;
