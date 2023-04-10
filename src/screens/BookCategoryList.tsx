import { ListWithState } from '@app/components/ListStructure';
import { bookCategoryList } from '@app/constants/ApiArgs';
import useReactQuery from '@app/lib/Api';
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

function BookCategoryList({ route }: any) {
  const {
    params: { value },
  } = route;
  const { data, isLoading, isError } = useReactQuery(bookCategoryList(value));
  const results = (data as any)?.results;

  const getContent = (result: any) => [
    { name: 'Bestsellers date', value: result.bestsellers_date },
    { name: 'Published date', value: result.published_date },
    { name: 'Rank last week', value: result.rank_last_week },
  ];

  const handleClick = () => {};

  return (
    <ScrollView style={styles.container}>
      <ListWithState
        isError={isError}
        isLoading={isLoading}
        results={results}
        selectBy="display_name"
        getContent={getContent}
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
