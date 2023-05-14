import { ActivityIndicator } from 'react-native';
import { WEB_ENV } from '@app/config';
import { STATUS_TEXT } from '@app/constants/Variables';
import { colors } from '@app/styles/colors';
import searchResults from '@app/utils/searchResults';
import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LazyImage from './LazyImage';

interface StateProps {
  isLoading: boolean;
  isError: boolean;
  results: any;
  searchBy: string;
}

type LoadingStateProps<T> = Pick<StateProps, 'isLoading'> & T;
type ErrorStateProps<T> = Pick<StateProps, 'isError'> & T;
type EmptyStateProps<T> = Pick<StateProps, 'results'> & T;
type SearchStateProps<T> = Partial<StateProps> & T;

export function LoadingState<T>(Component: FC<T>) {
  return (props: LoadingStateProps<T>) => {
    const { isLoading } = props;

    if (isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size={28} />
          <Text style={styles.text}>{STATUS_TEXT.loading}</Text>
        </View>
      );
    }

    return <Component {...props} />;
  };
}

export function ErrorState<T>(Component: FC<T>) {
  return (props: ErrorStateProps<T>) => {
    const { isError } = props;

    if (isError) {
      return (
        <View style={styles.container}>
          <LazyImage name="error" />
          <Text style={styles.text}>{STATUS_TEXT.error}</Text>
        </View>
      );
    }

    return <Component {...props} />;
  };
}

export function EmptyState<T>(Component: FC<T>) {
  return (props: EmptyStateProps<T>) => {
    const { results } = props;

    if (!results?.length) {
      return (
        <View style={styles.container}>
          <LazyImage name="emptyList" />
          <Text style={styles.text}>{STATUS_TEXT.empty}</Text>
        </View>
      );
    }

    return <Component {...props} />;
  };
}

export function SearchState<T>(Component: FC<T>) {
  return (props: SearchStateProps<T>) => {
    const { results, searchBy } = props;

    if (searchBy) {
      return (
        <Component {...props} results={searchResults<T>(results)(searchBy)} />
      );
    }

    return <Component {...props} />;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: WEB_ENV ? 18 : 12,
    fontWeight: '500',
    color: colors.reasonGray,
  },
  text: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: '500',
  },
});
