import React, { useCallback, useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import SearchBar from '@app/components/SearchBar';
import useAutocomplete from '@app/hooks/useAutoComplete';
import { colors } from '@app/styles/colors';

interface AutoCompleteSearchProps {
  keyWordList: string[];
  onSelectText: (value: string) => void;
}

function AutoCompleteSearch({
  keyWordList,
  onSelectText,
}: AutoCompleteSearchProps) {
  const { t } = useTranslation();

  const {
    value,
    handleValueChange,
    suggestions,
    select,
    currentFocus,
    handleKeyDown,
  } = useAutocomplete();

  const hasSuggestions = useMemo(
    () => !(Array.isArray(suggestions) && !suggestions.length),
    [suggestions],
  );

  const handleTextChange = useCallback(
    (text: string) => {
      handleValueChange(text, keyWordList);
      if (!text) {
        onSelectText('');
      }
    },
    [keyWordList, onSelectText, handleValueChange],
  );

  const handleSelectItem = useCallback(
    (itemValue: string) => {
      onSelectText(value);
      select(itemValue);
    },
    [onSelectText, select, value],
  );

  return (
    <>
      <SearchBar
        placeholder={`${t('search')}...`}
        value={value}
        onKeyDown={data => handleKeyDown(data, onSelectText)}
        onChange={handleTextChange}
      />
      {hasSuggestions && (
        <View style={styles.autoMenu}>
          {suggestions?.map(({ rest, itemValue }: any, i) => (
            <TouchableOpacity
              key={itemValue}
              style={[
                styles.autoRow,
                i === currentFocus ? styles.activeItem : null,
              ]}
              onPress={() => handleSelectItem(itemValue)}>
              <Text style={styles.searchText}>{value}</Text>
              <Text>{rest}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
}

export default AutoCompleteSearch;

const styles = StyleSheet.create({
  autoMenu: {
    backgroundColor: colors.white,
    boxShadow: '#ccc 1px 0px 8px 0px',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    position: 'absolute',
    width: '100%',
    top: 45,
    zIndex: 2,
    maxHeight: 300,
    overflow: 'scroll',
  },
  autoRow: {
    flexDirection: 'row',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderGray,
  },
  searchText: {
    color: colors.danger,
  },
  activeItem: {
    backgroundColor: colors.blueSettingBg,
  },
});
