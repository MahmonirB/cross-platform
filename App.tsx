import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootNavigator from './src/navigation/AppNavigator';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LogBox } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications';
import { useNetInfo } from '@react-native-community/netinfo';
import * as RootNavigation from '@app/navigation/RootNavigation';
import CPContext from '@app/context';
import { IMAGES } from '@app/constants/Variables';
import { PortalProvider } from '@gorhom/portal';

const clientQuery = new QueryClient();
LogBox.ignoreAllLogs(true);

const App = () => {
  const { isConnected, isInternetReachable } = useNetInfo();

  if (!isConnected && !isInternetReachable) {
    RootNavigation.replace('Error');
  }
  const contextValue = {
    image: IMAGES?.[Number((Math.random() * 10).toFixed(0))],
  };

  return (
    <PortalProvider>
      <ToastProvider>
        <QueryClientProvider client={clientQuery}>
          <NavigationContainer ref={RootNavigation.navigationRef}>
            <CPContext.Provider value={contextValue}>
              <RootNavigator />
            </CPContext.Provider>
          </NavigationContainer>
        </QueryClientProvider>
      </ToastProvider>
    </PortalProvider>
  );
};

export default App;
