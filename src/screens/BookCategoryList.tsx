import { ListWithState } from '@app/components/ListStructure';
import { bookCategoryList } from '@app/constants/ApiArgs';
import useReactQuery from '@app/lib/Api';
import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@app/navigation/AppNavigator';
import { ResponseData } from './__types__/type';
import { BookCategoryListData } from './__types__/getBookCategoryList';
import { useTranslation } from 'react-i18next';
import SearchBar from '@app/components/SearchBar';
import useDebounce from '@app/hooks/useDebounce';

type Props = NativeStackScreenProps<RootStackParamList, 'BookCategoryList'>;

function BookCategoryList({ route }: Props) {
  const {
    params: { listName },
  } = route;
  const [searchText, setSearchText] = useState('');
  const { t } = useTranslation();

  const { data, isLoading, isError, isFetching } = useReactQuery(
    bookCategoryList(listName),
  );
  const results = (data as ResponseData<BookCategoryListData>)?.results;

  const debouncedText = useDebounce(searchText, 1000);

  const getContent = (result: BookCategoryListData) => [
    { name: t('bestsellersDate'), value: result.bestsellers_date },
    { name: t('publishedDate'), value: result.published_date },
    { name: t('rankLastWeek'), value: result.rank_last_week },
  ];

  const handleClick = () => {};

  return (
    <ScrollView style={styles.container}>
      {results?.length ? (
        <SearchBar
          placeholder={`${t('search')}...`}
          value={searchText}
          onChange={setSearchText}
        />
      ) : null}

      <ListWithState
        isError={isError}
        isLoading={isLoading || isFetching}
        results={results?.map(getContent)}
        searchBy={debouncedText}
        handleClick={handleClick}
      />
    </ScrollView>
  );
}

export default BookCategoryList;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  text: {
    lineHeight: 18,
    fontSize: 14,
    paddingLeft: 8,
  },
  title: {
    lineHeight: 32,
    fontSize: 28,
  },
});
