import React from 'react';
import ListItem, { ContentItem } from './ListItem';
import { EmptyState, ErrorState, LoadingState } from '../States';
import { compose } from '@app/utils/compose';

interface ListStructureProps<T> {
  results: T[];
  selectBy: string;
  getContent: (value: string) => ContentItem[];
  handleClick: (value: string) => () => void;
}

function ListStructure<T>({
  results,
  selectBy,
  getContent,
  handleClick,
}: ListStructureProps<T>) {
  return (
    <>
      {results
        ? results?.map((item: any, index: number) => (
            <ListItem
              key={`${Object.values(item).toString()}-${index}`}
              content={getContent(item)}
              onClick={handleClick(item?.[selectBy])}
            />
          ))
        : null}
    </>
  );
}
export default ListStructure;

export const ListWithState = compose(
  LoadingState,
  ErrorState,
  EmptyState,
)(ListStructure);
