import React, { Suspense } from 'react';
import { Text } from 'react-native';

const LazyImage = ({ name }: { name: string }) => {
  const Svg = React.lazy(() => import(`../../public/images/${name}.svg`));

  return (
    <Suspense fallback={<Text>loading...</Text>}>
      <Svg />
    </Suspense>
  );
};

export default LazyImage;
