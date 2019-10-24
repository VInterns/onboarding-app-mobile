import {
  StackNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator //will handle back button of mobile to be disabled
} from "react-navigation";
import { LoginScreen } from "./screens/login-screen";

import {
  fromRight,
  fromLeft,
  flipY,
  fadeIn,
  zoomIn,
  fromTop,
  flipX,
  fadeOut
} from "react-navigation-transitions";

import { walkThrough1Screen } from "./screens/walkthrough-screen";
import { walkThrough2 } from "./screens/walkthrough2-screen";
import { walkThrough3 } from "./screens/walkthrough3-screen";
import History from "./component/History";
import History1 from "./component/History1";
import History2 from "./component/History2";
import History3 from "./component/History3";
import History4 from "./component/History4";
import History5 from "./component/History5";
import History6 from "./component/History6";
import History7 from "./component/History7";
import History8 from "./component/History8";
import History9 from "./component/History9";
import History10 from "./component/History10";
import History11 from "./component/History11";
import History12 from "./component/History12";
import History13 from "./component/History13";
import Video1 from "./component/Video1";
import Video2 from "./component/Video2";
import ErrorAlert from "./component/ErrorAlert";
import ErrorAlert2 from "./component/ErrorAlert2";
import ErrorAlert3 from "./component/ErrorAlert3";
import ErrorAlert4 from "./component/ErrorAlert4";
import { greatJob } from "./screens/greatJob-screen";
import GreatJob2 from "./component/GreatJob2";

import Brand from "./component/brand";
import Brand1 from "./component/brand1";
import Brand2 from "./component/brand2";
import Brand3 from "./component/brand3";
import Brand4 from "./component/brand4";
import Brand5 from "./component/brand5";
import Brand6 from "./component/brand6";
import Brand7 from "./component/brand7";

import Organisation from "./component/Organisation";
import Organisation1 from "./component/Organisation1";
import Organisation2 from "./component/Organisation2";
import Organisation3 from "./component/Organisation3";
import Organisation4 from "./component/Organisation4";
import Organisation5 from "./component/Organisation5";
import CongratulationsR from "./component/Congratulations-R";


import HealthAndSafety from "./component/HealthAndSafety"
import HealthAndSafety1 from "./component/HealthAndSafety1"
import HealthAndSafety2 from "./component/HealthAndSafety2";
import HealthAndSafety3 from "./component/HealthAndSafety3";
import HealthAndSafety9 from "./component/HealthAndSafety9"
import HealthAndSafety10 from "./component/HealthAndSafety10"
import HealthAndSafety11 from "./component/HealthAndSafety11"


const handleCustomTransition = ({ scenes }) => {
  //handle transitions between screens
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];

  // Custom transitions go there
  if (
    prevScene &&
    prevScene.route.routeName === "walkThrough2" &&
    nextScene.route.routeName === "walkThrough3"
  ) {
    return fromLeft(500);
  } else if (
    prevScene &&
    prevScene.route.routeName === "Login" &&
    nextScene.route.routeName === "walkThrough"
  ) {
    return flipY(800);

  } else if (
    prevScene &&
    prevScene.route.routeName === "walkThrough3" &&
    nextScene.route.routeName === "Video1"
  ) {
    return zoomIn(600);
  } else if (
    prevScene &&
    prevScene.route.routeName === "History1" &&
    nextScene.route.routeName === "ErrorAlert"
  ) {
    return fromTop(600);
  } else if (
    prevScene &&
    prevScene.route.routeName === "History2" &&
    nextScene.route.routeName === "ErrorAlert2"
  ) {
    return fromTop(600);
  } else if (
    prevScene &&
    prevScene.route.routeName === "History3" &&
    nextScene.route.routeName === "ErrorAlert3"
  ) {
    return fromTop(600);
  } else if (
    prevScene &&
    prevScene.route.routeName === "History8" &&
    nextScene.route.routeName === "ErrorAlert4"
  ) {
    return fromTop(600);

  } else if (prevScene
    && prevScene.route.routeName === 'Video1'
    && nextScene.route.routeName === 'History') {
    return zoomIn(800);
  }

  return fromRight(800);
}

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    //AppIntroSlider: { screen: AppIntroSlider },
    walkThrough: {
      screen: walkThrough1Screen,
      navigationOptions: {
        header: null
      }
    },
    walkThrough2: {
      screen: walkThrough2,
      navigationOptions: {
        header: null
      }
    },
    walkThrough3: {
      screen: walkThrough3,
      navigationOptions: {
        header: null
      }
    },
    Video1: {
      screen: Video1,
      navigationOptions: {
        header: null
      }
    },
    Video2: {
      screen: Video2,
      navigationOptions: {
        header: null
      }
    },
    History: { screen: History },
    History1: { screen: History1 },
    ErrorAlert: { screen: ErrorAlert },
    History2: { screen: History2 },
    History3: { screen: History3 },
    greatJob: { screen: greatJob },
    History4: { screen: History4 },
    History5: { screen: History5 },
    History6: { screen: History6 },
    History7: { screen: History7 },
    History8: { screen: History8 },
    History9: { screen: History9 },
    GreatJob2: { screen: GreatJob2 },
    ErrorAlert2: { screen: ErrorAlert2 },
    ErrorAlert3: { screen: ErrorAlert3 },
    ErrorAlert4: { screen: ErrorAlert4 },
    Brand: { screen: Brand },
    Brand1: { screen: Brand1 },
    Brand2: { screen: Brand2 },
    Brand3: { screen: Brand3 },
    Brand4: { screen: Brand4 },
    Brand5: { screen: Brand5 },
    Brand6: { screen: Brand6 },
    Brand7: { screen: Brand7 },
    Organisation: { screen: Organisation },
    Organisation1: { screen: Organisation1 },
    Organisation2: { screen: Organisation2 },
    Organisation3: { screen: Organisation3 },
    Organisation4: { screen: Organisation4 },
    Organisation5: { screen: Organisation5 },
    CongratulationsR: { screen: CongratulationsR },
    History10: { screen: History10 },
    History11: { screen: History11 },
    History12: { screen: History12 },
    History13: { screen: History13 },

    HealthAndSafety: { screen: HealthAndSafety },
    HealthAndSafety1: { screen: HealthAndSafety1 },
    HealthAndSafety2: { screen: HealthAndSafety2 },
    HealthAndSafety3: { screen: HealthAndSafety3 },
    HealthAndSafety9: { screen: HealthAndSafety9 },
    HealthAndSafety10: { screen: HealthAndSafety10 },
    HealthAndSafety11: { screen: HealthAndSafety11 },
  },

  {
    transitionConfig: nav => handleCustomTransition(nav)
  },
  {
    initialRouteName: "Login"
  }
);

export const Navgation = createAppContainer(AppNavigator);
