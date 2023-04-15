import { colors } from '@app/styles/colors';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

function SearchBar({ placeholder, value, onChange }: any) {
  return (
    <TextInput
      value={value}
      onChange={e => onChange(e.target.value)}
      style={styles.container}
      placeholder={placeholder}
    />
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: 296,
    height: 50,
    borderWidth: 1,
    borderColor: colors.borderGray,
    color: colors.lightBlackText,
    borderRadius: 16,
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: colors.secondary,
  },
});
