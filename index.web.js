import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import AntDesign from 'react-native-vector-icons/Fonts/AntDesign.ttf';
import './src/config/i18n.js';

const AntDesignStyles = `@font-face {
  src: url(${AntDesign});
  font-family: AntDesign;
}`;

const style = document.createElement('style');
style.type = 'text/css';

if (style.styleSheet) {
  style.styleSheet.cssText = AntDesignStyles;
} else {
  style.appendChild(document.createTextNode(AntDesignStyles));
}

document.head.appendChild(style);

if (module.hot) {
  module.hot.accept();
}
AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
