import ListItem from '@app/components/ListItem';
import { bookCategories } from '@app/constants/ApiArgs';
import useReactQuery from '@app/lib/Api';
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

function BookCategories({ navigation }: any) {
  const { data } = useReactQuery(bookCategories);
  const results = (data as any)?.results;

  const handleClick = (value: string) => () => {
    navigation.navigate('BookCategoryList', { value });
  };

  const getContent = (book: any) =>
    Object.keys(book).map(item => ({
      name: item.replace('_', ' '),
      value: book[item],
    }));

  return (
    <ScrollView style={styles.container}>
      {results
        ? results?.map((book: any) => (
            <ListItem
              key={`${book.display_name}-${book.newest_published_date}`}
              title={book.display_name}
              content={getContent(book)}
              onClick={handleClick(book.display_name)}
            />
          ))
        : null}
    </ScrollView>
  );
}

export default BookCategories;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
