import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { colors } from '@app/styles/colors';

export interface ContentItem {
  name: string;
  value: string;
}
interface BoolListItemProps {
  title?: string;
  content: ContentItem[];
  onClick(): void;
}

function ListItem({ title, content, onClick }: BoolListItemProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {content?.map((item: ContentItem) => (
        <Text key={`${item.name}-${item.value}`} style={styles.text}>
          <Text style={styles.textCaption}>{item.name}:</Text> {item.value}
        </Text>
      ))}
    </TouchableOpacity>
  );
}

const isDeepStrictEqual = (
  prevProps: BoolListItemProps,
  nextProps: BoolListItemProps,
) =>
  prevProps?.title === nextProps?.title &&
  JSON.stringify(prevProps?.content) === JSON.stringify(nextProps?.content);

export default memo(ListItem, isDeepStrictEqual);

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
    fontWeight: '500',
    paddingLeft: 8,
  },
  title: {
    lineHeight: 24,
    fontSize: 20,
    marginBottom: 8,
  },
  textCaption: {
    lineHeight: 18,
    fontSize: 14,
    fontWeight: '400',
    paddingLeft: 8,
    color: colors.captionGray,
  },
});
