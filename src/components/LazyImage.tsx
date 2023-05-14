import { SVG_IMG } from '@app/constants/Variables';
import React, { Suspense } from 'react';
import { Text } from 'react-native';

const LazyImage = ({ name }: { name: string }) => {
  const Svg = SVG_IMG[name];

  return (
    <Suspense fallback={<Text>loading...</Text>}>
      <Svg />
    </Suspense>
  );
};

export default LazyImage;
