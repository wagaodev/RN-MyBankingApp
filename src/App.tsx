import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Routes } from './navigators';

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <SafeAreaProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
    // </ThemeProvider>
  );
}

export default App;
