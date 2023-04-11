import { ListWithState } from '@app/components/ListStructure';
import { bookCategories } from '@app/constants/ApiArgs';
import useReactQuery from '@app/lib/Api';
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@app/navigation/AppNavigator';
import { BottomTabStackProps } from '@app/navigation/TabStack/MainTabStack';
import { ResponseData } from './__types__/type';
import { BookCategoriesData } from './__types__/getBookCategories';

type Props = CompositeScreenProps<
  BottomTabScreenProps<BottomTabStackProps, 'BookCategory'>,
  NativeStackScreenProps<RootStackParamList>
>;

function BookCategories({ navigation }: Props) {
  const { data, isError, isLoading } = useReactQuery(bookCategories);
  const results = (data as ResponseData<BookCategoriesData>)?.results;

  const handleClick = (listName: string) => () => {
    navigation.navigate('BookCategoryList', { listName });
  };

  const getContent = (book: BookCategoriesData[]) =>
    Object.keys(book).map(item => ({
      name: item.replace('_', ' '),
      value: book[item as any],
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
