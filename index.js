/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/Main';
import {name as appName} from './app.json';
import { Platform } from 'react-native';



AppRegistry.registerComponent(appName, () => App);

