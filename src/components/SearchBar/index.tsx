import { colors } from '@app/styles/colors';
import React from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface SearchBarProps {
  placeholder: string;
  value: string;
  onKeyDown?: ({ key }: { key: string }) => void;
  onChange: (value: string) => void;
}

function SearchBar({
  placeholder,
  value,
  onKeyDown,
  onChange,
}: SearchBarProps) {
  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    e?.nativeEvent?.key ? onKeyDown?.({ key: e?.nativeEvent?.key }) : null;
  };

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
        onKeyPress={handleKeyPress}
        onChangeText={onChange}
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
    width: '90%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors.borderGray,
    borderBottomWidth: 1,
    marginBottom: 24,
    marginHorizontal: 16,
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
    backgroundColor: colors.greyBg,
  },
  closeIcon: {
    position: 'absolute',
    top: 16,
    right: 32,
  },
});
