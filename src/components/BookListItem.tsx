import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { colors } from '@app/styles/colors';

interface BoolListItemProps {
  data: {
    list_name: string;
    display_name: string;
    oldest_published_date: string;
    newest_published_date: string;
  };
  onClick: () => void;
}

function BookListItem({ data, onClick }: BoolListItemProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Text style={styles.title}>{data.display_name}</Text>
      <Text style={styles.text}>
        oldest published date: {data.oldest_published_date}
      </Text>
      <Text style={styles.text}>
        newest published date: {data.newest_published_date}
      </Text>
    </TouchableOpacity>
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
  title: {
    lineHeight: 24,
    fontSize: 20,
  },
});
