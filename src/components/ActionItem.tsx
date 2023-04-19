import { colors } from '@app/styles/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function ActionItem({ text, children }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: colors.lightGray,
    borderBottomColor: colors.borderGray,
    borderBottomWidth: 1,
  },
  title: {
    color: colors.primary,
    fontWeight: '500',
  },
});

export default ActionItem;
