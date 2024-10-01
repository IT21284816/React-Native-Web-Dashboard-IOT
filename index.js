import { AppRegistry } from 'react-native';
import App from './App'; // Ensure this path points to your App.js
import { name as appName } from './app.json'; // Make sure app.json exists and is configured properly

AppRegistry.registerComponent(appName, () => App);
