import React, { ReactNode } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import { persistor, store } from '../../redux';
import { theme } from '../../theme';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaProvider>
            <NavigationContainer>{children}</NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
