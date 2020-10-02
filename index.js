import { AppRegistry } from 'react-native';

import { configureHttpClient } from './src/service';
import { ConnectedApp } from './src/App';

import { name } from './app.json';

configureHttpClient();

AppRegistry.registerComponent(name, () => ConnectedApp);
