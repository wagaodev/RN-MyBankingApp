import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Starter: undefined;
  Onboarding: undefined;
  Home: undefined;
};

export type TOnboarding = NativeStackScreenProps<
  RootStackParamList,
  'Onboarding'
>;

export type TStarter = NativeStackScreenProps<RootStackParamList, 'Starter'>;
export type THome = NativeStackScreenProps<RootStackParamList, 'Home'>;
