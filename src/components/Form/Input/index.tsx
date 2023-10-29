import React, { forwardRef, useState } from 'react';
import { TextInput } from 'react-native';

import * as S from './styles';

import { TProps } from '../types';

export const InputTemplate = forwardRef<TextInput, TProps>((props, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <S.Input
      {...props}
      ref={ref}
      active={isFocused}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
});
