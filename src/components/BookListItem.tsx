import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '@app/styles/colors';

interface BoolListItemProps {
  data: {
    list_name: string;
    display_name: string;
    oldest_published_date: string;
    newest_published_date: string;
  };
}

function BookListItem({ data }: BoolListItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data.display_name}</Text>
      <Text style={styles.text}>{data.oldest_published_date}</Text>
      <Text style={styles.text}>{data.newest_published_date}</Text>
    </View>
  );
}
export default BookListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 220,
    marginBottom: 16,
    paddingHorizontal: 24,
    paddingVertical: 16,
    border: '1px solid #ccc',
    borderRadius: 16,
    backgroundColor: colors.white,
  },
  text: {
    lineHeight: 18,
    fontSize: 14,
    paddingLeft: 8,
  },
});
