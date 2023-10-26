import { AppDispatch } from '../../store';
import { setHome } from './slice';
import { THomeState } from './types';

export const setNameAction =
  (name: THomeState['name']) => (dispatch: AppDispatch) => {
    try {
      const result = dispatch(setHome(name));
      return result.payload;
    } catch (error) {
      console.tron.log(error);
      return false;
    }
  };
