import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

type ReactotronType = typeof Reactotron & {
  log(message?: any, ...optionalParams: any[]): void;
};

declare global {
  interface Console {
    tron: ReactotronType;
  }
}

if (__DEV__ && !console.tron) {
  const hostName = '127.0.0.1';
  const tron = Reactotron.configure({
    host: hostName,
    name: 'React Banking',
    getClientId: async () => 'app-react-banking-reactotron',
  })
    .useReactNative({
      networking: {
        ignoreUrls: /symbolicate|https:\/\/codepush\.appcenter\.ms/,
      },
    })
    .use(reactotronRedux())
    .connect() as ReactotronType;

  tron.clear?.();

  console.tron = tron;
  console.tron.log('Reactotron Configured');
}
