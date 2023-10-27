import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { Home, Onboarding, Starter } from '../modules';
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
      <Screen
        name="Starter"
        component={Starter}
        options={{ headerShown: false }}
      />
      <Screen name="Onboarding" component={Onboarding} />
      <Screen
        name="Home"
        component={Home}
        options={{
          headerBackVisible: false,
          headerTitle: '',
        }}
      />
    </Navigator>
  );
}
