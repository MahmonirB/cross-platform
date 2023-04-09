import ListItem from '@app/components/ListItem';
import { bookCategoryList } from '@app/constants/ApiArgs';
import useReactQuery from '@app/lib/Api';
import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

function BookCategoryList({ route }: any) {
  const {
    params: { value },
  } = route;
  const { data, isLoading, isError } = useReactQuery(bookCategoryList(value));
  const results = (data as any)?.results;

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!results?.length || isError) {
    return (
      <View>
        <Text>Data Not found...</Text>
      </View>
    );
  }
  const getContent = (result: any) => [
    { name: 'Bestsellers date', value: result.bestsellers_date },
    { name: 'Published date', value: result.published_date },
    { name: 'Rank last week', value: result.rank_last_week },
  ];

  const handleClick = () => {};

  return (
    <ScrollView style={styles.container}>
      {results
        ? results?.map((book: any) => (
            <ListItem
              key={`${book.display_name}-${book.bestsellers_date}`}
              content={getContent(book)}
              onClick={handleClick}
            />
          ))
        : null}
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
