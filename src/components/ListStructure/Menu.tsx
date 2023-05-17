import React, { forwardRef } from 'react';
import { colors } from '@app/styles/colors';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface MenuProps {
  isFavorite: boolean;
  onCopy: () => void;
  onClose: (event: any) => void;
  addToFavorite: () => void;
  removeFromFavorite: () => void;
}

const Menu = forwardRef((props: MenuProps, ref: any) => {
  const { isFavorite, onCopy, onClose, addToFavorite, removeFromFavorite } =
    props;

  const onFavoritePress = () => {
    if (isFavorite) {
      removeFromFavorite();
      return null;
    }
    addToFavorite();
  };

  const MENU_LIST = [
    {
      title: 'favorite',
      icon: isFavorite ? 'heart' : 'hearto',
      color: isFavorite ? colors.danger : '',
      onPress: onFavoritePress,
    },
    {
      title: 'share',
      icon: 'sharealt',
      onPress: () => {},
    },
    {
      title: 'copy',
      icon: 'copy1',
      onPress: onCopy,
    },
    {
      title: 'close',
      icon: 'close',
      onPress: onClose,
    },
  ];

  return (
    <View ref={ref} style={styles.menu}>
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
});
export default Menu;

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    width: 200,
    right: 10,
    backgroundColor: colors.white,
    borderRadius: 8,
    boxShadow: '#ccc 1px 0px 8px 0px',
    paddingTop: 4,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderBottomColor: colors.borderGray,
    borderBottomWidth: 1,
  },
  icon: {
    width: 16,
    marginRight: 24,
  },
});
