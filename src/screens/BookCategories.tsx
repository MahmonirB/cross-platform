import { ListWithState } from '@app/components/ListStructure';
import { bookCategories } from '@app/constants/ApiArgs';
import useReactQuery from '@app/lib/Api';
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

function BookCategories({ navigation }: any) {
  const { data, isError, isLoading } = useReactQuery(bookCategories);
  const results = (data as any)?.results;

  const handleClick = (listName: string) => () => {
    navigation.navigate('BookCategoryList', { listName });
  };

  const getContent = (book: any) =>
    Object.keys(book).map(item => ({
      name: item.replace('_', ' '),
      value: book[item],
    }));

  return (
    <ScrollView style={styles.container}>
      <ListWithState
        isLoading={isLoading}
        isError={isError}
        results={results}
        selectBy="display_name"
        getContent={getContent}
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
});
