import {
  StackNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { LoginScreen } from "./screens/login-screen";

import { fromRight, fromLeft, flipY, fadeIn, zoomIn, fromTop, flipX } from 'react-navigation-transitions'

import walkTrough1 from "./component/walkThrough1";
import walkThrough2 from './component/walkThrough2';
import walkThrough3 from './component/walkThrough3';
import History from './component/History';
import History1 from './component/History1';
import History2 from './component/History2';
import History3 from './component/History3';
import History4 from './component/History4';
import History5 from './component/History5';
import History6 from './component/History6';
import ErrorAlert from './component/ErrorAlert';
import GreatJob from './component/GreatJob';

const handleCustomTransition = ({ scenes }) => { //handle transitions between screens
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];

  // Custom transitions go there
  if (prevScene
    && prevScene.route.routeName === 'walkThrough2'
    && nextScene.route.routeName === 'walkThrough3') {
    return fromLeft(500);
  } else if (prevScene
    && prevScene.route.routeName === 'Login'
    && nextScene.route.routeName === 'walkThrough') {
    return flipY(800);
  } else if (prevScene
    && prevScene.route.routeName === 'walkThrough3'
    && nextScene.route.routeName === 'History') {
    return fromTop(600);
  } else if (prevScene
    && prevScene.route.routeName === 'History1'
    && nextScene.route.routeName === 'ErrorAlert') {
    return fromTop(600);
  } else if (prevScene
    && prevScene.route.routeName === 'History2'
    && nextScene.route.routeName === 'ErrorAlert') {
    return fromTop(600);
  }
  else if (prevScene
    && prevScene.route.routeName === 'History3'
    && nextScene.route.routeName === 'ErrorAlert') {
    return fromTop(600);
  }

  return fromRight(500);
}


const AppNavigator = createStackNavigator(
  {

    Login: {
      screen: LoginScreen
    },
    walkTrough: {
      screen: walkTrough1
    },
    walkThrough2: { screen: walkThrough2 },
    walkThrough3: { screen: walkThrough3 },
    History: { screen: History },
    History1: { screen: History1 },
    ErrorAlert: { screen: ErrorAlert },
    History2: { screen: History2 },
    History3: { screen: History3 },
    GreatJob: { screen: GreatJob },
    History4: { screen: History4 },
    History5: { screen: History5 },
    History6: { screen: History6 },
  },

  {
    transitionConfig: (nav) => handleCustomTransition(nav)
  },
  {
    initialRouteName: "Login"
  });


export const Navgation = createAppContainer(AppNavigator);
