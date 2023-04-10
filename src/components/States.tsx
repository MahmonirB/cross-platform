import { WEB_ENV } from '@app/config';
import { STATUS_TEXT } from '@app/constants/Variables';
import { colors } from '@app/styles/colors';
import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StateProps {
  isLoading: boolean;
  isError: boolean;
  results: any;
}

export function LoadingState<T>(Component: FC<T>) {
  return (props: Pick<StateProps, 'isLoading'> & T) => {
    const { isLoading } = props;

    if (isLoading) {
      return (
        <View style={styles.container}>
          <Text>{STATUS_TEXT.loading}</Text>
        </View>
      );
    }

    return <Component {...props} />;
  };
}

export function ErrorState<T>(Component: FC<T>) {
  return (props: Pick<StateProps, 'isError'> & T) => {
    const { isError } = props;

    if (isError) {
      return (
        <View style={styles.container}>
          <Text>{STATUS_TEXT.error}</Text>
        </View>
      );
    }

    return <Component {...props} />;
  };
}

export function EmptyState<T>(Component: FC<T>) {
  return (props: Pick<StateProps, 'results'> & T) => {
    const { results } = props;

    if (!results?.length) {
      return (
        <View style={styles.container}>
          <Text>{STATUS_TEXT.empty}</Text>
        </View>
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
});
