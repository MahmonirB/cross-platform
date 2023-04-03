import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Settings() {
  return (
    <View style={styles.container}>
      <Text>settings</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Settings;
