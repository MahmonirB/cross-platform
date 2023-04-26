import React, { memo } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Pressable,
} from 'react-native';
import { colors } from '@app/styles/colors';
import Icon from 'react-native-vector-icons/AntDesign';

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
      <View>
        {title ? <Text style={styles.title}>{title}</Text> : null}
        <Pressable
          hitSlop={30}
          onPress={() => {}}
          style={pressed => (pressed ? styles.active : styles.inactive)}>
          <Icon
            style={styles.icon}
            name="ellipsis1"
            size={18}
            color={colors.black}
          />
        </Pressable>
      </View>
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
    borderRadius: 16,
    backgroundColor: colors.white,
    boxShadow: '#ccc 1px 0px 8px 0px',
  },
  active: {
    backgroundColor: colors.lightGray,
  },
  inactive: {
    backgroundColor: 'transparent',
  },
  icon: {
    position: 'absolute',
    top: 16,
    right: 8,
    transform: 'rotate(90deg)' as any,
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
