import { WEB_ENV } from '@app/config';
import { SVG_IMG } from '@app/constants/Variables';
import React, { Suspense } from 'react';
import { Text } from 'react-native';

const LazyImage = ({ name }: { name: string }) => {
  const Svg = SVG_IMG[name];

  if (WEB_ENV) {
    return (
      <Suspense fallback={<Text>loading...</Text>}>
        <Svg />
      </Suspense>
    );
  }
  return null;
};

export default LazyImage;
