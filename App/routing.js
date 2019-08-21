import {
  StackNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { LoginScreen } from "./screens/login-screen";

import walkTrough1 from "./component/walkThrough1";

const AppNavigator = createStackNavigator(
  {
 
    Login: {
      screen: LoginScreen
    },
    walkTrough:{
      screen:walkTrough1
    }
  },
  {
    initialRouteName: "Login"
  }
);

export const Navgation = createAppContainer(AppNavigator);
