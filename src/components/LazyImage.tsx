import { WEB_ENV } from '@app/config';
import { SVG_IMG } from '@app/constants/Variables';
import React, { Suspense } from 'react';
import { Text } from 'react-native';

const Svg = SVG_IMG.error;

const LazyImage = () => {
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
