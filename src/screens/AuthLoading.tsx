import React, { useEffect, useRef } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';
import typography from '../styles/typography';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@app/navigation/AppNavigator';
import { CompositeScreenProps } from '@react-navigation/native';
import { AuthStackProps } from '@app/navigation/AuthenticateStack/AuthenticateStack';

type Props = CompositeScreenProps<
  NativeStackScreenProps<AuthStackProps, 'AuthStack'>,
  NativeStackScreenProps<RootStackParamList>
>;

function AuthLoading(props: Props) {
  const { navigation } = props;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  function chooseRoot() {
    // TODO: Add finctionality to check token and navigate to proper roat
    navigation.replace('Main');
  }

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.2,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 },
    ).start();

    setTimeout(() => chooseRoot(), 4000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
        },
      ]}>
      <Text style={[typography.h2]}>App is loading...</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AuthLoading;
