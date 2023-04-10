import React from 'react';
import ListItem from './ListItem';
import { EmptyState, ErrorState, LoadingState } from '../States';
import { compose } from '@app/utils/compose';

function ListStructure({ results, selectBy, getContent, handleClick }: any) {
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
