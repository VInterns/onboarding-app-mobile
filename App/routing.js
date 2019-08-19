import {
  StackNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { LoginScreen } from "./screens/login-screen";

const AppNavigator = createStackNavigator(
  {
 
    Login: {
      screen: LoginScreen
    },
  },
  {
    initialRouteName: "Login"
  }
);

export const Navgation = createAppContainer(AppNavigator);
