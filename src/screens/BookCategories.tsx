import { ListWithState } from '@app/components/ListStructure';
import { bookCategories } from '@app/constants/ApiArgs';
import useReactQuery from '@app/lib/Api';
import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@app/navigation/AppNavigator';
import { BottomTabStackProps } from '@app/navigation/TabStack/MainTabStack';
import { ResponseData } from './__types__/type';
import { BookCategoriesData } from './__types__/getBookCategories';
import SearchBar from '@app/components/SearchBar';
import { colors } from '@app/styles/colors';
import useDebounce from '@app/hooks/useDebounce';
import { useTranslation } from 'react-i18next';

type Props = CompositeScreenProps<
  BottomTabScreenProps<BottomTabStackProps, 'BookCategory'>,
  NativeStackScreenProps<RootStackParamList>
>;

function BookCategories({ navigation }: Props) {
  const [searchText, setSearchText] = useState('');
  const { t } = useTranslation();
  const { data, isError, isLoading } = useReactQuery(bookCategories);
  let results = (data as ResponseData<BookCategoriesData>)?.results;

  const debouncedText = useDebounce(searchText, 1000);

  const handleClick = (listName: string) => () => {
    navigation.navigate('BookCategoryList', { listName });
  };

  const getContent = () =>
    results?.map(book =>
      Object.entries(book).map(([key, value]) => ({
        name: key.replace(/_/g, ' '),
        value,
      })),
    );

  return (
    <ScrollView style={styles.container}>
      <SearchBar
        placeholder={`${t('search')}...`}
        value={searchText}
        onChange={setSearchText}
      />
      <ListWithState
        isLoading={isLoading}
        isError={isError}
        results={getContent()}
        searchBy={debouncedText}
        selectBy="display name"
        handleClick={handleClick}
      />
    </ScrollView>
  );
}

export default BookCategories;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  searchBox: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors.borderGray,
    borderBottomWidth: 1,
    marginBottom: 24,
  },
});
