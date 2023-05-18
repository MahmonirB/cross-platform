import { colors } from '@app/styles/colors';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LazyImage from '@app/components/LazyImage';

function ErrorScreen() {
  return (
    <View style={styles.container}>
      <LazyImage name="networkError" />
      <Text style={styles.title}>Oops! 404</Text>
      <Text style={styles.caption}>Network Error</Text>
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
  },
});

export default ErrorScreen;
