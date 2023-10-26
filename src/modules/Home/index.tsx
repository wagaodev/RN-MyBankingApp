import React from 'react';
import { Text, View } from 'react-native';
import { useAppSelector } from '../../redux/store/hook';

export function Home() {
  const name = useAppSelector(state => state.home.name);
  return (
    <View>
      <Text>Olá {name}</Text>
    </View>
  );
}
