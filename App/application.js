
export class Application {
  static current: Application;

  persistor;


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
  async onUpdate() { }

  //TODO:
  onError() { }
}
