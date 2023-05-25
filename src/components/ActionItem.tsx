import { colors } from '@app/styles/colors';
import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ActionItemProps {
  text: string;
  icon?: ReactNode;
  children: ReactNode;
}

function ActionItem({ text, icon, children }: ActionItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        {icon || null}
        <Text style={styles.title}>{text}</Text>
      </View>
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
    marginLeft: 8,
  },
  titleBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ActionItem;
