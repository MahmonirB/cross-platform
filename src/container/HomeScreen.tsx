import useReactQuery from '@app/lib/Api';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HomeScreen() {
  const { data } = useReactQuery({
    arg: {
      url: '/books/v3/lists.json',
      key: ['book'],
      params: { list: 'hardcover-fiction' },
    },
  });
console.log({data})
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
