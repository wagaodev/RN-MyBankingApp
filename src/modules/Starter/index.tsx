/* eslint-disable global-require */
import React, { useEffect, useRef, useCallback } from 'react';
import { Animated, View } from 'react-native';

import LottieView from 'lottie-react-native';

import { useAppSelector } from '../../redux';
import { TStarter } from '../../routes/types';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

export function Starter({ navigation }: TStarter) {
  const { name } = useAppSelector(state => state.home);

  console.log('name', name);

  const animationProgress = useRef(new Animated.Value(0));

  const handleNavigate = useCallback(() => {
    if (name) {
      setTimeout(() => {
        navigation.navigate('Home');
      }, 2000); // Navega para a tela Home após 2 segundos
    } else {
      navigation.navigate('Onboarding');
    }
  }, [navigation, name]);

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    handleNavigate();
  }, [handleNavigate]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AnimatedLottieView
        style={{ width: 600, height: 600 }}
        source={require('../../assets/animations/ah.json')}
        progress={animationProgress.current}
        loop={false}
      />
    </View>
  );
}
