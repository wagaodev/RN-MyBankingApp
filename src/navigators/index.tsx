import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { Home } from '../modules';
import { RootStackParamList } from './types';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const options: NativeStackNavigationOptions = {
  headerShown: true,
  headerTitleStyle: {
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
};

export function Routes() {
  return (
    <Navigator screenOptions={options}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
