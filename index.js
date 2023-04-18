/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import './src/config/i18n.js';

if (__DEV__) {
  import('./src/config/reactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

AppRegistry.registerComponent(appName, () => App);
