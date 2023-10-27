import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Home, Onboarding, Starter } from '../modules';
import { persistor, store } from '../redux';
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
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigator screenOptions={options}>
          <Screen
            name="Starter"
            component={Starter}
            options={{ headerShown: false }}
          />
          <Screen name="Onboarding" component={Onboarding} />
          <Screen name="Home" component={Home} />
        </Navigator>
      </PersistGate>
    </Provider>
  );
}
