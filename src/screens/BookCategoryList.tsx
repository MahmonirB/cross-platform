import { ListWithState } from '@app/components/ListStructure';
import { bookCategoryList } from '@app/constants/ApiArgs';
import useReactQuery from '@app/lib/Api';
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@app/navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'BookCategoryList'>;

function BookCategoryList({ route }: Props) {
  const {
    params: { listName },
  } = route;

  const { data, isLoading, isError } = useReactQuery(
    bookCategoryList(listName),
  );
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
