import { createStore, applyMiddleware, Store } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise";
import thunkMiddleware from "redux-thunk";
// import storage from 'redux-persist/lib/storage/getStorage';
import { AsyncStorage } from 'react-native';
import { memoize } from 'lodash';

import {
  State,
  reducer,
  success
} from "./state";

// const getStorage = memoize(getStorage);


export class Application {
  static current: Application;

  persistor ;
  

  static async run() {
    Application.current = new Application();
    try {
      await Application.current.onInstall();
      await Application.current.onStart();
    // await AsyncStorage.clear();

    } catch (err) {
      console.error(err);
    }
  }

  async onStart() {
    // var state = await AsyncStorage.getItem('State');
    //Application.current.store.setState(state);


  }

  static async onClose() {
    // var json = Application.current.store.getState();
    // //console.log(JSON.stringify(state));
    // console.log(json);
  }
  async onInstall() {

  }
  async onUpdate() {}

  //TODO:
  onError() {}
}
