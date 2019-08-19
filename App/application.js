import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise";
import thunkMiddleware from "redux-thunk";

import {
  State,
  reducer,

  //Actions
  success
} from "./state";


export class Application {
  static current: Application;


  store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(promiseMiddleware, thunkMiddleware))
  );

  static async run() {
    Application.current = new Application();
    try {
      await Application.current.onInstall();
      await Application.current.onStart();
    } catch (err) {
      console.error(err);
    }
  }

  async onStart() {
    // var state = await AsyncStorage.getItem('State');
    //Application.current.store.setState(state);

    console.log(Application.current.store.getState());
  }

  static async onClose() {
    var json = Application.current.store.getState();
    //console.log(JSON.stringify(state));
    console.log(json);
  }
  async onInstall() {}
  async onUpdate() {}

  //TODO:
  onError() {}
}
