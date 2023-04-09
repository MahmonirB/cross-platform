import { colors } from '@app/styles/colors';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface TagProps {
  type?: 'default' | 'success' | 'warning';
  title: string;
}

const COLOR = {
  default: colors.blueSettingBg,
  success: colors.successGreen,
  warning: colors.warning,
};

function Tag({ title, type = 'default' }: TagProps) {
  return (
    <View style={[styles.container, { backgroundColor: COLOR[type] }]}>
      <Text>{title}</Text>
    </View>
  );
}
export default Tag;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    height: 30,
    width: 'fit-content',
    borderRadius: 16,
  },
});
