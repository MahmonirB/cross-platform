import React, { memo, useCallback } from 'react';
import ListItem, { ContentItem } from './ListItem';
import { EmptyState, ErrorState, LoadingState, SearchState } from '../States';
import { compose } from '@app/utils/compose';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { colors } from '@app/styles/colors';

interface ListStructureProps {
  results: Array<ContentItem[]>;
  selectBy: string;
  showMenu?: boolean;
  handleClick: (value: string) => () => void;
}

function ListStructure({
  results,
  showMenu,
  selectBy,
  handleClick,
}: ListStructureProps) {
  const selectValue = useCallback(
    (item: Array<ContentItem>) =>
      item
        ?.find((ele: any) => ele.name === selectBy)
        ?.value?.replace(/' '/g, '_') || '',
    [selectBy],
  );

  const renderItem = ({ item }: { item: Array<ContentItem> }) => (
    <ListItem
      content={item}
      showMenu={showMenu}
      onClick={handleClick(selectValue(item))}
    />
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text> Total result is {results?.length}</Text>
    </View>
  );

  return (
    <>
      <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={(item, index) =>
          `${Object.values(item).toString()}-${index}`
        }
        stickyHeaderHiddenOnScroll={true}
        ListHeaderComponent={renderHeader}
      />
    </>
  );
}
const isDeepStrictEqual = (
  prevProps: ListStructureProps,
  nextProps: ListStructureProps,
) =>
  prevProps?.selectBy === nextProps?.selectBy &&
  JSON.stringify(prevProps?.results) === JSON.stringify(nextProps?.results);

export default memo(ListStructure, isDeepStrictEqual);

export const ListWithState = compose(
  LoadingState,
  ErrorState,
  SearchState,
  EmptyState,
)(ListStructure);

const styles = StyleSheet.create({
  header: {
    margin: 24,
    marginTop: 0,
    borderBottomWidth: 1,
    borderBottomStyle: 'dashed',
    borderBottomColor: colors.borderGray,
  },
});
