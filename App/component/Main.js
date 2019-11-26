import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fromRight, fromLeft, flipY, fadeIn, zoomIn, fromTop, flipX } from 'react-navigation-transitions'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './Login';
import Home from './Home';
import walkThrough1 from './walkThrough1';
import walkThrough2 from './walkThrough2';
import walkThrough3 from './walkThrough3';
import History from './History';
import History1 from './History1';
import History2 from './History2';
import History3 from './History3';
import History4 from './History4';
import History5 from './History5';
import ErrorAlert from './ErrorAlert';
import GreatJob from './GreatJob';


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
    && nextScene.route.routeName === 'walkThrough1') {
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
const MainNavigator = createStackNavigator({
  Login: { screen: Login },// first screen to appear is the login page
  Home: { screen: Home },
  walkThrough1: { screen: walkThrough1 },
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
}, {
  transitionConfig: (nav) => handleCustomTransition(nav)
});

const Main = createAppContainer(MainNavigator);

export default Main;

