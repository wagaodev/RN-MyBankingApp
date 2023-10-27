import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

import { useAppDispatch, setNameAction, useAppSelector } from '../../redux';
import { TOnboarding } from '../../routes/types';

export function Onboarding({ navigation }: TOnboarding) {
  const [name, setName] = useState<string>('');

  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(state => state.home.name);

  console.log('currentUser', currentUser);

  const handleSetName = (text: string) => setName(text);
  const handleNavigateToHome = (name: string) => {
    dispatch(setNameAction(name));
    navigation.navigate('Home');
  };

  return (
    <View>
      <TextInput placeholder="Nome" value={name} onChangeText={handleSetName} />
      <Button title="Cadastrar" onPress={() => handleNavigateToHome(name)} />
      <Button title="NAVEGAR" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
