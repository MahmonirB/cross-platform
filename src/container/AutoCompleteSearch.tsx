import React from 'react';
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

  const hasSuggestions = !(Array.isArray(suggestions) && !suggestions.length);

  return (
    <>
      <SearchBar
        placeholder={`${t('search')}...`}
        value={value}
        onKeyDown={handleKeyDown}
        onChange={(text: string) => {
          handleValueChange(text, keyWordList);
          if (!text) {
            onSelectText('');
          }
        }}
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
              onPress={() => {
                onSelectText(value);
                select(itemValue);
              }}>
              <Text style={styles.searchText}>{value}</Text>
              {rest}
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
    maxHeight: 200,
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
