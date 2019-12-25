import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

import { AppLoading } from "expo";

import { Root } from "native-base";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, Store } from "redux";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

import { Navgation } from "./App/routing";
import { Application } from "./App/application";
import { Provider } from "react-redux";
import { AsyncStorage } from "react-native";
import { State, reducer, success } from "./App/state";

import * as Font from "expo-font";
// const VodafoneBd = require("./assets/fonts/Vodafone Rg Bold.ttf");
// const VodafoneRg = require("./assets/fonts/VodafoneRg.ttf");

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: hardSet
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(promiseMiddleware, thunkMiddleware))
);
const persistor = persistStore(store);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
      fontLoaded: false
    };
  }
  async componentDidMount() {
    await Application.run();

    // await Font.loadAsync({
    //   "VodafoneRg": require("./assets/fonts/Vodafone.ttf"),
    //   "VodafoneBold": require("./assets/fonts/VodafoneRg-Bold.ttf")

    // });
      await Font.loadAsync({
      "VodafoneRg": require("./App/assets/fonts/Vodafone.ttf"),
      "VodafoneBold": require("./App/assets/fonts/VodafoneRg-Bold.ttf")
    });

    this.setState({ isReady: true ,fontLoaded:true});
  }
  async componentWillUnmount() {
    await Application.onClose();
  }

  render() {
    if (!this.state.isReady || !Application.current) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Root>
            <View style={styles.container}>
              <Navgation />
              <AppLoading />
            </View>
          </Root>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
