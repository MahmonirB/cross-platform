import BookListItem from '@app/components/BookListItem';
import { bookCategory } from '@app/constants/ApiArgs';
import useReactQuery from '@app/lib/Api';
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

function BookCategory() {
  const { data } = useReactQuery(bookCategory);
  const results = data?.results;

  return (
    <ScrollView style={styles.container}>
      {results
        ? results?.map((book: any) => (
            <BookListItem
              key={`${book.display_name}-${book.newest_published_date}`}
              data={book}
            />
          ))
        : null}
    </ScrollView>
  );
}

export default BookCategory;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
