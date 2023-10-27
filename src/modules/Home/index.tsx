import React from 'react';
import { Text, View } from 'react-native';

// import * as S from './styles';

import { useAppSelector } from '../../redux';

export function Home() {
  const name = useAppSelector(state => state.home.name);
  console.log('name', name);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
