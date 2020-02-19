/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/Main';
import {name as appName} from './app.json';
import { Platform } from 'react-native';

if (Platform.OS === 'android') {
  require('intl');
  require('intl/locale-data/jsonp/fr-BE');
  require('intl/locale-data/jsonp/nl-BE');
  require('intl/locale-data/jsonp/it-IT');
  require('intl/locale-data/jsonp/ja-JP');
}

AppRegistry.registerComponent(appName, () => App);
