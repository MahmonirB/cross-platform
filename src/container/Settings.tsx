import LanguageOption from '@app/components/LanguageOption';
import React from 'react';
import { StyleSheet, View } from 'react-native';

function Settings() {
  return (
    <View style={styles.container}>
      <LanguageOption />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Settings;
