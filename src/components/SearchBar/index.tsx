import { colors } from '@app/styles/colors';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function SearchBar({ placeholder, value, onChange }: any) {
  return (
    <View style={styles.container}>
      <Icon
        style={styles.icon}
        name="search1"
        size={16}
        color={colors.textGray}
      />
      <TextInput
        value={value}
        onChange={e => onChange(e.target.value)}
        style={styles.input}
        placeholder={placeholder}
      />
      {value ? (
        <Icon
          style={styles.closeIcon}
          name="closecircle"
          size={16}
          color={colors.textGray}
          onPress={() => onChange('')}
        />
      ) : null}
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  icon: {
    position: 'absolute',
    top: 16,
    left: 8,
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: colors.borderGray,
    color: colors.lightBlackText,
    borderRadius: 16,
    paddingVertical: 2,
    paddingLeft: 32,
    backgroundColor: colors.disable,
  },
  closeIcon: {
    position: 'absolute',
    top: 16,
    right: 32,
  },
});
