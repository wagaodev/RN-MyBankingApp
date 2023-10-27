import React from 'react';

import * as S from './styles';

import { useAppSelector } from '../../redux';

export function Home() {
  const name = useAppSelector(state => state.home.name);
  console.log('name', name);

  return (
    <S.Container>
      <S.Title>Olá {name}</S.Title>
    </S.Container>
  );
}
