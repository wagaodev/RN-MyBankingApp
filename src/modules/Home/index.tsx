import React from 'react';
import { Text, View } from 'react-native';

import { useAppSelector } from '../../redux';

export function Home() {
  const name = useAppSelector(state => state.home.name);
  console.log('name', name);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Olá {name}</Text>
    </View>
  );
}
