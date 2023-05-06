import React, { useRef } from 'react';
import { colors } from '@app/styles/colors';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useOnClickOutside } from '@app/hooks/useOutsideClick';

interface MenuProps {
  isFavorite: boolean;
  onClose: () => void;
  addToFavorite: () => void;
  removeFromFavorite: () => void;
}

function Menu({
  isFavorite,
  onClose,
  addToFavorite,
  removeFromFavorite,
}: MenuProps) {
  const menuRef = useRef(null);
  useOnClickOutside(menuRef, onClose);

  const MENU_LIST = [
    {
      title: 'favorite',
      icon: isFavorite ? 'heart' : 'hearto',
      color: isFavorite ? colors.danger : '',
      onPress: () => {
        if (isFavorite) {
          removeFromFavorite();
          return null;
        }
        addToFavorite();
      },
    },
    {
      title: 'share',
      icon: 'sharealt',
      onPress: () => {},
    },
  ];

  return (
    <View ref={menuRef} style={styles.menu}>
      {MENU_LIST.map(item => (
        <TouchableOpacity
          onPress={item.onPress}
          key={item.title}
          style={styles.row}>
          <Icon
            style={styles.icon}
            name={item.icon}
            size={18}
            color={item?.color ?? colors.captionGray}
          />
          <Text>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
export default Menu;

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    width: 200,
    height: 90,
    right: 10,
    backgroundColor: colors.white,
    borderRadius: 8,
    boxShadow: '#ccc 1px 0px 8px 0px',
    paddingTop: 8,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomColor: colors.borderGray,
    borderBottomWidth: 1,
  },
  icon: {
    width: 16,
    marginRight: 16,
  },
});
