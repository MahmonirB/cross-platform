import { colors } from '@app/styles/colors';
import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import LazyImage from '@app/components/LazyImage';
import { replace } from '@app/navigation/RootNavigation';
import { useNetInfo } from '@react-native-community/netinfo';

function ErrorScreen() {
  const { isConnected, isInternetReachable } = useNetInfo();
  const handleRefresh = () => {
    if (isConnected && isInternetReachable) {
      replace('Main');
    }
  };

  return (
    <View style={styles.container}>
      <LazyImage name="networkError" />
      <Text style={styles.title}>Oops! 404</Text>
      <Text style={styles.caption}>Network Error</Text>
      <Button onPress={handleRefresh} title="Retry" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.bluePrimary,
    marginBottom: 24,
  },
  caption: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.bluePrimary,
    marginBottom: 24,
  },
  btn: {
    backgroundColor: colors.primary,
    color: colors.white,
    width: 200,
    height: 40,
  },
});

export default ErrorScreen;
