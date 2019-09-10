import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

import { AppLoading } from "expo";

import { Root } from "native-base";

import { Navgation } from "./App/routing";
import { Application } from "./App/application";
import { Provider } from "react-redux";


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentDidMount() {
    await Application.run();
    // await Expo.Font.loadAsync({
    //   Roboto: require("native-base/Fonts/Roboto.ttf"),
    //   Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    //   Ionicons: require("native-base/Fonts/Ionicons.ttf")
    // });
    this.setState({ isReady: true });
  }
  async componentWillUnmount() {
    await Application.onClose();
  }

  render() {
    if (!this.state.isReady || !Application.current) {
      return <AppLoading />;
    }
    return (
      <Provider store={Application.current.store}>
        <Root>
          <View style={styles.container}>
            
            <Navgation />
            <AppLoading />
          </View>
        </Root>

      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
