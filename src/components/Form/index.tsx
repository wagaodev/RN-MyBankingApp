import React from 'react';
import { View, Text } from 'react-native';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { z } from 'zod';

import * as S from './styles';

import { InputTemplate } from './Input'; // Ajuste o caminho conforme necessário

type InputInfo = {
  name: string;
  placeholder: string;
  validationSchema: z.ZodSchema<any>;
};

type FormProps = {
  inputs: InputInfo[];
  onSubmit: SubmitHandler<Record<string, any>>;
};

export function Form({ inputs, onSubmit }: FormProps) {
  const validationSchema = z.object(
    inputs.reduce(
      (acc, input) => ({ ...acc, [input.name]: input.validationSchema }),
      {},
    ),
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  return (
    <View>
      {inputs.map(input => (
        <Controller
          key={input.name}
          name={input.name}
          control={control}
          render={({ field }) => (
            <View>
              <InputTemplate {...field} placeholder={input.placeholder} />
              <Text>{(errors[input.name]?.message as string) ?? ''}</Text>
            </View>
          )}
        />
      ))}
      <S.SubmitButton onPress={handleSubmit(onSubmit)}>
        <S.SubmitButtonText>Submit</S.SubmitButtonText>
      </S.SubmitButton>
    </View>
  );
}
