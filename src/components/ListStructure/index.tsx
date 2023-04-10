import React from 'react';
import ListItem from './ListItem';
import { EmptyState, ErrorState, LoadingState } from '../States';
import { compose } from '@app/utils/compose';

interface ListStructureProps {
  results: any;
  selectBy: string;
  getContent: any;
  handleClick: (value: string) => () => void;
}

function ListStructure({
  results,
  selectBy,
  getContent,
  handleClick,
}: ListStructureProps) {
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
