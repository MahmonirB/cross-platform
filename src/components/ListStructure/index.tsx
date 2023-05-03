import React, { memo, useCallback } from 'react';
import ListItem, { ContentItem } from './ListItem';
import { EmptyState, ErrorState, LoadingState, SearchState } from '../States';
import { compose } from '@app/utils/compose';

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

  return (
    <>
      {results
        ? results?.map((item: Array<ContentItem>, index: number) => (
            <ListItem
              key={`${Object.values(item).toString()}-${index}`}
              content={item}
              showMenu={showMenu}
              onClick={handleClick(selectValue(item))}
            />
          ))
        : null}
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
