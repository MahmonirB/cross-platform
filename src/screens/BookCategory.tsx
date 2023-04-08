import { bookCategory } from '@app/constants/ApiArgs';
import useReactQuery from '@app/lib/Api';
import React from 'react';
import { View } from 'react-native';

function BookCategory() {
  const { data } = useReactQuery(bookCategory);
  console.log(data);
  return <View />;
}

export default BookCategory;
