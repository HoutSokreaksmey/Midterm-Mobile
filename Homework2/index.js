/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import ReactHook from './Homework2/ReackHook';
// import ListeUser from './Homework2/ReactContext/ListeUser';
import ScreenLogin from './Homework2/Customize_Component/ScreenLogin';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => ReactHook);
// AppRegistry.registerComponent(appName, () => ListeUser);
AppRegistry.registerComponent(appName, () => ScreenLogin);
