import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from'./Login';
import Home from'./Home';
import walkThrough1 from'./walkThrough1';
import {createStackNavigator, createAppContainer} from 'react-navigation';



const MainNavigator = createStackNavigator({
    Login: {screen: Login},// first screen to appear is the login page
    Home: {screen: Home},
    walkThrough1:{screen:walkThrough1}
  
});

const Main = createAppContainer(MainNavigator);

export default Main;

/* export default class App extends React.Component {

  render(){
  return (
    <View style={styles.container}>
      <Login/>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
