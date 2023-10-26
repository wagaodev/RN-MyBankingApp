import {
  combineReducers,
  configureStore,
  StoreEnhancer,
  Action,
  ThunkAction,
} from '@reduxjs/toolkit';
import EncryptedStorage from 'react-native-encrypted-storage';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import autoLevelMerge2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import '../../configs/reactotron';

// import type { RootState, AppDispatch } from '.';

// Use throughout your app instead of plain `useDispatch` and `useSelector`

import homeReducer from '../modules/Home/slice';

const rootPersistConfig: PersistConfig<any> = {
  version: 2,
  debug: __DEV__,
  key: 'HomeStorage',
  whitelist: ['home'],
  storage: EncryptedStorage,
  stateReconciler: autoLevelMerge2,
};

const reducers = combineReducers({
  home: homeReducer,
});

const persisted = persistReducer<ReturnType<typeof reducers>>(
  rootPersistConfig,
  reducers,
);
const middlewares = __DEV__ && console.tron.createEnhancer?.();

const enhancers = __DEV__ ? ([middlewares] as StoreEnhancer[]) : undefined;

const store = configureStore({
  reducer: persisted,
  enhancers,
  devTools: __DEV__,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        immutableCheck: false,
        serializableCheck: false,
      },
    }),
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type GetRootState = () => RootState;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store, persistor, useAppSelector };
