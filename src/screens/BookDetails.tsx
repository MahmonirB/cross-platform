import { bookDetails } from '@app/constants/ApiArgs';
import useReactQuery from '@app/lib/Api';
import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

function BookDetails({ route }: any) {
  const {
    params: { value },
  } = route;
  const { data, isLoading, isError } = useReactQuery(bookDetails(value));
  const results = data?.results;
  console.log(data);

  if (isLoading) {
    return (
      <View>
        <Text>Data Not found...</Text>
      </View>
    );
  }

  if (!results?.length || isError) {
    return (
      <View>
        <Text>Data Not found...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {results?.map((result: any) => (
        <View key={result.amazon_product_url}>
          <Text style={styles.title}>{result.display_name}</Text>
          <Text style={styles.text}>
            bestsellers date: {result.bestsellers_date}
          </Text>
          <Text style={styles.text}>
            published date: {result.newest_published_date}
          </Text>
          <Text style={styles.text}>rank: {result.rank}</Text>
          <Text style={styles.text}>
            rank last week: {result.rank_last_week}
          </Text>
          <Text style={styles.text}>
            amazon product url: {result.amazon_product_url}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  text: {
    lineHeight: 18,
    fontSize: 14,
    paddingLeft: 8,
  },
  title: {
    lineHeight: 32,
    fontSize: 28,
  },
});
