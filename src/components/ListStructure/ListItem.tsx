import React, { memo, useCallback, useRef, useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Pressable,
} from 'react-native';
import { colors } from '@app/styles/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import Menu from './Menu';
import { useFavorite } from '@app/store/favorites';
import useClipboard from '@app/hooks/useClipboard';
import { useOnClickOutside } from '@app/hooks/useOutsideClick';

export interface ContentItem {
  name: string;
  value: string;
}
interface BoolListItemProps {
  title?: string;
  showMenu?: boolean;
  content: ContentItem[];
  onClick(): void;
}

function ListItem({ title, showMenu, content, onClick }: BoolListItemProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const [, setToClipboard] = useClipboard();

  const categoryName: any = useFavorite((state: any) => state.categoryName);
  const updateCategoryName: any = useFavorite(
    (state: any) => state.updateCategoryName,
  );

  const handleClose = useCallback((event: any) => {
    if (!menuRef?.current || !event?.target.contains(menuRef?.current)) {
      setOpen(false);
    }
  }, []);

  const handleOpen = useCallback(() => setOpen(true), []);
  useOnClickOutside(menuRef, handleClose);

  const addToFavorite = () =>
    updateCategoryName([...categoryName, content[0]?.value]);

  const removeFromFavorite = () => {
    const currentCategoryName = [...categoryName];
    const index = categoryName?.findIndex(
      (item: string) => item === content[0]?.value,
    );
    currentCategoryName?.splice(index, 1);
    updateCategoryName(currentCategoryName);
  };

  const onCopy = () => {
    setToClipboard(content[0]?.value);
  };

  const handleClickOnItem = () => {
    if (!open) {
      onClick();
    }
  };

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={handleClickOnItem}>
        <View>{title ? <Text style={styles.title}>{title}</Text> : null}</View>
        {content?.map((item: ContentItem) => (
          <Text key={`${item.name}-${item.value}`} style={styles.text}>
            <Text style={styles.textCaption}>{item.name}:</Text> {item.value}
          </Text>
        ))}
      </TouchableOpacity>
      {showMenu ? (
        <View style={styles.menuContainer}>
          <Pressable
            hitSlop={30}
            onPress={handleOpen}
            style={pressed => (pressed ? styles.active : styles.inactive)}>
            <Icon
              style={styles.icon}
              name="ellipsis1"
              size={18}
              color={colors.black}
            />
          </Pressable>
          {open ? (
            <Menu
              ref={menuRef}
              isFavorite={categoryName?.includes(content[0]?.value)}
              onCopy={onCopy}
              addToFavorite={addToFavorite}
              removeFromFavorite={removeFromFavorite}
              onClose={handleClose}
            />
          ) : null}
        </View>
      ) : null}
    </>
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
    elevation: 5,
    marginHorizontal: 16,
  },
  menuContainer: {
    position: 'absolute',
    top: 10,
    right: 24,
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
