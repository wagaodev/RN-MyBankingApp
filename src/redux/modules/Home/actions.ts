import { AppDispatch } from '../../store';
import { setHome } from './slice';
import { THomeState } from './types';

export const setNameAction =
  (name: THomeState['name']) => async (dispatch: AppDispatch) => {
    try {
      return dispatch(setHome(name)).payload;
    } catch (e) {
      console.tron.log('Error setting name: ', e);
      return false;
    }
  };
