import { useCallback, useEffect } from 'react';

import { useAppSelector } from '../../redux';
import { TStarter } from '../../routes/types';

export function Starter({ navigation }: TStarter) {
  const { name } = useAppSelector(state => state.home);

  console.log('name', name);

  const handleNavigate = useCallback(() => {
    if (name) {
      setTimeout(() => {
        navigation.navigate('Home');
      }, 1);
    }
    return navigation.navigate('Onboarding');
  }, [navigation, name]);

  useEffect(() => {
    handleNavigate();
  }, [handleNavigate]);

  return null;
}
