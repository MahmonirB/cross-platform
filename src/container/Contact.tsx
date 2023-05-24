import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Contact() {
  return (
    <View style={styles.container}>
      <Text>Contact Screen</Text>
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

export default Contact;
