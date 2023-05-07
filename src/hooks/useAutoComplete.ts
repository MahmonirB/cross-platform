import { useState } from 'react';

type StateType = {
  value: string;
  suggestions: Array<{ itemValue: string }>;
  currentFocus: number | null;
};

const INITIAL_STATE: StateType = {
  value: '',
  suggestions: [],
  currentFocus: null,
};

const defaultFilter = (inputValue: string, items: string[]) =>
  items
    .filter(item => {
      const match = item.substr(0, inputValue.length);
      return match && match.toLowerCase() === inputValue.toLowerCase();
    })
    .map(item => ({
      rest: item.substr(inputValue.length),
      itemValue: item,
    }))
    .slice(0, 13);

const useAutocomplete = () => {
  const [{ value, suggestions, currentFocus }, setState] =
    useState(INITIAL_STATE);

  const handleValueChange = (
    newValue: string,
    items: string[],
    { customFilter }: any = {},
  ) => {
    const filter = customFilter ?? defaultFilter;

    setState(s => ({
      ...s,
      currentFocus: -1,
      value: newValue,
      suggestions: filter(newValue, items),
    }));
  };

  const select = (text: string) => setState({ ...INITIAL_STATE, value: text });

  const handleKeyDown = ({ key }: { key: string }) => {
    switch (key) {
      case 'ArrowDown':
        setState(s => ({
          ...s,
          currentFocus:
            s?.currentFocus === s.suggestions.length - 1
              ? 0
              : (s.currentFocus as number) + 1,
        }));
        break;
      case 'ArrowUp':
        setState(s => ({
          ...s,
          currentFocus:
            s.currentFocus === 0 || s.currentFocus === -1
              ? s.suggestions.length - 1
              : (s.currentFocus as number) - 1,
        }));
        break;
      case 'Enter':
        if (currentFocus !== null && currentFocus !== -1) {
          select(suggestions[currentFocus].itemValue);
        }
        break;
      default:
        break;
    }
  };

  return {
    value,
    handleValueChange,
    suggestions,
    select,
    handleKeyDown,
    currentFocus,
  };
};

export default useAutocomplete;
