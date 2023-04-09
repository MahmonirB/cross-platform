import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootNavigator from './src/navigation/AppNavigator';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LogBox } from 'react-native';

const clientQuery = new QueryClient();
LogBox.ignoreAllLogs(true);

const App = () => (
  <QueryClientProvider client={clientQuery}>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </QueryClientProvider>
);

export default App;
