
import React, { Component } from 'react';


import {Button,TouchableOpacity} from 'react-native';

class Home extends Component {
    static navigationOptions = {
      title: 'Home Page',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to Jane's profile"
         // onPress={() => navigate('Profile', {name: 'Jane'})}
        />
      );
    }
  }

  export default Home;