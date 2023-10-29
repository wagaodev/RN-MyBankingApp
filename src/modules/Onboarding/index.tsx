import React from 'react';
import { Button, View } from 'react-native';

import { z } from 'zod';

import { Form } from '../../components/Form'; // Ajuste o caminho conforme necessário
import { useAppDispatch, setNameAction } from '../../redux';
import { TOnboarding } from '../../routes/types';

const nameSchema = z.string().min(4, { message: 'Mínimo 3 caracteres' });

export function Onboarding({ navigation }: TOnboarding) {
  const dispatch = useAppDispatch();

  const handleNavigateToHome = (values: Record<string, any>) => {
    dispatch(setNameAction(values.name));
    navigation.navigate('Home');
  };

  return (
    <View>
      <Form
        inputs={[
          {
            name: 'name',
            placeholder: 'Nome',
            validationSchema: nameSchema,
          },
        ]}
        onSubmit={handleNavigateToHome}
      />
      <Button title="NAVEGAR" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
